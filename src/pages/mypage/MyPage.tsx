import ImagePopUp from '../../components/projectcardlist/projectcard/imagepopup/ImagePopUp';
import ProjectCardList from '../../components/projectcardlist/ProjectCardList';
import Section from '../../components/section/Section';
import useProjectCardStore from '../../stores/useProjectCardStore';

export const MyPage = () => {
  const { popUpActive } = useProjectCardStore();

  return (
    <>
      {popUpActive && <ImagePopUp />}
      <Section sectionName="Home">
        <div>MyPage</div>
      </Section>
      <Section sectionName="About Me">
        <div>MyPage</div>
      </Section>
      <Section sectionName="Skills">
        <div>MyPage</div>
      </Section>
      <Section sectionName="Projects">
        <ProjectCardList />
      </Section>
      <Section sectionName="Contact">
        <div>MyPage</div>
      </Section>
    </>
  );
};
