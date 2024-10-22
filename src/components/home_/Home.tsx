import { HomeContiner, HomeText, HomeTitle } from './home.css';

const Home = () => {
  return (
    <div className={HomeContiner}>
      <h1 className={HomeTitle}>
        - 조범준 -<br />
        주니어 프론트 엔드 개발자
      </h1>
      <hr style={{ width: '100px' }} />
      <h3 className={HomeText}>새로운 시도를 두려워하지 않는 프론트엔드 개발자가 되겠습니다.</h3>
      <h3 className={HomeText}>
        배움에는 여러 가지 방법이 있지만 흐르는 물처럼 깊고 잔잔하게 꾸준히 공부하며 나아갈 것입니다.
        <br />
        성실하게 쌓은 지식을 바탕으로, 회사의 가치에 플러스 요소가 될 수 있는 프론트엔드 개발자로 일하고 싶습니다.
      </h3>
    </div>
  );
};
export default Home;
