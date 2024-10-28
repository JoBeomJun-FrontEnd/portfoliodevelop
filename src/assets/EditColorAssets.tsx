import { lazy, Suspense } from 'react';

const loadSVG = (svgName: string) => {
  switch (svgName) {
    case 'top_up':
      return lazy(() => import('./topbutton/top_up.svg?react'));
    case 'hamburger':
      return lazy(() => import('./header/hamburger-menu.svg?react'));
    default:
      return null;
  }
};

const EditColorAssets = ({
  className,
  svgName,
  onClick,
}: {
  className: string;
  svgName: string;
  onClick?: () => void;
}) => {
  const Icon = loadSVG(svgName);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {Icon ? (
        <Icon
          className={className}
          onClick={() => {
            onClick && onClick();
          }}
        />
      ) : null}
    </Suspense>
  );
};
export default EditColorAssets;
