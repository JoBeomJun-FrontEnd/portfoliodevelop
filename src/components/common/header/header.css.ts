import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/theme';

export const HeaderWraper = style({
  position: 'fixed',
  width: '100%',
  display: 'flex',
});

export const HeaderContainer = style({
  backgroundColor: theme.color.white,
});
