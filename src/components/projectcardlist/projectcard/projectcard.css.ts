import { style } from '@vanilla-extract/css';
import { font, mediaQueries } from '../../../styles/font.css';
import { theme } from '../../../styles/theme';

export const ProjectCardContainer = style({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  width: 'calc((100% - 32px) / 2)',
  padding: '32px',
  gap: '8px',
  borderRadius: '16px',
  boxShadow: `0px 0px 10px 2px ${theme.color.gray600}`,
  backgroundColor: theme.color.white,

  '@media': {
    [mediaQueries.tablet]: {
      width: '100%',
    },
    [mediaQueries.mobile]: {
      marginLeft: '10px',
    },
  },
});

export const ProjectCardTitle = style([
  {
    color: theme.color.white,
    alignSelf: 'flex-start',
    backgroundColor: theme.color.blue400,
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

export const ProjectCardInfoContainer = style([
  {
    listStyle: 'inherit',
    paddingLeft: '16px',
  },
  font.size.sm,
]);

export const ProjectCardLink = style([
  {
    alignSelf: 'flex-start',
    color: theme.color.blue500,
  },
  font.size.base,
]);

export const ProjectCardLibraryContainer = style([
  {
    display: 'flex',
    gap: '8px',
    marginBottom: '8px',
  },
  font.size.base,
]);

export const ProjectCardLibrary = style({
  alignSelf: 'flex-start',
  padding: '4px 12px',
  borderRadius: '4px',
  backgroundColor: theme.color.yellow200,
  boxShadow: `0px 0px 2px 0px ${theme.color.gray600}`,
});

export const ProjectCardOtherContainer = style([
  {
    display: 'flex',
    gap: '8px',
  },
  font.size.base,
]);

export const ProjectCardOther = style({
  cursor: 'pointer',
  alignSelf: 'flex-start',
  display: 'flex',
  padding: '4px 12px',
  border: `1px solid ${theme.color.black}`,
  borderRadius: '4px',
  backgroundColor: theme.color.white,
});
