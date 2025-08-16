import { style, globalStyle } from '@vanilla-extract/css';

export const wrapper = style({
  width: '100%',
  height: '100%',
  paddingBottom: '6rem'
});

export const contentSection = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '54px 0',
  padding: '0 16px',
  willChange: 'transform, opacity'
});

// 자식 요소들에 대한 스타일을 globalStyle로 정의
globalStyle(`${contentSection} > *`, {
  '@media': {
    '(min-width: 769px)': {
      flexBasis: 'calc((100% - 40px) / 3)',
      maxWidth: 'calc((100% - 40px) / 3)',
      height: '480px',
      marginRight: '20px'
    },
    '(max-width: 768px)': {
      width: '100%',
      marginRight: '0'
    }
  }
});

// 3n번째 요소의 margin-right 제거
globalStyle(`${contentSection} > *:nth-of-type(3n)`, {
  '@media': {
    '(min-width: 769px)': {
      marginRight: '0'
    }
  }
});

export const mainDescription = style({
  fontSize: '1.2rem',
  fontWeight: '500',
  color: '#7E7E87',
  padding: '0 16px',
  lineHeight: '1.65',
  marginBottom: '3.5rem'
});

export const hr = style({
  border: '0',
  height: '2px',
  background: 'rgba(222, 222, 255, 0.19)',
  margin: '0 16px'
});
