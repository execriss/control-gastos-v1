import { create } from "zustand";
import { EditThemeAndMoneyUser, showUsers } from "../index";

export const useUserStore = create((set, get) => ({
  // initial state
  dataUsers: [],

  getUsers: async () => {
    const response = (await showUsers()) || [];
    set({ dataUsers: response });
    return response;
  },

  editTheme: async (params) => {
    await EditThemeAndMoneyUser(params);
  },
}));
