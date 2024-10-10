import { ReactNode, useEffect, useRef } from 'react';
import { SectionBackGround, SectionBackGroundColor, SectionContainer, SectionTitle } from './section.css';
import useScrollToStore from '../../stores/useScrollToStore';

const Section = ({ sectionName, children }: { sectionName: string; children: ReactNode }) => {
  const sectionRef = useRef<HTMLHeadingElement>(null);
  const { setPositions } = useScrollToStore();

  useEffect(() => {
    const { top } = sectionRef.current?.getBoundingClientRect() || { top: 0 };
    setPositions(sectionName, top - 50 + window.scrollY);
  }, []);

  const backgroundClass = () => {
    switch (sectionName) {
      case 'Home':
        return SectionBackGroundColor.home;
      case 'About Me':
        return SectionBackGroundColor.about;
      case 'Skills':
        return SectionBackGroundColor.skills;
      case 'Projects':
        return SectionBackGroundColor.projects;
      case 'Contact':
        return SectionBackGroundColor.contact;
    }
  };

  return (
    <div className={`${SectionBackGround} ${backgroundClass()}`}>
      <section ref={sectionRef} className={SectionContainer}>
        <h1 className={SectionTitle}>{sectionName}</h1>
        {children}
      </section>
    </div>
  );
};
export default Section;
