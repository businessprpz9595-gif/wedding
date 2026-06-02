import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Export actual client if variables are present, otherwise return null
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

export interface RSVPResponse {
  id?: string;
  guest_name: string;
  attending: boolean;
  attendees_count: number;
  wishes: string;
  created_at?: string;
}

// Helper to save RSVP
export const submitRSVP = async (data: RSVPResponse): Promise<{ success: boolean; error?: string }> => {
  if (supabase) {
    try {
      const { error } = await supabase
        .from("rsvps")
        .insert([
          {
            guest_name: data.guest_name,
            attending: data.attending,
            attendees_count: data.attendees_count,
            wishes: data.wishes,
          }
        ]);
      if (error) throw error;
      return { success: true };
    } catch (err: any) {
      console.error("Supabase RSVP submit failed, falling back to local storage:", err);
      saveToLocalStorage(data);
      return { success: true, error: err.message };
    }
  } else {
    // If Supabase is not configured, fall back to local storage
    saveToLocalStorage(data);
    return { success: true };
  }
};

const saveToLocalStorage = (data: RSVPResponse) => {
  try {
    const existing = localStorage.getItem("wedding_rsvps");
    const list = existing ? JSON.parse(existing) : [];
    list.push({
      ...data,
      id: Math.random().toString(36).substring(2, 9),
      created_at: new Date().toISOString()
    });
    localStorage.setItem("wedding_rsvps", JSON.stringify(list));
  } catch (e) {
    console.error("Local storage save failed:", e);
  }
};
