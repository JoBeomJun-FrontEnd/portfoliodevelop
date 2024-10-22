import { style } from '@vanilla-extract/css';
import { ColorType } from '../types/colortype';
import { theme } from './theme';

export const backgroundColorTransition = (colorName: ColorType) =>
  style({
    transition: 'background-color 0.3s ease',

    '@media': {
      '(hover: hover) and (pointer: fine)': {
        selectors: {
          [`&:hover`]: {
            backgroundColor: theme.color[colorName],
          },
        },
      },
    },
  });
