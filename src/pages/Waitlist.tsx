import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Puzzle, ArrowLeft, CheckCircle } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const waitlistSchema = z.object({
  email: z.string().email("Invalid email address").max(255, "Email too long"),
  fullName: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  role: z.enum(["business", "freelancer", "msme", "hoster"], {
    errorMap: () => ({ message: "Please select your role" }),
  }),
  companyName: z.string().trim().max(100, "Company name too long").optional(),
});

const Waitlist = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email") as string,
      fullName: formData.get("fullName") as string,
      role: formData.get("role") as string,
      companyName: formData.get("companyName") as string,
    };

    try {
      const validated = waitlistSchema.parse(data);
      
      const { error } = await supabase
        .from("waitlist")
        .insert({
          email: validated.email,
          full_name: validated.fullName,
          company_name: validated.companyName || null,
          role: validated.role,
          user_id: null,
        });

      if (error) {
        if (error.message.includes("duplicate") || error.code === "23505") {
          toast({
            title: "Already on the waitlist",
            description: "This email is already registered. We'll notify you soon!",
            variant: "destructive",
          });
        } else {
          // Log actual error for debugging without exposing to user
          console.error('Waitlist insertion error:', error);
          
          toast({
            title: "Unable to join waitlist",
            description: "Something went wrong. Please try again later or contact support if the problem persists.",
            variant: "destructive",
          });
        }
        return;
      }

      setSuccess(true);
      toast({
        title: "Welcome to Inhumans! 🎉",
        description: "You've been added to the waitlist. We'll be in touch soon!",
      });

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "An unexpected error occurred",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <Card className="relative w-full max-w-md text-center">
          <CardContent className="pt-12 pb-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-success" />
            </div>
            <h2 className="text-2xl font-bold mb-3">You're on the list!</h2>
            <p className="text-muted-foreground mb-6">
              We'll send you an email when we're ready to launch. Get ready to transform your business with AI!
            </p>
            <Button onClick={() => navigate("/")} variant="outline">
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative w-full max-w-md">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-2xl font-bold">
            <Puzzle className="w-8 h-8" />
            Inhumans
          </div>
          <p className="text-muted-foreground mt-2">
            Join the waitlist to get early access
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Join the Waitlist</CardTitle>
            <CardDescription>
              Be the first to know when we launch
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                  required
                  maxLength={100}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  maxLength={255}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">I am a *</Label>
                <Select name="role" required>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="business">Business (SMB)</SelectItem>
                    <SelectItem value="freelancer">Freelancer</SelectItem>
                    <SelectItem value="msme">MSME</SelectItem>
                    <SelectItem value="hoster">AI Agent Hoster</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name (Optional)</Label>
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  placeholder="Your company"
                  maxLength={100}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                className="w-full cta-primary"
                disabled={isLoading}
              >
                {isLoading ? "Joining..." : "Join Waitlist"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Waitlist;
