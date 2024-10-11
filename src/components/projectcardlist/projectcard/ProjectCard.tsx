import { github, image } from '../../../assets/assets';
import useProjectCardStore from '../../../stores/useProjectCardStore';
import A from '../../common/a/A';
import {
  ProjectCardContainer,
  ProjectCardInfoContainer,
  ProjectCardPersonnel,
  ProjectCardSubTitle,
  ProjectCardTitle,
  ProjectCardLink,
  ProjectCardLibraryContainer,
  ProjectCardLibrary,
  ProjectCardOtherContainer,
  ProjectCardOther,
} from './projectcard.css';

type ProjectCardProps = {
  keyProp: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ keyProp }) => {
  const { projects, setPopUpActive } = useProjectCardStore();

  const renderCard = () => {
    if (projects[keyProp].title === undefined) {
      return <></>;
    } else {
      return (
        <div className={ProjectCardContainer}>
          {projects[keyProp].title && <h4 className={ProjectCardTitle}>{projects[keyProp].title}</h4>}
          {projects[keyProp].personnel && (
            <p className={ProjectCardPersonnel}>{projects[keyProp].personnel}인 프로젝트</p>
          )}
          {projects[keyProp].subtitle && <h5 className={ProjectCardSubTitle}>{projects[keyProp].subtitle}</h5>}
          {projects[keyProp].info && (
            <ul className={ProjectCardInfoContainer}>
              {projects[keyProp].info.map(info => {
                return <li key={info}>{info}</li>;
              })}
            </ul>
          )}
          {projects[keyProp].link && (
            <A className={ProjectCardLink} href={projects[keyProp].link}>
              {projects[keyProp].link}
            </A>
          )}
          {projects[keyProp].library && (
            <div className={ProjectCardLibraryContainer}>
              {projects[keyProp].library.map(library => {
                return (
                  <div key={library} className={ProjectCardLibrary}>
                    {library}
                  </div>
                );
              })}
            </div>
          )}
          <div className={ProjectCardOtherContainer}>
            {projects[keyProp].gitHubLink && (
              <A className={ProjectCardOther} href={projects[keyProp].gitHubLink}>
                <img src={github} alt="github" />
                {projects[keyProp].gitHubLink}
              </A>
            )}
            {projects[keyProp].imageLink && (
              <button
                className={ProjectCardOther}
                onClick={() => setPopUpActive(true, projects[keyProp].imageLink!)}
                type="button"
              >
                <img src={image} alt="image" />
                이미지
              </button>
            )}
          </div>
        </div>
      );
    }
  };

  return <>{renderCard()}</>;
};
export default ProjectCard;
