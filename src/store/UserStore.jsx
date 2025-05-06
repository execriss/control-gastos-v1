import { create } from "zustand";
import { showUsers } from "../index";

export const useUserStore = create((set, get) => ({
  // initial state
  dataUsers: [],

  getUsers: async () => {
    const response = (await showUsers()) || [];
    set({ dataUsers: response });
    if (response) {
      return response;
    } else {
      return [];
    }
  },
}));
