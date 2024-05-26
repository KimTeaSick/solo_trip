import { create } from "zustand";

type LoginPageStatusState = {
  status: 0 | 1 | 2;
  setStatus: (val: 0 | 1 | 2) => void;
}

export const useLoginPageStatus = create<LoginPageStatusState>((set) => ({
  status: 0,
  setStatus: (val: 0 | 1 | 2) => set((state) => ({ ...state, status: val }))
}))