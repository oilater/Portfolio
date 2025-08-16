import { style } from '@vanilla-extract/css';

export const listRow = style({
  padding: '15px 15px 25px',
  selectors: {
    '&:last-child': {
      paddingBottom: '15px'
    }
  }
});
