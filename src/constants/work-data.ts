import { CDN_IMAGES } from "../cdn";
import { LINK_URL } from "./url";

type WorkData = {
    id: string;
    subTitle: string;
    title: string;
    description: string;
    image: string;
    link: string;
    isInternal: boolean;
}

export const WORK_DATA: WorkData[] = [
    {
        id: 'fiva',
        subTitle: '메타버스 AI 운동 앱',
        title: 'Unity로 개발한 FIVA 이야기',
        description: '구스랩스에서 8개월 간 개발한 FIVA를 소개합니다.',
        image: CDN_IMAGES.FIVA,
        link: LINK_URL.FIVA,
        isInternal: true,
    },
]