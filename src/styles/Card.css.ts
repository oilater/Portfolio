import { style } from '@vanilla-extract/css';
import { Colors } from '../theme/theme';

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  verticalAlign: 'top',
  background: 'inherit',
  border: `1px solid ${Colors.grey300}`,
  borderRadius: '16px',
  transition: 'background 0.2s ease',
  cursor: 'pointer',
  ':hover': {
    background: Colors.opacity50
  }
});

export const cardImageWrapper = style({
  width: '100%',
  aspectRatio: '1',
  borderRadius: '16px 16px 0 0',
  overflow: 'hidden',
  padding: 0,
  '@media': {
    '(min-width: 1024px)': {
      maxHeight: '260px'
    }
  }
});

export const cardImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.2s ease-out',
  transform: 'translateZ(0)',
  ':hover': {
    transform: 'scale(1.08)'
  }
});

export const cardContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  padding: '24px'
});

export const cardTitle = style({
  fontSize: '20px',
  fontWeight: '600',
  color: Colors.grey800
});

export const cardDescription = style({
  fontSize: '15px',
  fontWeight: '400',
  color: Colors.grey600
});

export const cardTags = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '6px',
  marginTop: '8px'
});
