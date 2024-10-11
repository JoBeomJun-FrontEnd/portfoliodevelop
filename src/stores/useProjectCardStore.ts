import { create } from 'zustand';
import { ProjectInfo } from '../types/projectinfo';

type ProjectCardStore = {
  projects: { [title: string]: ProjectInfo };
  setProject: (key: string, project: ProjectInfo) => void;
  popUpActive: boolean;
  imageLink: string;
  setPopUpActive: (popUpActive: boolean, imageLink: string) => void;
};

const useProjectCardStore = create<ProjectCardStore>(set => ({
  projects: {},
  setProject: (title, project) =>
    set(state => ({
      projects: { ...state.projects, [title]: project },
    })),
  popUpActive: false,
  imageLink: '',
  setPopUpActive: (popUpActive, imageLink) => {
    set({ popUpActive, imageLink });
  },
}));

export default useProjectCardStore;
