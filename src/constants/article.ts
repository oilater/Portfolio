import hometFriendImage from "../assets/images/hometfriend.jpg";
import portfolio from "../assets/images/portfolio.jpg";
import interactiveGraph from "../assets/gifs/interactive-graph.gif";
import crewing from "../assets/gifs/crewing.gif";
import hometFriendLogo from "../assets/images/hometfriend-logo.jpg";
import portfolioDetail from "../assets/images/portfolio-detail.png";

export const ARTICLE_KEYS = {
  PORTFOLIO: "rally-portfolio",
} as const;

export const ARTICLE_IMAGES = {
  HOMET_FRIEND: hometFriendImage,
  HOMET_LOGO: hometFriendLogo,
  PORTFOLIO: portfolio,
  PORTFOLIO_DETAIL: portfolioDetail,
  INTERACTIVE_GRAPH: interactiveGraph,
  CREWING: crewing,
} as const;