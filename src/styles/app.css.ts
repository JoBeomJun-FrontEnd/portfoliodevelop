import { style } from '@vanilla-extract/css';

export const AppContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
export const HeaderHeight = style({
  height: '70px',
});

export const OutletContainer = style({
  maxWidth: '1140px',
  minWidth: '375px',
  width: '90%',
});
