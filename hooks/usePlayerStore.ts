import { create } from "zustand";

interface PlayerState {
  playingCardIndex: number | null;
  setPlayingCardIndex: (index: number | null) => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
  playingCardIndex: null,
  setPlayingCardIndex: (index) => set({ playingCardIndex: index }),
}));
