import { style } from '@vanilla-extract/css';
import { Colors } from '../../theme/theme';

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  background: 'inherit',
  borderRadius: '8px',
  willChange: 'transform, opacity'
});

export const cardImageWrapper = style({
  width: '100%',
  aspectRatio: '1',
  borderRadius: '8px',
  overflow: 'hidden',
  padding: 0
});

export const cardImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.2s ease-out',
  ':hover': {
    transform: 'scale(1.08) translateZ(0)'
  }
});

export const cardContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  paddingTop: '10px'
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
