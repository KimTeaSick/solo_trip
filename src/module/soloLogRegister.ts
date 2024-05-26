import { create } from "zustand";

interface SolPhoto {
  photoList: string[]
  photoCount: number,
  photoAdd: (info: any) => void
}

export const useSolPhoto = create<SolPhoto>((set) => ({
  photoList: [],
  photoCount: 0,
  photoAdd: (info) => set((state) => ({
    photoList: [
      ...state.photoList,
      info
    ]
  })),
  photoDelete: (info: string) => set((state) => ({ photoList: state.photoList.filter((photo) => info !== photo) }))
}))