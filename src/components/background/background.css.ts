import { style } from '@vanilla-extract/css';
import { theme } from '../../styles/theme';

export const BackGroundStyleInit = style({
  position: 'fixed',
  backgroundColor: theme.color.gray900,
  width: '100%',
  height: '100%',
  zIndex: '-1',
});
