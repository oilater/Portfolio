import { style } from '@vanilla-extract/css';

export const progressBarContainer = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '3px',
  background: 'rgba(0, 0, 0, 0.1)',
  zIndex: 9999
});

export const progressBar = style({
  height: '100%',
  background: '#fff',
  width: '0%'
});
