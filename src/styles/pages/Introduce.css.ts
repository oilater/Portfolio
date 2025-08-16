import { style } from '@vanilla-extract/css';
import { Colors } from '../../theme/theme';

export const introduceWrapper = style({
  width: '100%',
  height: 'auto',
  paddingBottom: '5rem',
  marginTop: '1rem'
});

export const infoSection = style({
  borderRadius: '16px',
  padding: '10px',
  margin: '0 16px',
  marginTop: '3rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '1rem',
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
      padding: '8px',
      margin: '0 12px',
      marginTop: '1.5rem'
    },
    '(min-width: 769px)': {
      gap: '1.5rem'
    }
  }
});

export const mainDescription = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '1.3rem',
  fontWeight: '500',
  color: Colors.grey500,
  padding: '10px 16px',
  lineHeight: '1.4'
});
