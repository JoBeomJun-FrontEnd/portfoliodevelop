import { style } from '@vanilla-extract/css';

const fontSize = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  xl2: '1.5rem',
  xl3: '1.875rem',
  xl4: '2.25rem',
  xl5: '2.5rem',
  xl6: '2.75rem',
  xl7: '3rem',
  xl8: '3.25rem',
  xl9: '3.5rem',
};

const lineHeight = {
  xs: '1rem',
  sm: '1.25rem',
  base: '1.5rem',
  lg: '1.75rem',
  xl: '1.75rem',
  xl2: '2rem',
  xl3: '2.25rem',
  xl4: '2.5rem',
  xl5: '2.75rem',
  xl6: '3rem',
  xl7: '3.25rem',
  xl8: '3.5rem',
  xl9: '3.75rem',
};

type Size = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'xl2' | 'xl3' | 'xl4' | 'xl5' | 'xl6' | 'xl7' | 'xl8' | 'xl9';

const createSizeStyle = (size: Size) =>
  style({
    fontSize: fontSize[size],
    lineHeight: lineHeight[size],
  });

export const font = {
  size: {
    xs: createSizeStyle('xs'),
    sm: createSizeStyle('sm'),
    base: createSizeStyle('base'),
    lg: createSizeStyle('lg'),
    xl: createSizeStyle('xl'),
    xl2: createSizeStyle('xl2'),
    xl3: createSizeStyle('xl3'),
    xl4: createSizeStyle('xl4'),
    xl5: createSizeStyle('xl5'),
    xl6: createSizeStyle('xl6'),
    xl7: createSizeStyle('xl7'),
    xl8: createSizeStyle('xl8'),
    xl9: createSizeStyle('xl9'),
  },
  weight: {
    thin: { fontWeight: '100' },
    extraLight: { fontWeight: '200' },
    light: { fontWeight: '300' },
    normal: { fontWeight: '400' },
    medium: { fontWeight: '500' },
    semiBold: { fontWeight: '600' },
    bold: { fontWeight: '700' },
    extraBold: { fontWeight: '800' },
    black: { fontWeight: '900' },
  },
};
