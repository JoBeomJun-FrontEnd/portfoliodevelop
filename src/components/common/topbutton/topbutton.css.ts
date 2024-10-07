import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/theme';
import { mediaQueries } from '../../../styles/font.css';

export const TopButtonContainer = style({
  position: 'fixed',
  top: '90%',
  left: '85%',
  border: `5px solid ${theme.color.black}`,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '64px',
  height: '64px',
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
