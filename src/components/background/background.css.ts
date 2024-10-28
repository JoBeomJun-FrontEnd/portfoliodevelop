import { style, styleVariants } from '@vanilla-extract/css';

export const BackgroundContainer = style({
  transition: 'opacity 0.3s',
});

export const BackgroundIsBelow = styleVariants({
  true: {
    display: 'none',
    opacity: 0,
  },
  false: {
    opacity: 1,
  },
});
