import { globalFontFace, globalStyle } from '@vanilla-extract/css';

const Pretendard = 'PretendardVariable';

globalFontFace('PretendardVariable', {
  src: `local('PretendardVariable'), url('/fonts/PretendardVariable.woff2') format('woff2-variations')`,
  fontWeight: '45 920',
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

globalStyle(
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video',
  {
    fontFamily: Pretendard,
  }
);

globalStyle('h1', {
  fontSize: '2.5em',
  marginBottom: '1em',
});

globalStyle('a', {
  color: '#0070f3', // 링크 색상
  textDecoration: 'none', // 밑줄 제거
});

globalStyle('a:hover', {
  textDecoration: 'underline', // 마우스 오버 시 밑줄 추가
});
