-- Make waitlist table work without authentication
ALTER TABLE public.waitlist ALTER COLUMN user_id DROP NOT NULL;

-- Drop existing RLS policies
DROP POLICY IF EXISTS "Users can insert their own waitlist entry" ON public.waitlist;
DROP POLICY IF EXISTS "Users can update their own waitlist entry" ON public.waitlist;
DROP POLICY IF EXISTS "Users can view their own waitlist entry" ON public.waitlist;

-- Create new RLS policies that allow anyone to join waitlist
CREATE POLICY "Anyone can join waitlist"
ON public.waitlist
FOR INSERT
TO public
WITH CHECK (true);

-- Admin can view all waitlist entries (for future use)
CREATE POLICY "Service role can view all waitlist entries"
ON public.waitlist
FOR SELECT
TO service_role
USING (true);