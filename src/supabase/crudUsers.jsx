import { supabase } from "./supabase.config";

export const InsertUsers = async (p) => {
  try {
    const { data } = await supabase.from("usuarios").insert(p).select();

    return data;
  } catch (error) {
    console.error(error.message);
  }
};
