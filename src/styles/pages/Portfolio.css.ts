import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%'
});

export const wrapper = style({
  width: '100%',
  height: '100%',
  maxWidth: '960px',
  margin: '0 auto',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '60px'
});
