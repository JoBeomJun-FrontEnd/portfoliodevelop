import React from 'react';

const A = ({
  className = '',
  href,
  children,
  target = '_blank',
}: {
  className?: string;
  href: string;
  children: React.ReactNode;
  target?: string;
}) => {
  return (
    <a className={className} href={href} target={target} rel="noopener noreferrer">
      {children}
    </a>
  );
};
export default A;
