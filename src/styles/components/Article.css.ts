import { style } from '@vanilla-extract/css';
import { Colors } from '../../theme/theme';
import { mediaQueries } from '../common/breakpoints.css';

export const articleRoot = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  color: Colors.grey800
});

export const articleHeader = style({
  width: '100%',
  position: 'relative',
  height: 'calc(-100px + 100vh)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '120px',
  color: '#fff'
});

export const articleHeaderTitleSection = style({
  position: 'absolute',
  bottom: '20%',
  textAlign: 'center',
  zIndex: 2
});

export const articleHeaderTitle = style({
  fontSize: 'calc(1rem + 2vw)',
  fontWeight: '600',
  lineHeight: '1.4',
  marginBottom: '20px'
});

export const articleHeaderDate = style({
  fontSize: '18px',
  fontWeight: '400'
});

export const imageContainer = style({
  position: 'relative',
  width: '100%',
  height: '100%'
});

export const articleHeaderImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover'
});

export const imageGradient = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '80%',
  background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.7) 60%, rgba(0, 0, 0, 0.8) 100%)',
  pointerEvents: 'none',
  zIndex: 1
});

export const articleContent = style({
  margin: '0 auto',
  width: '100%',
  maxWidth: '800px',
  height: '100%',
  fontSize: '20px',
  whiteSpace: 'pre-wrap',
  lineHeight: '1.68',
  marginBottom: '10rem',
  '@media': {
    [mediaQueries.mobile]: {
      padding: '0 16px',
      fontSize: '18px'
    }
  }
});

export const scrollDownButton = style({
  position: 'absolute',
  bottom: '40px',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.15)',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease-out',
  zIndex: 3,
  ':hover': {
    background: 'rgba(255, 255, 255, 0.2)',
    transform: 'scale(1.05)'
  }
});
