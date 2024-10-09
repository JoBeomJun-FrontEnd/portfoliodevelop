import { create } from 'zustand';

type ScrollToStore = {
  positions: { [key: string]: number };
  setPositions: (key: string, top: number) => void;
};

const useScrollToStore = create<ScrollToStore>(set => ({
  positions: {},
  setPositions: (key, top) =>
    set(state => ({
      positions: { ...state.positions, [key]: top },
    })),
}));

export default useScrollToStore;
