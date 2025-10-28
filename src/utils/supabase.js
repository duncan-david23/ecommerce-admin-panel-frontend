import { createClient } from '@supabase/supabase-js'



const SUPABASE_URL = "https://bjwkztbdlukmqlcaeinb.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqd2t6dGJkbHVrbXFsY2FlaW5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1NTc0ODYsImV4cCI6MjA3NzEzMzQ4Nn0.GSjf9sxYcp425RcDjcAImvK7-Qj64ybJxCUI8FSJic4"



export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)