import { theme } from './../../../styles/theme';
import { style } from '@vanilla-extract/css';
import { font, mediaQueries } from '../../../styles/font.css';

const HeaderButton = style({
  cursor: 'pointer',

  color: theme.color.black,
  transition: 'color 0.3s ease',
  ':hover': {
    color: theme.color.blue400,
  },
});

export const HeaderWraper = style({
  position: 'fixed',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: theme.color.white,
});

export const HeaderContainer = style({
  width: '100%',
  display: 'flex',
  maxWidth: '1140px',
  alignItems: 'center',
});

export const HeaderTitle = style([
  {
    marginLeft: '30px',

    '@media': {
      [mediaQueries.tablet]: {
        marginLeft: '20px',
      },
      [mediaQueries.mobile]: {
        marginLeft: '10px',
      },
    },
  },
  HeaderButton,
  font.size.xl3,
  font.weight.bold,
]);

export const HeaderTextContainer = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '30px',
  paddingRight: '30px',
  '@media': {
    [mediaQueries.tablet]: {
      gap: '20px',
      paddingRight: '20px',
    },
    [mediaQueries.mobile]: {
      gap: '10px',
      paddingRight: '10px',
    },
  },
});

export const HeaderText = style([HeaderButton, font.size.xl2, font.weight.semiBold]);
