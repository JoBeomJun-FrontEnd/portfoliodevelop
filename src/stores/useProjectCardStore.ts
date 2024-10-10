import { create } from 'zustand';
import { ProjectInfo } from '../types/projectinfo';

type ProjectCardStore = {
  projects: { [key: string]: ProjectInfo };
  setProjects: (key: string, link: string, svgLink: string) => void;
  popUpActive: boolean;
  imageLink: string;
  setPopUpActive: (popUpActive: boolean, imageLink: string) => void;
};

const useProjectCardStore = create<ProjectCardStore>(set => ({
  projects: {
    sd1: {
      title: '제목',
      personnel: 1,
      subtitle: '부제목',
      info: ['인포1', '인포2', '인포3'],
      link: '링크',
      library: ['라이브러리1', '라이브러리2', '라이브러리3'],
      gitHubLink: '깃허브링크',
      svgLink: 'svg링크',
    },
    sd2: { link: '링크', svgLink: 'svg링크' },
    sd3: { link: '링크', svgLink: 'svg링크' },
    sd4: { link: '링크', svgLink: 'svg링크' },
    sd5: { link: '링크', svgLink: 'svg링크' },
    sd6: { link: '링크', svgLink: 'svg링크' },
    sd7: { link: '링크', svgLink: 'svg링크' },
    sd8: { link: '링크', svgLink: 'svg링크' },
    sd9: { link: '링크', svgLink: 'svg링크' },
    sd10: { link: '링크', svgLink: 'svg링크' },
    sd11: { link: '링크', svgLink: 'svg링크' },
    sd12: { link: '링크', svgLink: 'svg링크' },
    sd13: { link: '링크', svgLink: 'svg링크' },
    sd14: { link: '링크', svgLink: 'svg링크' },
    sd15: { link: '링크', svgLink: 'svg링크' },
  },
  setProjects: (key, link, svgLink) =>
    set(state => ({
      projects: { ...state.projects, [key]: { link, svgLink } },
    })),
  popUpActive: false,
  imageLink: '',
  setPopUpActive: (popUpActive, imageLink) => {
    set({ popUpActive, imageLink });
  },
}));

export default useProjectCardStore;
