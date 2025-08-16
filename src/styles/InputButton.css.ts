import { style } from '@vanilla-extract/css';
import { Colors } from '../theme/theme';

export const inputButton = style({
  marginTop: '10px',
  backgroundColor: '#ffffff',
  width: '280px',
  height: '56px',
  padding: '0 20px',
  borderRadius: '8px',
  color: Colors.grey800,
  border: `1px solid ${Colors.grey200}`,
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: '500',
  textAlign: 'left',
  transition: 'all 0.2s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  ':hover': {
    borderColor: Colors.blue500,
    boxShadow: '0 2px 8px rgba(49, 130, 246, 0.15)'
  }
});

export const inputButtonPlaceholder = style({
  color: Colors.grey500
});

export const inputButtonIcon = style({
  color: Colors.grey500
});
