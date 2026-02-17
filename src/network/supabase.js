import { createClient } from '@supabase/supabase-js';

// These would be environment variables in a production environment
const SUPABASE_URL = 'https://your-project-id.supabase.co';
const SUPABASE_KEY = 'your-anon-key';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function saveGameResult(address, score, verified = false) {
    try {
        console.log(`💾 Saving result for ${address}: $${score}`);
        // In a real hackathon, we'd actually call supabase here
        // For the current dev stage, we log it
        /*
        const { data, error } = await supabase
            .from('leaderboard')
            .insert([{ player_address: address, score, verified, created_at: new Date() }]);
        */
        return { success: true };
    } catch (e) {
        console.error("Supabase Save Error:", e);
        return { success: false, error: e.message };
    }
}

export async function fetchLeaderboard() {
    try {
        // Mocking the fetch for now to keep the UI running
        return [
            { name: 'Don Kron', cash: 15000, verified: true },
            { name: 'Slice Consigliere', cash: 12000, verified: true },
            { name: 'Wheezy', cash: 4200, verified: false }
        ];
    } catch (e) {
        return [];
    }
}
