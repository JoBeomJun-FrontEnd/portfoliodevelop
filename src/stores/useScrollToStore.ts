import { create } from 'zustand';

type ScrollToStore = {
  positions: { [key: string]: number };
  setPositions: (key: string, top: number) => void;
  isBelow: boolean;
  setIsBelow: (isBelow: boolean) => void;
};

const useScrollToStore = create<ScrollToStore>(set => ({
  positions: {},
  setPositions: (key, top) =>
    set(state => ({
      positions: { ...state.positions, [key]: top },
    })),
  isBelow: false,
  setIsBelow: isBelow => set({ isBelow }),
}));

export default useScrollToStore;
