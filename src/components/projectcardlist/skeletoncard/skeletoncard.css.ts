import { keyframes, style } from '@vanilla-extract/css';
import { font, mediaQueries } from '../../../styles/font.css';
import { theme } from '../../../styles/theme';

const gradientAnimation = keyframes({
  '0%': {
    backgroundPosition: '100% 0%',
  },
  '100%': {
    backgroundPosition: '-100% 0%',
  },
});

export const SkeletonCardContainer = style({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  width: 'calc((100% - 32px) / 2)',
  padding: '32px',
  gap: '8px',
  borderRadius: '16px',
  boxShadow: `0px 0px 10px 2px ${theme.color.gray600}`,
  backgroundColor: theme.color.white,

  '@media': {
    [mediaQueries.tablet]: {
      width: '100%',
    },
    [mediaQueries.mobile]: {
      marginLeft: '10px',
    },
  },
});

export const SkeletonCardTitle = style({
  height: '36px',
  width: '150px',
});

export const SkeletonCardPersonnel = style({
  height: '24px',
  width: '100px',
  paddingBottom: '8px',
  borderBottom: `1px solid ${theme.color.gray300}`,
});

export const SkeletonCardSubTitle = style({
  height: '28px',
  width: '120px',
});

export const SkeletonCardInfoContainer = style({
  listStyle: 'inherit',
  paddingLeft: '16px',
});

export const SkeletonCardInfo = style({
  height: '18px',
  width: '80px',
  marginBottom: '2px',
});

export const SkeletonCardLink = style({
  height: '24px',
  width: '200px',
});

export const SkeletonCardLibraryContainer = style({
  display: 'flex',
  gap: '8px',
  marginBottom: '8px',
});

export const SkeletonCardLibrary = style({
  height: '24px',
  padding: '4px 12px',
  width: '80px',
});

export const SkeletonCardOtherContainer = style({
  display: 'flex',
  gap: '8px',
});

export const SkeletonCardOther = style({
  height: '24px',
  width: '80px',
});

export const SkeletonCardAnimation = style({
  borderRadius: '4px',
  backgroundSize: '200% 100%',
  backgroundImage: `linear-gradient(to right, ${theme.color.gray200} 0%, ${theme.color.white} 25%, ${theme.color.gray200} 50%, ${theme.color.gray200} 100%)`,
  animationDuration: '1.5s',
  animationFillMode: 'forwards',
  animationIterationCount: 'infinite',
  animationName: `${gradientAnimation}`,
  animationTimeline: 'linear',
});
