import { useEffect } from 'react';
import { DownloadProjects } from '../../firebase/DownloadProjects';
import useProjectCardStore from '../../stores/useProjectCardStore';
import ProjectCard from './projectcard/ProjectCard';
import { ProjectCardListContainer } from './projectcardlist.css';
import SkeletonCard from './skeletoncard/SkeletonCard';

const ProjectCardList = () => {
  const { projects } = useProjectCardStore();
  const { loading, downloadProjects } = DownloadProjects();

  useEffect(() => {
    downloadProjects();
  }, []);

  const renderCardList = () => {
    if (loading) {
      return <SkeletonCard />;
    } else {
      return Object.keys(projects).map(title => {
        return <ProjectCard key={title} keyProp={title} />;
      });
    }
  };

  return <div className={ProjectCardListContainer}>{renderCardList()}</div>;
};
export default ProjectCardList;
