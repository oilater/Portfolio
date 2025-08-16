import { style } from '@vanilla-extract/css';
import { Colors } from '../theme/theme';

export const dropdownLabel = style({
  fontSize: '20px',
  fontWeight: '600',
  color: Colors.grey800
});

export const dropdownItem = style({
  width: '280px',
  padding: '16px 20px',
  fontSize: '16px',
  color: Colors.grey800,
  cursor: 'pointer',
  borderBottom: `1px solid ${Colors.grey100}`,
  transition: 'all 0.2s ease',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  minHeight: '48px',
  ':hover': {
    backgroundColor: Colors.grey50,
    color: Colors.blue500
  }
});
