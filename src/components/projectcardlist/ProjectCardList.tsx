import useProjectCardStore from '../../stores/useProjectCardStore';
import ProjectCard from './projectcard/ProjectCard';
import { ProjectCardListContainer } from './projectcardlist.css';

const ProjectCardList = () => {
  const { projects } = useProjectCardStore();

  return (
    <div className={ProjectCardListContainer}>
      {Object.keys(projects).map(key => {
        return <ProjectCard key={key} keyProp={key} />;
      })}
    </div>
  );
};
export default ProjectCardList;
