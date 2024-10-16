import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/theme';

export const ButtonContainer = style({
  cursor: 'pointer',
  backgroundColor: theme.color.gray400,
  borderRadius: '12px',
  padding: '4px 8px',
});
