import { style } from '@vanilla-extract/css';
import { Colors } from '../theme/theme';

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
    '(max-width: 768px)': {
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

// 기존 스타일들도 유지
export const section = style({
  marginBottom: '4rem'
});

export const sectionTitle = style({
  margin: '36px 0 36px',
  fontSize: '25px',
  marginBottom: '20px',
  color: Colors.grey800
});

export const highlightText = style({
  color: Colors.grey800,
  fontWeight: 'bold',
  borderRadius: '2px',
  letterSpacing: '0em'
});

export const figure = style({
  margin: '60px 0 20px 0',
  textAlign: 'center'
});

export const image = style({
  width: '100%',
  height: '500px',
  borderRadius: '16px'
});

export const avatarImage = style({
  height: '600px',
  objectFit: 'contain'
});

export const avatarMoveImage = style({
  height: '700px',
  objectFit: 'contain'
});

export const gameImage = style({
  objectFit: 'contain'
});

export const codeReviewImage = style({
  height: '300px',
  objectFit: 'contain'
});

export const commentImage = style({
  height: '200px',
  objectFit: 'contain'
});

export const slackImage = style({
  height: '700px',
  objectFit: 'contain'
});

// PortfolioArticle용 새로운 스타일들
export const introImage = style({
  height: '600px',
  objectFit: 'contain'
});

export const timelineImage = style({
  height: '800px',
  objectFit: 'contain'
});

export const articleMapImage = style({
  height: 'auto',
  objectFit: 'contain'
});

// PortfolioArticle용 기본 이미지 스타일 (높이 자동)
export const portfolioImage = style({
  width: '100%',
  borderRadius: '16px'
});

export const captionStyle = style({
  fontSize: '13px',
  color: Colors.grey800,
  lineHeight: '1.2',
  margin: '0',
  marginTop: '6px',
  marginBottom: '6rem'
});

export const containerImage = style({
  height: 'auto',
  objectFit: 'cover'
});

export const imagesSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

// 스타일 조합
export const avatarImageCombined = style([image, avatarImage]);
export const avatarMoveImageCombined = style([image, avatarMoveImage]);
export const gameImageCombined = style([image, gameImage]);
export const codeReviewImageCombined = style([image, codeReviewImage]);
export const commentImageCombined = style([image, commentImage]);
export const slackImageCombined = style([image, slackImage]);
export const containerImageCombined = style([image, containerImage]);

// PortfolioArticle용 조합 스타일 (portfolioImage 사용)
export const introImageCombined = style([portfolioImage, introImage]);
export const timelineImageCombined = style([portfolioImage, timelineImage]);
export const articleMapImageCombined = style([portfolioImage, articleMapImage]);
