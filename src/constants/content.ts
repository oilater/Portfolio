import { ARTICLE_IMAGES } from "./article";
import { CREWING_URL, HOMET_FRIEND_URL, INTERACTIVE_GRAPH_URL } from "./url";

type ContentData = {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
    isInternal: boolean;
}

export const CONTENT_DATA: ContentData[] = [
    {
        id: 'rally-portfolio',
        title: 'Rally 만드는 김에 포트폴리오도 만들어보자',
        description: '토스 인터렉션 팀의 Rally의 구조를 참고해 직접 만들어 본 인터렉션 시스템과 포트폴리오, 페이지 성능 개선을 위해 고민한 과정을 소개합니다.',
        image: ARTICLE_IMAGES.PORTFOLIO,
        link: '/article/rally-portfolio',
        isInternal: true,
    },
    {
        id: 'interactive-graph',
        title: '바닐라 JS로 상태관리 해보기',
        description: "'데이터가 바뀌면 관련된 모든 UI가 바뀌어야 한다'를 목표로 만들어 본 인터렉티브 그래프를 소개합니다.",
        image: ARTICLE_IMAGES.INTERACTIVE_GRAPH,
        link: INTERACTIVE_GRAPH_URL,
        isInternal: false,
    },
    {
        id: 'crewing',
        title: 'SocketIO를 활용해 실시간 운동 친구 만들기',
        description: 'NextJS와 카카오 로그인, SocketIO를 활용해 실시간으로 운동 친구를 만들어 본 경험을 공유합니다.',
        image: ARTICLE_IMAGES.CREWING,
        link: CREWING_URL,
        isInternal: false,
    },
    {
        id: 'homet-friend',
        title: 'SwiftUI로 만들어 배포한 홈트친구',
        description: '맨몸 운동의 동기부여를 위해 SwiftUI를 학습해 배포한 1인 앱 홈트친구를 소개합니다.',
        image: ARTICLE_IMAGES.HOMET_FRIEND,
        link: HOMET_FRIEND_URL,
        isInternal: false,
    }
]