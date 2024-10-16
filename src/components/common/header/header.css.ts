import { theme, mediaQueries } from './../../../styles/theme';
import { style } from '@vanilla-extract/css';
import { font } from '../../../styles/font.css';

const HeaderButton = style({
  color: theme.color.white,
  transition: 'color 0.3s ease',
  '@media': {
    '(hover: hover) and (pointer: fine)': {
      selectors: {
        [`&:hover`]: {
          color: theme.color.orange400,
        },
      },
    },
  },
});

export const HeaderWraper = style({
  position: 'fixed',
  width: '100%',
  height: '70px',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: theme.color.gray200,
});

export const HeaderContainer = style({
  width: '100%',
  display: 'flex',
  maxWidth: '1140px',
  alignItems: 'center',
});

export const HeaderTitle = style([HeaderButton, font.size.xl3, font.weight.bold]);

export const HeaderTextContainer = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '30px',
  '@media': {
    [mediaQueries.tablet]: {
      gap: '20px',
    },
    [mediaQueries.mobile]: {
      gap: '10px',
    },
  },
});

export const HeaderText = style([HeaderButton, font.size.xl, font.weight.semiBold]);
