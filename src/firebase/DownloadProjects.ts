import { getDocs } from 'firebase/firestore';
import { PROJECTS_COLLECTION } from './firebase';
import { ProjectInfo } from '../types/projectinfo';
import useProjectCardStore from '../stores/useProjectCardStore';
import { useState } from 'react';

export const DownloadProjects = () => {
  const { setProject } = useProjectCardStore();
  const [loading, setLoading] = useState(false);

  const downloadProjects = async () => {
    try {
      setLoading(true);

      const projectsSnapshot = await getDocs(PROJECTS_COLLECTION);

      projectsSnapshot.docs.forEach(doc => {
        if (doc.exists() && doc.data().title !== undefined && doc.data().title.trim() !== '') {
          const projectData: ProjectInfo = doc.data();
          if (projectData.title !== undefined && projectData.title.trim() !== '') {
            setProject(projectData.title, projectData);
          }
        }
      });
    } catch (error) {
      console.log('프로젝트 정보를 가져오는 중 오류 발생');
    } finally {
      setLoading(false);
    }
  };

  return { loading, downloadProjects };
};
