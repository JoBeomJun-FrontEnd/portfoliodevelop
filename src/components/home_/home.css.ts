import { style } from '@vanilla-extract/css';
import { theme } from '../../styles/theme';
import { font } from '../../styles/font.css';

export const HomeContiner = style({
  color: theme.color.white,
});

export const HomeBr = style({
  width: '100px',
});

export const HomeTitle = style([
  {
    textAlign: 'center',
    paddingBottom: '2rem',
  },
  font.size.xl4,
  font.weight.black,
]);

export const HomeText = style([
  {
    textAlign: 'center',
    paddingTop: '1rem',
  },
  font.size.xl3,
  font.weight.semiBold,
]);
