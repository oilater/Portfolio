import { style } from '@vanilla-extract/css';
import { Colors } from '../../theme/theme';

export const wrapper = style({
  width: '100%',
  height: '100%',
  paddingBottom: '6rem',
  position: 'relative',
  overflow: 'hidden'
});

export const contentSection = style({
  position: 'relative',
  width: '100%',
  height: '100%'
});

export const mainDescription = style({
  fontSize: '1.2rem',
  fontWeight: '500',
  color: '#7E7E87',
  padding: '0 16px',
  lineHeight: '1.65',
  marginBottom: '2.5rem'
});

export const hr = style({
  border: '0',
  height: '2px',
  background: 'rgba(222, 222, 255, 0.19)',
  margin: '0 16px'
});

export const educationItem = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '16px',
  padding: '0 16px',
  marginBottom: '3rem'
});

export const educationContent = style({
  flex: '1'
});

export const educationHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '4px'
});

export const educationPeriod = style({
  position: 'relative',
  fontSize: '18px',
  fontWeight: '500',
  color: Colors.grey500,
  width: '130px',
  textAlign: 'right',
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
});

export const educationTitle = style({
  fontSize: '20px',
  fontWeight: '600',
  color: '#333'
});

export const educationDescription = style({
  marginTop: '10px',
  fontSize: '16px',
  lineHeight: '1.65',
  color: Colors.grey500
});

// dot과 active-dot을 위한 별도 스타일
export const dot = style({
  display: 'inline-block',
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  background: Colors.grey200,
  transition: 'background 0.3s',
  marginRight: '6px'
});

export const activeDot = style({
  background: 'dodgerblue'
});
