import { ReactNode } from 'react';
import { FrameContainer, FrameWraper } from './frame.css';

const Frame = ({ children }: { children: ReactNode }) => {
  return (
    <div className={FrameWraper}>
      <div className={FrameContainer}>{children}</div>
    </div>
  );
};
export default Frame;
