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
        id: 'medical-charts',
        title: 'Recharts로 데이터 표현하기',
        description: '백만 년만에 공공 API 활용해보기 📊 클릭 시 배포 사이트로 이동합니다',
        image: CDN_IMAGES.MEDICAL_CHARTS,
        link: LINK_URL.MEDICAL_CHARTS,
        isInternal: false,
        tags: ['React', 'Tanstack Query', 'Recharts', 'Emotion'],
    },
    {
        id: 'portfolio-performance',
        title: '포트폴리오 성능 개선하기',
        description: '웹 성능 분석을 통해 LCP와 접근성 개선하기',
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
        description: "useState 없이 Observer, State 패턴을 사용해 데이터가 변하면 관련된 UI를 업데이트 해보자",
        image: CDN_IMAGES.INTERACTIVE_GRAPH,
        link: LINK_URL.INTERACTIVE_GRAPH,
        isInternal: false,
        tags: ['HTML5', 'CSS3', 'JavaScript'],
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