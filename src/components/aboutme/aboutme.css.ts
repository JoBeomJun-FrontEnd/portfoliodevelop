import { style } from '@vanilla-extract/css';
import { mediaQueries, theme } from '../../styles/theme';
import { font } from '../../styles/font.css';

export const Text = style([font.size.xl, font.weight.semiBold]);

export const AboutMeWraper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.color.yellow100,
  width: '100%',
  height: '100%',
  borderRadius: '24px',
  padding: '30px 0',
});

export const AboutMeContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80%',
  height: '80%',
});

export const AboutMeInfoContainer = style({
  display: 'flex',
  gap: '4rem',
});

export const AboutMeImage = style({
  '@media': {
    [mediaQueries.tablet]: {
      display: 'none',
    },
  },
});

export const AboutMeInfo = style([
  {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
    width: '100%',
  },
]);

export const AboutMeElements = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '4px 12px',
});

export const AboutMeElement = style({
  display: 'grid',
  gridTemplateColumns: '50% auto',
  gap: '20px',
  width: '100%',
});

export const AboutMeElementText = style([font.size.base, font.weight.normal]);

export const AboutMeInfoButtons = style({
  display: 'flex',
  gap: '20px',
});

export const AboutMeInfoButton = style([
  {
    backgroundColor: theme.color.gray300,
    textAlign: 'center',
    width: '100%',

    padding: '4px 8px',

    borderRadius: '8px',

    '@media': {
      '(hover: hover) and (pointer: fine)': {
        selectors: {
          [`&:hover`]: {
            backgroundColor: theme.color.orange400,
          },
        },
      },
    },
  },
  Text,
]);

export const AboutMeInfoOutLine = style({
  position: 'absolute',
  padding: '0 10px',
  border: `3px solid ${theme.color.orange400}`,
  borderRadius: '16px',
  height: '80%',
  width: 'calc(100% + 10px)',
});

export const AboutMeInfoOutLineBack = style({
  position: 'absolute',
  height: '100%',
  width: '100%',
  backgroundColor: theme.color.yellow100,
});
