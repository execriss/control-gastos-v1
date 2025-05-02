import { supabase, GetIdAuthSupabase } from "../index";

export const InsertUsers = async (p) => {
  try {
    const { data } = await supabase.from("usuarios").insert(p).select();

    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const showUsers = async () => {
  try {
    const idAuthSupabase = await GetIdAuthSupabase();

    const { data, error } = await supabase
      .from("usuarios")
      .select()
      .eq("idauth_supabase", idAuthSupabase);

    if (error) {
      alert("Error al mostrar usuarios: ", error.message);
    }

    return data[0];
  } catch (error) {
    alert(
      "Error al mostrar usuarios: " + error.error_description || error.message
    );
  }
};
