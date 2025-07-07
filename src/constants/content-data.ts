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
        title: 'Rally 만드는 김에 포트폴리오도 만들어보자',
        description: '토스 인터렉션 팀의 Rally의 구조를 참고해 직접 만들어 본 인터렉션 시스템과 포트폴리오, 페이지 성능 개선을 위해 고민한 과정을 소개합니다.',
        image: CDN_IMAGES.PORTFOLIO,
        link: LINK_URL.PORTFOLIO,
        isInternal: true,
    },
    {
        id: 'interactive-graph',
        title: '바닐라 JS로 상태관리 해보기',
        description: "'데이터가 바뀌면 관련된 모든 UI가 바뀌어야 한다'를 목표로 만들어 본 인터렉티브 그래프를 소개합니다.",
        image: CDN_IMAGES.INTERACTIVE_GRAPH,
        link: LINK_URL.INTERACTIVE_GRAPH,
        isInternal: false,
    },
    {
        id: 'crewing',
        title: 'SocketIO로 실시간 운동 친구 만들기',
        description: 'NextJS와 카카오 로그인, Node JS, SocketIO를 활용해 실시간 연동 기능을 구현한 과정을 공유합니다.',
        image: CDN_IMAGES.CREWING,
        link: LINK_URL.CREWING,
        isInternal: false,
    },
    {
        id: 'homet-friend',
        title: 'SwiftUI로 만들어 배포한 홈트친구',
        description: '맨몸 운동의 동기부여를 위해 SwiftUI를 학습해 배포한 1인 앱 홈트친구를 소개합니다.',
        image: CDN_IMAGES.HOMET_FRIEND,
        link: LINK_URL.HOMET_FRIEND,
        isInternal: false,
    },
    {
        id: 'react-trip',
        title: '첫 React 프로젝트 여행의 민족',
        description: '삼성 청년 SW 아카데미 1학기 최종 프로젝트로, React로 처음 만들어 본 여행의 민족을 소개합니다.',
        image: CDN_IMAGES.REACT_TRIP,
        link: LINK_URL.REACT_TRIP,
        isInternal: false,
    },
    {
        id: 'rally-refactoring',
        title: 'TypeScript로 Rally 개선하기',
        description: 'TypeScript 공식 문서를 기반으로 Rally 구현 과정에서 아쉬웠던 부분들을 하나씩 개선해봅니다.',
        image: CDN_IMAGES.RALLY_REFACTORING,
        link: LINK_URL.RALLY_REFACTORING,
        isInternal: true,
    },
]