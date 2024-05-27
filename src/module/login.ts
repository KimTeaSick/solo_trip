import { create } from "zustand";

type LoginPageStatusState = {
  pageStatus: 0 | 1 | 2;
  modalStatus: boolean,
  setPageStatus: (val: 0 | 1 | 2) => void;
  setModalStatus: (val: boolean) => void;
}

export const useLoginPageStatus = create<LoginPageStatusState>((set) => ({
  pageStatus: 0,
  modalStatus: false,
  setPageStatus: (val: 0 | 1 | 2) => set((state) => ({ ...state, pageStatus: val })),
  setModalStatus: (val: boolean) => set((state) => ({ ...state, modalStatus: val }))
}))