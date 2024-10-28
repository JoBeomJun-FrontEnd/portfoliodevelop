import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '../../styles/theme';
import { font } from '../../styles/font.css';

export const LearnWraper = style({ display: 'flex', flexDirection: 'column', gap: '20px' });

export const LearnContainer = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease',
  zIndex: '1',
});

export const LearnContainerVisible = styleVariants({
  hidden: {
    transform: 'rotateX(90deg)',
  },
  visible: {
    transform: 'rotateX(0)',
  },
});

export const LearnTitleSection = style({
  display: 'flex',
  gap: '30px',
  alignItems: 'end',
});

export const LearnTitle = style([
  {
    color: theme.color.orange600,
  },
  font.size.xl3,
  font.weight.bold,
]);

export const LearnPeriod = style([
  {
    color: theme.color.gray700,
  },
  font.size.lg,
  font.weight.semiBold,
]);

export const LearnDetail = style([
  {
    color: theme.color.gray500,
    marginTop: '10px',
  },
]);
