import A from '../common/a/A';
import {
  AboutMeContainer,
  AboutMeElement,
  AboutMeElements,
  AboutMeElementText,
  AboutMeInfo,
  AboutMeInfoButton,
  AboutMeInfoOutLineBack,
  AboutMeInfoButtons,
  AboutMeInfoContainer,
  AboutMeInfoOutLine,
  AboutMeWraper,
  AboutMeImage,
  Text,
} from './aboutme.css';

const AboutMe = () => {
  const infoElement: { [key: string]: string }[] = [
    { 이름: '조범준' },
    { 연락처: '010 - 4067 - 1637' },
    { 생년월일: '1998 - 12 - 15' },
    { 위치: '서울특별시 성북구' },
    { 이메일: 'oreasv3@gmail.com' },
    { 학력: '한림대학교(빅데이터과)' },
  ];

  const elementRender = () => {
    return (
      <div className={AboutMeElement}>
        {infoElement.map((item, index) =>
          Object.entries(item).map(([key, value]) => (
            <div key={`${key}-${index}`}>
              <div className={Text}>{key}</div>
              <div className={AboutMeElementText}>{value}</div>
            </div>
          ))
        )}
      </div>
    );
  };

  return (
    <div className={AboutMeWraper}>
      <div className={AboutMeContainer}>
        <div className={AboutMeInfoContainer}>
          <div className={AboutMeImage}></div>
          <div className={AboutMeInfo}>
            <div className={AboutMeInfoOutLine}></div>
            <div className={AboutMeInfoOutLineBack}></div>
            <div className={AboutMeElements}>
              {elementRender()}
              <div className={AboutMeInfoButtons}>
                <A className={AboutMeInfoButton} href="">
                  GITHUB
                </A>
                <A className={AboutMeInfoButton} href="">
                  BLOG
                </A>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default AboutMe;
