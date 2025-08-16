import { style } from '@vanilla-extract/css';
import { Colors } from '../../theme/theme';

export const rootStyle = style({
  width: '100%',
  padding: '20px 16px 8px'
});

export const paragraphStyle = style({
  display: 'flex',
  justifyContent: 'flex-start',
  width: '100%',
  height: '100%',
  fontSize: '2.5rem',
  fontWeight: '700',
  color: Colors.grey700
});
