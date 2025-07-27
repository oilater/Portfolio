import { CDN_IMAGES } from "../cdn";
import { LINK_URL } from "./url";

type ContentData = {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
    isInternal: boolean;
    tags: string[];
}

export const CONTENT_DATA: ContentData[] = [
    // Article
    {
        id: 'portfolio-performance',
        title: '포트폴리오 성능 개선하기',
        description: '웹 성능 분석을 바탕으로 포트폴리오 개선하기',
        image: CDN_IMAGES.PERFORMANCE,
        link: LINK_URL.PORTFOLIO_PERFORMANCE,
        isInternal: false,
        tags: ['Lighthouse', 'Performance Tab', 'WebPageTest'],
    },
    {
        id: 'rally-portfolio',
        title: '나만의 인터렉션 시스템 Rally',
        description: '토스 인터렉션 팀의 Rally의 구조를 참고해 직접 만들어 본 인터렉션 시스템',
        image: CDN_IMAGES.PORTFOLIO,
        link: LINK_URL.PORTFOLIO,
        isInternal: true,
        tags: ['React', 'TypeScript', 'Emotion', 'GSAP', 'Jotai'],
    },
    {
        id: 'interactive-graph',
        title: '바닐라 JS로 상태관리 해보기',
        description: "옵저버 패턴과 State 패턴을 사용해 데이터의 변화에 따라 관련된 UI 업데이트하기",
        image: CDN_IMAGES.INTERACTIVE_GRAPH,
        link: LINK_URL.INTERACTIVE_GRAPH,
        isInternal: false,
        tags: ['HTML5', 'CSS3', 'JavaScript'],
    },
    {
        id: 'crewing',
        title: 'SocketIO로 실시간 운동 친구 만들기',
        description: 'NextJS와 카카오 로그인, Node JS, SocketIO를 활용해 실시간 연동해보기',
        image: CDN_IMAGES.CREWING,
        link: LINK_URL.CREWING,
        isInternal: false,
        tags: ['NextJS', 'Firebase', 'SocketIO', 'SCSS'],
    },
    {
        id: 'homet-friend',
        title: 'SwiftUI로 만들어 배포한 홈트친구',
        description: '맨몸 운동의 동기부여를 위해 SwiftUI를 배워서 5일만에 배포한 앱',
        image: CDN_IMAGES.HOMET_FRIEND,
        link: LINK_URL.HOMET_FRIEND,
        isInternal: false,
        tags: ['SwiftUI', 'SwiftData'],
    },
    {
        id: 'react-trip',
        title: '첫 React 프로젝트 여행의 민족',
        description: '삼성 청년 SW 아카데미 1학기 최종 프로젝트로, React로 처음 만들어 본 여행의 민족',
        image: CDN_IMAGES.REACT_TRIP,
        link: LINK_URL.REACT_TRIP,
        isInternal: false,
        tags: ['React', 'Recoil'],
    },
]