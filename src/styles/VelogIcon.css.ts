import { style } from '@vanilla-extract/css';

export const velogIcon = style({
  width: '30px',
  height: '30px',
  display: 'block',
  transition: 'transform 0.3s ease-in-out',
  ':hover': {
    transform: 'scale(1.2)'
  }
});
