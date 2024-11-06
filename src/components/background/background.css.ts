import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '../../styles/theme';

export const BackgroundContainer = style({
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.color.gray900,
  transition: 'background-color 0.3s',
});

export const BackgroundIsBelow = styleVariants({
  true: {
    backgroundColor: theme.color.white,
  },
  false: {
    backgroundColor: theme.color.gray900,
  },
});
