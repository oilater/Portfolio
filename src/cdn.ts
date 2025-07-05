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
    
    // GIF
    INTERACTIVE_GRAPH: `${CDN_BASE_URL}/assets/gifs/interactive-graph.gif`,
    CREWING: `${CDN_BASE_URL}/assets/gifs/crewing.gif`,
    INTRO_ANIMATION: `${CDN_BASE_URL}/assets/gifs/intro-animation.gif`,
    
    // 기타 이미지
    PORTFOLIO_DETAIL: `${CDN_BASE_URL}/assets/images/portfolio-detail.jpg`,
    ARTICLE_MAP: `${CDN_BASE_URL}/assets/images/article-map.jpg`,
    COMPONENT_COMPOSITION: `${CDN_BASE_URL}/assets/images/component-composition.jpg`,
    INTRO_TIMELINE: `${CDN_BASE_URL}/assets/images/intro-timeline.jpg`,
    MOTION_LOGIC: `${CDN_BASE_URL}/assets/images/motion-logic.jpg`,
    TIMELINE_LOGIC: `${CDN_BASE_URL}/assets/images/timeline-logic.jpg`,
    RALLY_STRUCTURE: `${CDN_BASE_URL}/assets/images/rally-structure.jpg`,
  } as const;