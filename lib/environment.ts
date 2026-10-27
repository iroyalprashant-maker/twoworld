export const isDemoMode = !process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const demoModeMessage = 'Demo mode is active. Add Supabase credentials to enable accounts, sharing, and durable cloud data.';
