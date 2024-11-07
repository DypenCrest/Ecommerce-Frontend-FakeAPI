import { create } from "zustand";

export const useCategoryStore = create((set) => ({
  category: "",
  setCategory: (newCategory) => {
    set({ category: newCategory });
  },
}));
