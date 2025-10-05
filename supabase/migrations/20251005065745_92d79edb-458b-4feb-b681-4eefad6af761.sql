-- Remove duplicate emails, keeping only the earliest entry
DELETE FROM public.waitlist a
USING public.waitlist b
WHERE a.id > b.id 
  AND a.email = b.email;

-- Fix public data exposure: restrict SELECT to service_role only
DROP POLICY IF EXISTS "Service role can view all waitlist entries" ON public.waitlist;

CREATE POLICY "Service role can view all waitlist entries"
ON public.waitlist
FOR SELECT
TO service_role
USING (true);

-- Add unique constraint on email to prevent duplicates
ALTER TABLE public.waitlist 
ADD CONSTRAINT waitlist_email_unique UNIQUE (email);