import { style } from '@vanilla-extract/css';
import { theme, mediaQueries } from '../../../styles/theme';
import { backgroundColorTransition } from '../../../styles/background.css';

export const TopButtonContainer = style([
  {
    cursor: 'pointer',
    position: 'fixed',
    top: '90%',
    left: '90%',
    width: '72px',
    height: '72px',

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
  },
  backgroundColorTransition('orange400'),
]);

export const TopButtonImage = style({
  width: '48px',
  height: '48px',

  stroke: theme.color.white,

  '@media': {
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
