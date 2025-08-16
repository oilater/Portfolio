import { style } from '@vanilla-extract/css';

export const githubIcon = style({
  width: '36px',
  height: '36px',
  display: 'block',
  transition: 'transform 0.3s ease-in-out',
  ':hover': {
    transform: 'scale(1.2)'
  }
});
