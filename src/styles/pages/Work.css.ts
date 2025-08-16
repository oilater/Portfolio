import { style } from '@vanilla-extract/css';
import { Colors } from '../../theme/theme';

export const wrapper = style({
  width: '100%',
  height: '100%',
  paddingBottom: '6rem'
});

export const contentSection = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '54px 16px',
  padding: '0 16px'
});

export const mainDescription = style({
  fontSize: '1.2rem',
  fontWeight: '500',
  color: Colors.grey500,
  padding: '0 16px',
  lineHeight: '1.65',
  marginBottom: '3.5rem'
});

export const hr = style({
  border: '0',
  height: '2px',
  background: 'rgba(222, 222, 255, 0.19)',
  margin: '0 16px'
});
