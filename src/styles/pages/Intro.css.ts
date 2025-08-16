import { style } from '@vanilla-extract/css';
import { Colors } from '../../theme/theme';
import { mediaQueries } from '../common/breakpoints.css';

export const introWrapper = style({
  width: '100%',
  height: '20vh',
  marginTop: '5rem'
});

export const introTitleSection = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export const baseTitle = style({
  position: 'absolute',
  maxWidth: '1000px',
  width: '100vw',
  textAlign: 'center',
  whiteSpace: 'pre-line',
  wordBreak: 'break-all',
  lineHeight: '1.3',
  fontSize: '48px',
  '@media': {
    '(max-width: 480px)': {
      fontSize: '1.2rem',
      width: '95vw',
      maxWidth: '350px'
    },
    [mediaQueries.mobile]: {
      fontSize: '2.5rem',
      width: '90vw',
      maxWidth: '500px'
    },
    [mediaQueries.tablet]: {
      fontSize: '2.5rem',
      width: '85vw',
      maxWidth: '600px'
    }
  }
});

export const titleOrigin = style({
  color: Colors.grey400
});

export const title = style({
  color: '#292929',
  willChange: 'opacity'
});

export const subTitle = style({
  color: Colors.blue500
});
