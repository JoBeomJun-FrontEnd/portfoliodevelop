import { theme, mediaQueries } from '../../../styles/theme';
import { style, styleVariants } from '@vanilla-extract/css';
import { font } from '../../../styles/font.css';
import { backgroundColorTransition } from '../../../styles/background.css';

const HeaderButton = style([
  {
    color: theme.color.white,
  },
  backgroundColorTransition('orange400'),
]);

export const HeaderWraper = style({
  position: 'fixed',
  width: '100%',
  height: '70px',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: theme.color.opacity50,
  zIndex: '99',
});

export const HeaderContainer = style({
  width: '90%',
  display: 'flex',
  maxWidth: '1140px',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const HeaderTitle = style([
  {
    width: '100%',
    color: theme.color.white,
  },
  font.size.xl3,
  font.weight.bold,
]);

export const HeaderTextContainer = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '30px',

  transition: 'right 0.3s ease',

  '@media': {
    [mediaQueries.tablet]: {
      gap: '20px',
    },
    [mediaQueries.mobile]: {
      position: 'fixed',
      top: '70px',
      width: '30%',
      height: '200px',
      background: theme.color.opacity50,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      borderRadius: '0 0 12px 12px',
    },
  },
});

export const HeaderTextContainerMove = styleVariants({
  active: {
    right: '0',
  },
  inactive: {
    right: '-30%',
  },
});

export const HeaderText = style([HeaderButton, font.size.xl, font.weight.semiBold]);

export const HeaderHambuger = style({
  fill: theme.color.orange400,
});
