import { style } from '@vanilla-extract/css';

export const AppContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const OutletContainer = style({
  maxWidth: '1140px',
});

export const HeaderHeight = style({
  height: '50px',
});
