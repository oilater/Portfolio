import { style } from '@vanilla-extract/css';
import { Colors } from '../../theme/theme';

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

export const imageContainer = style({
  display: 'flex',
  gap: '20px',
  justifyContent: 'center',
  alignItems: 'flex-start'
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
