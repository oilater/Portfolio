import { style } from '@vanilla-extract/css';
import { Colors } from '../../theme/theme';
import { mediaQueries } from '../common/breakpoints.css';

export const wideCard = style({
  display: 'flex',
  width: '100%',
  height: 'auto',
  background: 'inherit',
  color: Colors.grey700,
  transition: 'background 0.2s ease',
  cursor: 'pointer',
  overflow: 'hidden',
  '@media': {
    [mediaQueries.mobile]: {
      flexDirection: 'column',
      height: 'auto',
      minHeight: '400px'
    }
  }
});

export const cardImageWrapper = style({
  flex: '0 0 60%',
  aspectRatio: '7/5',
  borderRadius: '16px',
  overflow: 'hidden',
  '@media': {
    [mediaQueries.mobile]: {
      width: '100%',
      aspectRatio: '7/5',
      position: 'relative',
      borderRadius: '16px'
    }
  }
});

export const cardImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.2s ease-out',
  transform: 'translateZ(0)',
  ':hover': {
    transform: 'scale(1.05)'
  },
  '@media': {
    [mediaQueries.mobile]: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    }
  }
});

export const cardContent = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '20px',
  padding: '40px',
  boxSizing: 'border-box',
  '@media': {
    [mediaQueries.mobile]: {
      justifyContent: 'flex-start',
      padding: '24px',
      gap: '16px'
    }
  }
});

export const categoryText = style({
  fontSize: '20px',
  fontWeight: '500',
  color: Colors.grey700,
  margin: 0,
  lineHeight: '1.2',
  transition: 'color 0.2s ease',
  '@media': {
    [mediaQueries.mobile]: {
      fontSize: '18px'
    }
  }
});

export const cardTitle = style({
  fontSize: '32px',
  fontWeight: '600',
  color: Colors.grey700,
  margin: 0,
  lineHeight: '1.3',
  transition: 'color 0.2s ease',
  '@media': {
    [mediaQueries.mobile]: {
      fontSize: '1.5rem'
    }
  }
});

export const cardDescription = style({
  fontSize: '1.1rem',
  fontWeight: '400',
  color: Colors.grey700,
  margin: 0,
  lineHeight: '1.6',
  transition: 'color 0.2s ease',
  '@media': {
    [mediaQueries.mobile]: {
      fontSize: '1rem'
    }
  }
});

export const categoryTextHover = style({
  selectors: {
    [`${wideCard}:hover &`]: {
      color: Colors.blue500
    }
  }
});

export const cardTitleHover = style({
  selectors: {
    [`${wideCard}:hover &`]: {
      color: Colors.blue500
    }
  }
});

export const cardDescriptionHover = style({
  selectors: {
    [`${wideCard}:hover &`]: {
      color: Colors.blue500
    }
  }
});
