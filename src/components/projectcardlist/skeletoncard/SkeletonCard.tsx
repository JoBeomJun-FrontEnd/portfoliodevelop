import {
  SkeletonCardContainer,
  SkeletonCardInfoContainer,
  SkeletonCardPersonnel,
  SkeletonCardSubTitle,
  SkeletonCardTitle,
  SkeletonCardLink,
  SkeletonCardLibraryContainer,
  SkeletonCardLibrary,
  SkeletonCardOtherContainer,
  SkeletonCardOther,
  SkeletonCardInfo,
  SkeletonCardAnimation,
} from './skeletoncard.css';

const SkeletonCard = () => {
  return (
    <div className={SkeletonCardContainer}>
      <div className={`${SkeletonCardTitle} ${SkeletonCardAnimation}`}></div>
      <div className={`${SkeletonCardPersonnel} ${SkeletonCardAnimation}`}></div>
      <div className={`${SkeletonCardSubTitle} ${SkeletonCardAnimation}`}></div>

      <ul className={SkeletonCardInfoContainer}>
        <li className={`${SkeletonCardInfo} ${SkeletonCardAnimation}`}></li>
        <li className={`${SkeletonCardInfo} ${SkeletonCardAnimation}`}></li>
        <li className={`${SkeletonCardInfo} ${SkeletonCardAnimation}`}></li>
      </ul>
      <div className={`${SkeletonCardLink} ${SkeletonCardAnimation}`}></div>
      <div className={SkeletonCardLibraryContainer}>
        <div className={`${SkeletonCardLibrary} ${SkeletonCardAnimation}`}></div>
        <div className={`${SkeletonCardLibrary} ${SkeletonCardAnimation}`}></div>
        <div className={`${SkeletonCardLibrary} ${SkeletonCardAnimation}`}></div>
      </div>
      <div className={SkeletonCardOtherContainer}>
        <div className={`${SkeletonCardOther} ${SkeletonCardAnimation}`}></div>

        <div className={`${SkeletonCardOther} ${SkeletonCardAnimation}`}></div>
      </div>
    </div>
  );
};
export default SkeletonCard;
