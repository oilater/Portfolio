import { CDN_IMAGES } from "../cdn";
import { LINK_URL } from "./url";

type ContentData = {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
    isInternal: boolean;
}

export const CONTENT_DATA: ContentData[] = [
    // Article
    {
        id: 'rally-portfolio',
        title: '나만의 인터렉션 시스템 Rally 만들기',
        description: '토스 인터렉션 팀의 Rally의 구조를 참고해 직접 만들어 본 인터렉션 시스템',
        image: CDN_IMAGES.PORTFOLIO,
        link: LINK_URL.PORTFOLIO,
        isInternal: true,
    },
    {
        id: 'interactive-graph',
        title: '바닐라 JS로 상태관리 해보기',
        description: "목표: 데이터가 바뀌면 관련된 모든 UI가 바뀌어야 한다. 근데 이제 useState를 곁들이지 않고",
        image: CDN_IMAGES.INTERACTIVE_GRAPH,
        link: LINK_URL.INTERACTIVE_GRAPH,
        isInternal: false,
    },
    {
        id: 'crewing',
        title: 'SocketIO로 실시간 운동 친구 만들기',
        description: 'NextJS와 카카오 로그인, Node JS, SocketIO를 활용해 실시간 연동해보기',
        image: CDN_IMAGES.CREWING,
        link: LINK_URL.CREWING,
        isInternal: false,
    },
    {
        id: 'homet-friend',
        title: 'SwiftUI로 만들어 배포한 홈트친구',
        description: '맨몸 운동의 동기부여를 위해 SwiftUI를 배워서 5일만에 배포한 앱',
        image: CDN_IMAGES.HOMET_FRIEND,
        link: LINK_URL.HOMET_FRIEND,
        isInternal: false,
    },
    {
        id: 'react-trip',
        title: '첫 React 프로젝트 여행의 민족',
        description: '삼성 청년 SW 아카데미 1학기 최종 프로젝트로, React로 처음 만들어 본 여행의 민족',
        image: CDN_IMAGES.REACT_TRIP,
        link: LINK_URL.REACT_TRIP,
        isInternal: false,
    },
    {
        id: 'rally-refactoring',
        title: 'TypeScript로 Rally 개선하기',
        description: 'Rally 구현 과정에서 아쉬웠던 부분들을 하나씩 개선하기',
        image: CDN_IMAGES.RALLY_REFACTORING,
        link: LINK_URL.RALLY_REFACTORING,
        isInternal: true,
    },
]