import { style } from '@vanilla-extract/css';
import { theme } from '../../../../styles/theme';

export const ImagePopUpBackGround = style({
  boxSizing: 'border-box',
  position: 'fixed',
  top: '0',
  left: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px',
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.color.opacity70,
  zIndex: '100',
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

export const ImagePopUpCloseImage = style({
  cursor: 'pointer',
});

export const ImagePopUpContentContainer = style({
  display: 'flex',
  minHeight: '438px',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.color.gray900,
  borderRadius: '2rem',
});

export const ImagePopUpContent = style({
  maxWidth: '100%',
  maxHeight: '100%',
});
