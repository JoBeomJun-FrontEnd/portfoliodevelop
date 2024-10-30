import { github, image } from '../../../assets/assets';
import useProjectCardStore from '../../../stores/useProjectCardStore';
import A from '../../common/a/A';
import {
  ProjectCardContainer,
  ProjectCardInfoContainer,
  ProjectCardPersonnel,
  ProjectCardTitle,
  ProjectCardLink,
  ProjectCardLibraryContainer,
  ProjectCardLibrary,
  ProjectCardOtherContainer,
  ProjectCardOther,
  ProjectCardSubTitle,
  ProjectCardInfo,
  ProjectCardVisible,
} from './projectcard.css';
import isBelowHook from '../../../hooks/isBelowHook';

type ProjectCardProps = {
  keyProp: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ keyProp }) => {
  const { projects, setPopUpActive } = useProjectCardStore();
  const { isVisible, elementRef } = isBelowHook(200);

  const { title, personnel, subtitle, info, link, gitHubLink, imageLink, library } = projects[keyProp];

  return (
    <>
      {title !== undefined && (
        <div
          data-key={title}
          ref={elementRef}
          className={`${ProjectCardContainer} ${isVisible ? ProjectCardVisible.visible : ProjectCardVisible.hidden}`}
        >
          {title && <h4 className={ProjectCardTitle}>{title}</h4>}
          {personnel && <p className={ProjectCardPersonnel}>{personnel}인 프로젝트</p>}
          {subtitle && <h5 className={ProjectCardSubTitle}>{subtitle}</h5>}
          {info && (
            <ul className={ProjectCardInfoContainer}>
              {info.map(info => {
                return (
                  <li className={ProjectCardInfo} key={info}>
                    {info}
                  </li>
                );
              })}
            </ul>
          )}
          {link && (
            <A className={ProjectCardLink} href={link}>
              사이트 링크
            </A>
          )}
          {library && (
            <div className={ProjectCardLibraryContainer}>
              {library.map(library => {
                return (
                  <div key={library} className={ProjectCardLibrary}>
                    {library}
                  </div>
                );
              })}
            </div>
          )}
          <div className={ProjectCardOtherContainer}>
            {gitHubLink && (
              <A className={ProjectCardOther} href={gitHubLink}>
                <img src={github} alt="github" />
                깃허브 링크
              </A>
            )}
            {imageLink && (
              <button className={ProjectCardOther} onClick={() => setPopUpActive(true, imageLink!)} type="button">
                <img src={image} alt="image" />
                이미지
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default ProjectCard;
