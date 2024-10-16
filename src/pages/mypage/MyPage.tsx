import AboutMe from '../../components/aboutme/AboutMe';
import ImagePopUp from '../../components/projectcardlist/projectcard/imagepopup/ImagePopUp';
import ProjectCardList from '../../components/projectcardlist/ProjectCardList';
import Section from '../../components/section/Section';
import useProjectCardStore from '../../stores/useProjectCardStore';

export const MyPage = () => {
  const { popUpActive } = useProjectCardStore();

  return (
    <>
      {popUpActive && <ImagePopUp />}
      <Section sectionName="Home"></Section>
      <Section sectionName="About Me">
        <AboutMe />
      </Section>
      <Section sectionName="Skills"></Section>
      <Section sectionName="Projects">
        <ProjectCardList />
      </Section>
      <Section sectionName="Contact"></Section>
    </>
  );
};
