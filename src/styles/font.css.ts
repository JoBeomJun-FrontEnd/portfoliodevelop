import { style } from '@vanilla-extract/css';

export const mediaQueries = {
  tablet: 'screen and (max-width: 768px)',
  mobile: 'screen and (max-width: 480px)',
};

const fontSize = {
  base: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    xl2: '24px',
    xl3: '30px',
    xl4: '36px',
    xl5: '40px',
  },
  tablet: {
    xs: '10px',
    sm: '12px',
    base: '14px',
    lg: '16px',
    xl: '18px',
    xl2: '20px',
    xl3: '24px',
    xl4: '30px',
    xl5: '36px',
  },
  mobile: {
    xs: '8px',
    sm: '10px',
    base: '12px',
    lg: '14px',
    xl: '16px',
    xl2: '18px',
    xl3: '20px',
    xl4: '24px',
    xl5: '30px',
  },
};

const lineHeight = {
  base: {
    xs: '16px',
    sm: '20px',
    base: '24px',
    lg: '28px',
    xl: '28px',
    xl2: '32px',
    xl3: '36px',
    xl4: '40px',
    xl5: '44px',
  },
  tablet: {
    xs: '16px',
    sm: '18px',
    base: '20px',
    lg: '22px',
    xl: '24px',
    xl2: '26px',
    xl3: '28px',
    xl4: '30px',
    xl5: '32px',
  },
  mobile: {
    xs: '14px',
    sm: '16px',
    base: '18px',
    lg: '20px',
    xl: '22px',
    xl2: '26px',
    xl3: '28px',
    xl4: '32px',
    xl5: '36px',
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
