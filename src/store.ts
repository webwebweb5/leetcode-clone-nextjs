import { create } from "zustand";

type AuthModalState = {
  isOpen: boolean;
  type: "login" | "register" | "resetPassword";
  setIsOpen: (isOpen: boolean) => void;
  setType: (type: "login" | "register" | "resetPassword") => void;
};

const useAuthModalStore = create<AuthModalState>((set) => ({
  isOpen: false,
  type: "login",
  setIsOpen: (isOpen) => set({ isOpen }),
  setType: (type) => set({ type }),
}));

export default useAuthModalStore;
