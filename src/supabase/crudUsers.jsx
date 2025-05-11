import Swal from "sweetalert2";
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
      console.error("Error al mostrar usuarios (SUP): ", error);
    }
    if (data) {
      return data[0];
    }
  } catch (error) {
    console.error("Error al mostrar usuarios (INTERFACE): ", error);
  }
};

export async function EditThemeAndMoneyUser(params) {
  try {
    const { error } = await supabase
      .from("usuarios")
      .update(params)
      .eq("id", params.id);

    if (error) {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Error al editar los datos del usuario",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Datos modificados exitosamente",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    alert("Error al editar datos del usuario catch");
    console.log(error.error_description || error.message);
  }
}
