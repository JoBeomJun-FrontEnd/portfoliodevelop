import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/theme';
import { mediaQueries } from '../../../styles/font.css';

export const TopButtonContainer = style({
  cursor: 'pointer',
  position: 'fixed',
  top: '90%',
  left: '85%',
  width: '64px',
  height: '64px',

  transition: 'border-color 0.2s ease',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  border: `5px solid ${theme.color.black}`,
  borderRadius: '50%',
  ':hover': {
    borderColor: theme.color.red400,
  },

  '@media': {
    [mediaQueries.tablet]: {
      width: '48px',
      height: '48px',
      border: `4px solid ${theme.color.black}`,
    },
    [mediaQueries.mobile]: {
      width: '36px',
      height: '36px',
      border: `3px solid ${theme.color.black}`,
    },
  },
});

export const TopButtonImage = style({
  width: '48px',
  height: '48px',

  transition: 'all 0.2s ease',

  stroke: theme.color.black,
  fill: theme.color.black,
  selectors: {
    [`${TopButtonContainer}:hover &`]: {
      stroke: theme.color.red400,
      fill: theme.color.red400,
    },
  },

  '@media': {
    [mediaQueries.tablet]: {
      width: '36px',
      height: '36px',
    },
    [mediaQueries.mobile]: {
      width: '24px',
      height: '24px',
    },
  },
});
