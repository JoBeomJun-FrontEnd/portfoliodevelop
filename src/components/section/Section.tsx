import { ReactNode, useEffect, useRef } from 'react';
import { SectionBackGround, SectionContainer, SectionTitle, SectionTitleColor } from './section.css';
import useScrollToStore from '../../stores/useScrollToStore';

const Section = ({ sectionName, children }: { sectionName?: string; children?: ReactNode }) => {
  const sectionRef = useRef<HTMLHeadingElement>(null);
  const { isBelow, setPositions } = useScrollToStore();

  useEffect(() => {
    const { top } = sectionRef.current?.getBoundingClientRect() || { top: 0 };
    setPositions(sectionName ? sectionName : 'Home', top - 70 + window.scrollY);
  }, []);

  return (
    <div className={SectionBackGround}>
      <section ref={sectionRef} className={SectionContainer}>
        {sectionName && (
          <h1 className={`${SectionTitle} ${isBelow ? SectionTitleColor.true : SectionTitleColor.false}`}>
            {sectionName}
          </h1>
        )}
        {children && children}
      </section>
    </div>
  );
};

export default Section;
