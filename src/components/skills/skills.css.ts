import { style } from '@vanilla-extract/css';
import { font } from '../../styles/font.css';
import { theme } from '../../styles/theme';

export const SkillsContainer = style({
  display: 'grid',
  gridTemplateColumns: '25% auto',
  gap: '8px',
  alignItems: 'center',
  border: `3px solid ${theme.color.orange400}`,
  borderRadius: '16px',
  padding: '8px 12px',
  marginBottom: '8px',
});

export const SkillsCategory = style([{}, font.size.xl, font.weight.bold]);

export const SkillsElements = style({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  flexWrap: 'wrap',
});

export const SkillsElement = style([
  {
    padding: '6px 12px',
    borderRadius: '8px',
  },
  font.size.base,
]);
