import { style } from '@vanilla-extract/css';
import { Colors } from '../theme/theme';

export const header = style({
  zIndex: 100,
  transform: 'translateZ(0)',
  backgroundColor: '#fff',
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '60px',
  padding: '10px 10px 10px 0',
  transition: 'opacity 0.3s ease-in-out',
  selectors: {
    'body.active-border &': {
      borderBottom: `1px solid ${Colors.grey300}`
    }
  }
});

export const nav = style({
  width: '100%',
  maxWidth: '896px'
});

export const innerNav = style({
  width: '92%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '13px'
});
