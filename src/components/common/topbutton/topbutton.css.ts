import { style } from '@vanilla-extract/css';
import { theme, mediaQueries } from '../../../styles/theme';

export const TopButtonContainer = style({
  cursor: 'pointer',
  position: 'fixed',
  top: '90%',
  left: '90%',
  width: '72px',
  height: '72px',

  transition: 'border-color 0.2s ease',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.color.gray400,

  borderRadius: '50%',

  '@media': {
    [mediaQueries.tablet]: {
      width: '48px',
      height: '48px',
    },
    [mediaQueries.mobile]: {
      width: '36px',
      height: '36px',
    },
  },
});

export const TopButtonImage = style({
  width: '48px',
  height: '48px',

  transition: 'all 0.2s ease',

  stroke: theme.color.white,

  '@media': {
    '(hover: hover) and (pointer: fine)': {
      selectors: {
        [`${TopButtonContainer}:hover &`]: {
          stroke: theme.color.orange400,
        },
      },
    },
    [mediaQueries.tablet]: {
      width: '36px',
      height: '36px',
      selectors: {
        [`${TopButtonContainer}:active &`]: {
          stroke: theme.color.orange400,
        },
      },
    },
    [mediaQueries.mobile]: {
      width: '24px',
      height: '24px',
    },
  },
});
