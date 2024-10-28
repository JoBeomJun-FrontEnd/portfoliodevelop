import { style, styleVariants } from '@vanilla-extract/css';
import { font } from '../../../styles/font.css';
import { theme, mediaQueries } from '../../../styles/theme';
import { backgroundColorTransition } from '../../../styles/background.css';

export const ProjectCardContainer = style({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  width: 'calc((100% - 32px) / 2)',
  padding: '32px',
  gap: '16px',
  borderRadius: '16px',
  boxShadow: `0px 0px 5px 0px ${theme.color.gray600}`,
  backgroundColor: theme.color.white,
  transition: 'transform 0.3s ease',

  '@media': {
    [mediaQueries.tablet]: {
      width: '100%',
    },
    [mediaQueries.mobile]: {
      marginLeft: '10px',
    },
  },
});

export const ProjectCardVisible = styleVariants({
  hidden: {
    transform: 'rotateY(90deg)',
  },
  visible: {
    transform: 'rotateY(0)',
  },
});

export const ProjectCardTitle = style([
  {
    color: theme.color.white,
    alignSelf: 'flex-start',
    backgroundColor: theme.color.orange400,
    padding: '4px 12px',
    borderRadius: '8px',
  },
  font.size.xl,
  font.weight.semiBold,
]);

export const ProjectCardPersonnel = style([
  {
    color: theme.color.gray400,
    boxSizing: 'border-box',
    paddingBottom: '8px',
    borderBottom: `1px solid ${theme.color.gray300}`,
  },
  font.size.base,
]);

export const ProjectCardSubTitle = style([font.size.lg, font.weight.medium]);

export const ProjectCardInfoContainer = style({
  listStyle: 'inherit',
  paddingLeft: '16px',
  display: 'flex',
  flexDirection: 'column',
});

export const ProjectCardInfo = style([font.size.sm]);

export const ProjectCardLink = style([
  {
    alignSelf: 'flex-start',
    color: theme.color.blue500,
  },
  font.size.base,
]);

export const ProjectCardLibraryContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginBottom: '8px',
});

export const ProjectCardLibrary = style([
  {
    alignSelf: 'flex-start',
    padding: '4px 12px',
    borderRadius: '4px',
    backgroundColor: theme.color.yellow200,
    boxShadow: `0px 0px 2px 0px ${theme.color.gray600}`,
  },
  font.size.base,
]);

export const ProjectCardOtherContainer = style({
  display: 'flex',
  gap: '8px',
});

export const ProjectCardOther = style([
  {
    cursor: 'pointer',
    alignSelf: 'flex-start',
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
    padding: '4px 12px',
    border: `1px solid ${theme.color.black}`,
    borderRadius: '4px',
    color: theme.color.white,
    backgroundColor: theme.color.gray400,
  },
  backgroundColorTransition('orange400'),
  font.size.base,
]);
