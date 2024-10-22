import { style } from '@vanilla-extract/css';
import { mediaQueries, theme } from '../../styles/theme';
import { font } from '../../styles/font.css';
import { backgroundColorTransition } from '../../styles/background.css';

export const AboutMe_Text = style([font.size.xl, font.weight.semiBold]);

export const AboutMe_Elements = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '4px 12px',
  width: '100%',
  zIndex: '2',
});

export const AboutMe_Element = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  width: '100%',
  justifyContent: 'center',
  gap: '20px',
  '@media': {
    [mediaQueries.mobile]: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
});

export const AboutMe_ElementText = style([{ color: theme.color.gray500 }, font.size.sm, font.weight.normal]);

export const AboutMe_InfoButtons = style({
  display: 'flex',
  gap: '20px',
  justifyContent: 'center',
});

export const AboutMe_InfoButton = style([
  {
    backgroundColor: theme.color.gray400,
    textAlign: 'center',
    width: '40%',

    padding: '4px 8px',

    borderRadius: '8px',
    color: theme.color.white,
  },
  backgroundColorTransition('orange400'),
  AboutMe_Text,
]);

export const AboutMe_InfoOutLine = style({
  position: 'absolute',
  padding: '0 10px',
  border: `3px solid ${theme.color.orange400}`,
  borderRadius: '16px',
  height: '80%',
  width: 'calc(100% + 10px)',
  zIndex: '1',
});

export const AboutMe_InfoOutLineBack = style({
  position: 'absolute',
  height: '100%',
  width: '100%',
  backgroundColor: theme.color.yellow100,
  zIndex: '1',
});
