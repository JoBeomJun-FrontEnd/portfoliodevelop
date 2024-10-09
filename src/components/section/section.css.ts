import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '../../styles/theme';
import { font } from '../../styles/font.css';

export const SectionBackGround = style({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const SectionBackGroundColor = styleVariants({
  home: {},
  about: {
    backgroundColor: theme.color.white,
  },
  skills: {
    backgroundColor: theme.color.yellow400,
  },
  projects: {
    backgroundColor: theme.color.blue400,
  },
  contact: {
    backgroundColor: theme.color.orange300,
  },
});

export const SectionHome = style({
  backgroundColor: theme.color.white,
});

export const SectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '1140px',
});

export const SectionTitle = style([{ color: theme.color.black }, font.size.xl5, font.weight.black]);
