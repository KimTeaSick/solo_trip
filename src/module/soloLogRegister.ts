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

interface SearchType {
  searchKeyword: string
  modalStatus: boolean,
  status: boolean,
  setSearchKeyword: (value: string) => void
  setStatus: (value: boolean) => void
  setModalStatus: (value: boolean) => void
}

export const useSearch = create<SearchType>((set) => ({
  searchKeyword: '',
  status: false,
  modalStatus: false,
  setSearchKeyword: (value: string) => set((state) => ({
    ...state, searchKeyword: value
  })),
  setStatus: (value) => set((state) => ({ ...state, status: value })),
  setModalStatus: (value) => set((state) => ({ ...state, modalStatus: value }))
}))