import { style } from '@vanilla-extract/css';
import { theme } from '../../styles/theme';
import { font } from '../../styles/font.css';

export const SectionBackGround = style({
  position: 'relative',
  width: '100%',
  margin: '100px 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  zIndex: '0',
});

export const SectionContainer = style({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  paddingTop: '24px',
});

export const SectionTitle = style([
  {
    paddingBottom: '30px',
    marginBottom: '70px',
    borderBottom: `2px solid currentColor `,
    color: theme.color.white,
  },
  font.size.xl9,
  font.weight.black,
]);
