import { useEffect } from 'react';
import {
  ImagePopUpBackGround,
  ImagePopUpBox,
  ImagePopUpCloseBox,
  ImagePopUpContent,
  ImagePopUpContentContainer,
} from './imagepopup.css';
import useProjectCardStore from '../../../../stores/useProjectCardStore';
import { close } from '../../../../assets/assets';

const ImagePopUp = () => {
  const { imageLink, setPopUpActive } = useProjectCardStore();

  const handleClickBackGround = () => {
    setPopUpActive(false, '');
  };

  const handleClickBox = (event: React.MouseEvent<HTMLDivElement>) => {
    // 클릭 이벤트 전파 방지
    event.stopPropagation();
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={ImagePopUpBackGround} onClick={handleClickBackGround}>
      <div className={ImagePopUpBox} onClick={handleClickBox}>
        <div className={ImagePopUpCloseBox}>
          <img src={close} alt="close" onClick={handleClickBackGround} />
        </div>
        <div className={ImagePopUpContentContainer}>
          <img className={ImagePopUpContent} src={imageLink} alt={imageLink} />
        </div>
      </div>
    </div>
  );
};
export default ImagePopUp;
