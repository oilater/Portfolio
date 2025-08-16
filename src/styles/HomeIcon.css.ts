import { style } from '@vanilla-extract/css';

export const iconWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '30px',
  height: '30px',
  backgroundColor: '#6b7684',
  borderRadius: '50%',
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out',
  ':hover': {
    transform: 'scale(1.2)'
  }
});

export const icon = style({
  width: '20px',
  height: '20px',
  color: '#121417'
});
