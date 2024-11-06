import { style } from '@vanilla-extract/css';
import { theme } from '../../styles/theme';

export const FrameWraper = style({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.color.yellow100,
  width: '100%',
  height: '100%',
  borderRadius: '24px',
  padding: '50px 0',
});

export const FrameContainer = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80%',
  height: '80%',
});
