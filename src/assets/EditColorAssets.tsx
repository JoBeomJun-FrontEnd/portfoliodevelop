import { lazy, Suspense } from 'react';

const loadSVG = (svgName: string) => {
  switch (svgName) {
    case 'top_up':
      return lazy(() => import('./topbutton/top_up.svg?react'));
    default:
      return null;
  }
};

const EditColorAssets = ({ className, svgName }: { className: string; svgName: string }) => {
  const Icon = loadSVG(svgName);

  return <Suspense fallback={<div>Loading...</div>}>{Icon ? <Icon className={className} /> : null}</Suspense>;
};
export default EditColorAssets;
