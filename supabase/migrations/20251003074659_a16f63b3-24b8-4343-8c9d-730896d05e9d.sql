-- Create waitlist table
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  company_name TEXT,
  role TEXT CHECK (role IN ('business', 'freelancer', 'msme', 'hoster')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id)
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own waitlist entry"
ON public.waitlist
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own waitlist entry"
ON public.waitlist
FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own waitlist entry"
ON public.waitlist
FOR UPDATE
USING (auth.uid() = user_id);

-- Create index for faster lookups
CREATE INDEX idx_waitlist_user_id ON public.waitlist(user_id);
CREATE INDEX idx_waitlist_created_at ON public.waitlist(created_at DESC);