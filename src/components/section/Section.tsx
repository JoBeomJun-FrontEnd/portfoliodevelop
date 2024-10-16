import { ReactNode, useEffect, useRef } from 'react';
import { SectionBackGround, SectionContainer, SectionTitle } from './section.css';
import useScrollToStore from '../../stores/useScrollToStore';

const Section = ({ sectionName, children }: { sectionName: string; children?: ReactNode }) => {
  const sectionRef = useRef<HTMLHeadingElement>(null);
  const { setPositions } = useScrollToStore();

  useEffect(() => {
    const { top } = sectionRef.current?.getBoundingClientRect() || { top: 0 };
    setPositions(sectionName, top - 50 + window.scrollY);
  }, []);

  return (
    <div className={SectionBackGround}>
      <section ref={sectionRef} className={SectionContainer}>
        <h1 className={SectionTitle}>{sectionName}</h1>
        {children && children}
      </section>
    </div>
  );
};

export default Section;
