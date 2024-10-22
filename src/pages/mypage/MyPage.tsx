import AboutMe from '../../components/aboutme/AboutMe';
import Home from '../../components/home_/Home';
import ImagePopUp from '../../components/projectcardlist/projectcard/imagepopup/ImagePopUp';
import ProjectCardList from '../../components/projectcardlist/ProjectCardList';
import Section from '../../components/section/Section';
import Skills from '../../components/skills/Skills';
import useProjectCardStore from '../../stores/useProjectCardStore';

export const MyPage = () => {
  const { popUpActive } = useProjectCardStore();

  return (
    <>
      {popUpActive && <ImagePopUp />}
      <Section>
        <Home />
      </Section>
      <Section sectionName="About Me">
        <AboutMe />
      </Section>
      <Section sectionName="Skills">
        <Skills />
      </Section>
      <Section sectionName="Projects">
        <ProjectCardList />
      </Section>
    </>
  );
};
