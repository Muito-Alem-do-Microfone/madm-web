import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://izuyvaxwnhtbebfehndh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6dXl2YXh3bmh0YmViZmVobmRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIwNTA0MjgsImV4cCI6MjAwNzYyNjQyOH0.wr5b-cG0qZE7u-am-xgDZLg1-mh8gRRN9g0KNZZPG7U')

export default supabase;
