import { FlexColumnCenter } from '../../styles/app.css';
import A from '../common/a/A';
import Frame from '../common/frame/Frame';
import {
  AboutMe_Element,
  AboutMe_Elements,
  AboutMe_ElementText,
  AboutMe_InfoButton,
  AboutMe_InfoOutLineBack,
  AboutMe_InfoButtons,
  AboutMe_InfoOutLine,
  AboutMe_Text,
} from './aboutme.css';

const AboutMe_ = () => {
  const infoElement: { [key: string]: string }[] = [
    { 이름: '조범준' },
    { 연락처: '010 - 4067 - 1637' },
    { 생년월일: '1998 - 12 - 15' },
    { 학력: '한림대학교(빅데이터과)' },
    { 이메일: 'oreasv3@gmail.com' },
    { 위치: '서울특별시 성북구' },
  ];

  const elementRender = () => {
    return (
      <div className={AboutMe_Element}>
        {infoElement.map((item, index) =>
          Object.entries(item).map(([key, value]) => (
            <div key={`${key}-${index}`} className={FlexColumnCenter}>
              <div className={AboutMe_Text}>{key}</div>
              <div className={AboutMe_ElementText}>{value}</div>
            </div>
          ))
        )}
      </div>
    );
  };

  return (
    <Frame>
      <div className={AboutMe_Elements}>
        {elementRender()}
        <div className={AboutMe_InfoButtons}>
          <A className={AboutMe_InfoButton} href="https://github.com/JoBeomJun-FrontEnd">
            GITHUB
          </A>
          <A className={AboutMe_InfoButton} href="https://velog.io/@oreasvv/posts">
            BLOG
          </A>
        </div>
      </div>
      <div className={AboutMe_InfoOutLine}></div>
      <div className={AboutMe_InfoOutLineBack}></div>
    </Frame>
  );
};
export default AboutMe_;
