import isBelowHook from '../../../hooks/isBelowHook';
import {
  CategoryContainer,
  CategoryContainerVisible,
  CategoryDetail,
  CategoryPeriod,
  CategoryTitle,
  CategoryTitleSection,
} from './category.css';

const Category = ({ category, details }: { category: string; details: string[] }) => {
  const { isVisible, elementRef } = isBelowHook(100);

  return (
    <div
      data-key={category}
      ref={elementRef}
      className={`${CategoryContainer} ${
        isVisible ? CategoryContainerVisible.visible : CategoryContainerVisible.hidden
      }`}
    >
      <div className={CategoryTitleSection}>
        <h2 className={CategoryTitle}>{category}</h2>
        <p className={CategoryPeriod}>{details[0]}</p>
      </div>
      <p className={CategoryDetail}>{details[1]}</p>
    </div>
  );
};
export default Category;
