import { useEffect, useRef, useState } from 'react';
import {
  LearnContainer,
  LearnContainerVisible,
  LearnDetail,
  LearnPeriod,
  LearnTitle,
  LearnTitleSection,
  LearnWraper,
} from './learn.css';
import useScrollToHook from '../../hooks/useScrollToHook';

type LearnCategory = {
  [category: string]: string[];
};

const Learn = () => {
  const { learnRef } = useScrollToHook();

  const learnElement: LearnCategory = {
    유튜브: ['HTML & CSS 강의 (2024.05)', '짐코딩에서 제공하는 HTML & CSS 유튜브 강의'],
    인프런: ['웹 개발 입문 활용편 (2024.06)', '짐코딩에서 제공하는 JavaScript 온라인 강의'],
    '드림코딩 아카데미': ['리액트 개념정리 (2024.07)', '드림코딩 아카데미에서 제공하는 React 온라인 강의'],
    '[유데미x스나이퍼팩토리] 프로젝트 캠프': [
      'React 2기 (2024.08 ~ 2024.09)',
      '유데미 x 웅진씽크빅 x 스나이퍼팩토리에서 주최한 React & TypeScript 교육 프로그램',
    ],
  };

  const [categoryVisibility, setCategoryVisibility] = useState<{ [key: string]: boolean }>({
    유튜브: false,
    인프런: false,
    '드림코딩 아카데미': false,
    '[유데미x스나이퍼팩토리] 프로젝트 캠프': false,
  });

  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const { boundingClientRect, isIntersecting, intersectionRatio } = entry;
          const categoryName = (entry.target as HTMLElement).querySelector('h2')?.textContent?.trim();
          if (categoryName) {
            setCategoryVisibility(prev => ({
              ...prev,
              [categoryName]: (isIntersecting && intersectionRatio >= 0) || boundingClientRect.bottom < 0,
            }));
          }
        });
      },
      {
        threshold: [0, 1],
      }
    );

    refs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      refs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className={LearnWraper} ref={learnRef}>
      {Object.entries(learnElement).map(([category, details], index) => (
        <div
          key={category}
          ref={el => (refs.current[index] = el)}
          className={`${LearnContainer} ${
            categoryVisibility[category] ? LearnContainerVisible.visible : LearnContainerVisible.hidden
          }`}
        >
          <div className={LearnTitleSection}>
            <h2 className={LearnTitle}>{category}</h2>
            <p className={LearnPeriod}>{details[0]}</p>
          </div>
          <p className={LearnDetail}>{details[1]}</p>
        </div>
      ))}
    </div>
  );
};
export default Learn;
