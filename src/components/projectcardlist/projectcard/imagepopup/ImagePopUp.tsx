import { useEffect } from 'react';
import {
  ImagePopUpBackGround,
  ImagePopUpBox,
  ImagePopUpCloseBox,
  ImagePopUpCloseImage,
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
          <img src={close} className={ImagePopUpCloseImage} alt="close" onClick={handleClickBackGround} />
        </div>
        <div className={ImagePopUpContentContainer}>
          <img className={ImagePopUpContent} src={imageLink} alt="이미지" />
        </div>
      </div>
    </div>
  );
};
export default ImagePopUp;
