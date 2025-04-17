import { create } from "zustand";
import { supabase } from "../index";

export const useAuthStore = create((set, get) => ({
  isAuth: false,
  signInWithGoogle: async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });

      if (error) throw new Error("Error signing in with Google");

      set({ isAuth: true });

      return data;
    } catch (error) {
      console.error("Error signing in with Google: ", error);

      return null;
    }
  },

  signOut: async () => {
    const { error } = await supabase.auth.signOut();

    if (error) throw new Error("Error signing out");

    set({ isAuth: false });
  },
}));
