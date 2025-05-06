import { supabase } from "./supabase.config";

export const GetIdAuthSupabase = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session !== null) {
    const { user } = session;
    const idAuthSupabase = user.id;
    return idAuthSupabase;
  }
};
