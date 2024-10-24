import { create } from "zustand";

interface PlayerState {
  PlayingCardIndex: number | null;
  setPlayingCardIndex: (index: number | null) => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
  PlayingCardIndex: null,
  setPlayingCardIndex: (index) => set({ PlayingCardIndex: index }),
}));
