import { supabase } from "./supabase.config";

export const InsertUsers = async (p) => {
  try {
    const { data } = await supabase.from("users").insert(p).select();

    return data;
  } catch (error) {}
};
