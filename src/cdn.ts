const GITHUB_USERNAME = 'oilater';
const REPO_NAME = 'Portfolio-images';
const BRANCH = 'main';

export const CDN_BASE_URL = `https://cdn.jsdelivr.net/gh/${GITHUB_USERNAME}/${REPO_NAME}@${BRANCH}`;

export const CDN_IMAGES = {
    // 메인 썸네일
    PORTFOLIO: `${CDN_BASE_URL}/assets/images/portfolio.avif`,
    HOMET_FRIEND: `${CDN_BASE_URL}/assets/images/hometfriend.avif`,
    HOMET_LOGO: `${CDN_BASE_URL}/assets/images/hometfriend-logo.jpg`,
    RALLY_LOGIC: `${CDN_BASE_URL}/assets/images/rally-logic.jpg`,
    FIVA: `${CDN_BASE_URL}/assets/images/fiva_thumbnail.jpg`,
    RALLY_REFACTORING: `${CDN_BASE_URL}/assets/images/typescript-refactoring.jpg`,
    
    // GIF
    INTERACTIVE_GRAPH: `${CDN_BASE_URL}/assets/gifs/interactive-graph.gif`,
    CREWING: `${CDN_BASE_URL}/assets/gifs/crewing.gif`,
    INTRO_ANIMATION: `${CDN_BASE_URL}/assets/gifs/intro-animation.gif`,
    FIVA_AVATAR_MOVE: `${CDN_BASE_URL}/assets/gifs/avatar-move.gif`,
    
    // 기타 이미지
    PORTFOLIO_DETAIL: `${CDN_BASE_URL}/assets/images/portfolio-detail.jpg`,
    ARTICLE_MAP: `${CDN_BASE_URL}/assets/images/article-map.jpg`,
    COMPONENT_COMPOSITION: `${CDN_BASE_URL}/assets/images/component-composition.jpg`,
    INTRO_TIMELINE: `${CDN_BASE_URL}/assets/images/intro-timeline.jpg`,
    MOTION_LOGIC: `${CDN_BASE_URL}/assets/images/motion-logic.jpg`,
    TIMELINE_LOGIC: `${CDN_BASE_URL}/assets/images/timeline-logic.jpg`,
    RALLY_STRUCTURE: `${CDN_BASE_URL}/assets/images/rally-structure.jpg`,
    FIVA_AVATAR: `${CDN_BASE_URL}/assets/images/fiva_avatar.jpg`,
    FIVA_CHALLENGE_CALENDAR: `${CDN_BASE_URL}/assets/images/fiva-challenge-calendar.jpg`,
    FIVA_CHALLENGE_LIST: `${CDN_BASE_URL}/assets/images/fiva-challenge-list.jpg`,
    FIVA_CHALLENGE_POPUP: `${CDN_BASE_URL}/assets/images/fiva-challenge-popup.jpg`,
    FIVA_COIN_POPUP: `${CDN_BASE_URL}/assets/images/fiva-coin-popup.jpg`,
    FIVA_COLLABORATION: `${CDN_BASE_URL}/assets/images/fiva-collaboration.jpg`,
    FIVA_EXERCISE: `${CDN_BASE_URL}/assets/images/fiva-exercise.jpg`,
    FIVA_NO_CHALLENGE: `${CDN_BASE_URL}/assets/images/fiva-no-challenge.jpg`,
    FIVA_SKI_GAME: `${CDN_BASE_URL}/assets/images/fiva-ski-game.jpg`,
    FIVA_ARM_GAME: `${CDN_BASE_URL}/assets/images/fiva-arm-game.jpg`,
    FIVA_CODE_REVIEW: `${CDN_BASE_URL}/assets/images/code-review.jpg`,
    FIVA_CODE_REVIEW_COMMENT: `${CDN_BASE_URL}/assets/images/code-review-comment.jpg`,
    FIVA_SLACK_MESSAGE: `${CDN_BASE_URL}/assets/images/fiva-slack-message.jpg`,
    REACT_TRIP: `${CDN_BASE_URL}/assets/images/react-trip.jpg`,
  } as const;