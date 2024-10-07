import { style } from '@vanilla-extract/css';

export const mediaQueries = {
  tablet: 'screen and (max-width: 768px)',
  mobile: 'screen and (max-width: 480px)',
};

const fontSize = {
  base: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    xl2: '1.5rem',
    xl3: '1.875rem',
    xl4: '2.25rem',
    xl5: '2.5rem',
  },
  tablet: {
    xs: '0.625rem',
    sm: '0.75rem',
    base: '0.875rem',
    lg: '1rem',
    xl: '1.125rem',
    xl2: '1.25rem',
    xl3: '1.5rem',
    xl4: '1.875rem',
    xl5: '2.25rem',
  },
  mobile: {
    xs: '0.5rem',
    sm: '0.625rem',
    base: '0.75rem',
    lg: '0.875rem',
    xl: '1rem',
    xl2: '1.125rem',
    xl3: '1.25rem',
    xl4: '1.5rem',
    xl5: '1.875rem',
  },
};
const lineHeight = {
  base: {
    xs: '1rem',
    sm: '1.25rem',
    base: '1.5rem',
    lg: '1.75rem',
    xl: '1.75rem',
    xl2: '2rem',
    xl3: '2.25rem',
    xl4: '2.5rem',
    xl5: '2.75rem',
  },
  tablet: {
    xs: '1rem',
    sm: '1.125rem',
    base: '1.25rem',
    lg: '1.375rem',
    xl: '1.5rem',
    xl2: '1.625rem',
    xl3: '1.75rem',
    xl4: '1.875rem',
    xl5: '2rem',
  },
  mobile: {
    xs: '0.875rem',
    sm: '1rem',
    base: '1.125rem',
    lg: '1.25rem',
    xl: '1.375rem',
    xl2: '1.625rem',
    xl3: '1.75rem',
    xl4: '2rem',
    xl5: '2.25rem',
  },
};

type Size = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'xl2' | 'xl3' | 'xl4' | 'xl5';

const createSizeStyle = (size: Size) =>
  style({
    fontSize: fontSize.base[size],
    lineHeight: lineHeight.base[size],
    '@media': {
      [mediaQueries.tablet]: {
        fontSize: fontSize.tablet[size],
        lineHeight: lineHeight.tablet[size],
      },
      [mediaQueries.mobile]: {
        fontSize: fontSize.mobile[size],
        lineHeight: lineHeight.mobile[size],
      },
    },
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
