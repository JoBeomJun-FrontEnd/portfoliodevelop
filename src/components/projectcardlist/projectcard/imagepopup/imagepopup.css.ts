import { style } from '@vanilla-extract/css';
import { theme } from '../../../../styles/theme';

export const ImagePopUpBackGround = style({
  boxSizing: 'border-box',
  position: 'fixed',
  left: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px',
  width: '100vw',
  height: '100vh',
  backgroundColor: '#00000070',
});

export const ImagePopUpBox = style({
  position: 'relative',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '16px',
  width: '100%',
  maxWidth: '466px',
  maxHeight: '80%',
  minHeight: '506px',
  backgroundColor: theme.color.white,
});
export const ImagePopUpCloseBox = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '100%',
  height: '36px',
});

export const ImagePopUpContentContainer = style({
  display: 'flex',
  minHeight: '438px',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ImagePopUpContent = style({
  maxWidth: '100%',
  maxHeight: '100%',
});
