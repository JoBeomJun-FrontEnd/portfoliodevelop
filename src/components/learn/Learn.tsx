import { LearnWraper } from './learn.css';
import Category from './category/Category';
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

  return (
    <>
      <div className={LearnWraper} ref={learnRef}>
        {Object.entries(learnElement).map(([category, details], index) => (
          <Category key={index} category={category} details={details} />
        ))}
      </div>
    </>
  );
};
export default Learn;
