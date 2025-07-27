import { css } from "@emotion/react";
import { Colors } from "../theme/theme";

type TagProps = {
    text: string;
}

export default function Tag({ text }: TagProps) {
    const tagColor = getTagColor(text);

    return (
        <div css={tag}>
            <span style={{ color: tagColor }}>{text}</span>
        </div>
    )   
}

const getTagColor = (text: string) => {
    switch (text) {
        case 'React':
            return Colors.blue300;
        case 'TypeScript':
            return Colors.blue500;
        case 'HTML5':
            return Colors.red300;
        case 'CSS3':
            return Colors.orange500;
        case 'JavaScript':
            return Colors.teal500;
        case 'NextJS':
            return Colors.grey700;
        case 'Emotion':
            return Colors.pink400;
        case 'GSAP':
            return Colors.green300;
        case 'Jotai':
            return Colors.purple300;
        case 'SCSS':
            return Colors.green500;
        case 'Firebase':
            return Colors.red400;
        case 'SocketIO':
            return Colors.purple400;
        case 'SwiftUI':
            return Colors.blue900;
        case 'SwiftData':
            return Colors.blue800;
        case 'Recoil':
            return Colors.purple400;
        case 'Lighthouse':
            return Colors.red300;
        case 'Performance Tab':
            return Colors.orange500;
        case 'WebPageTest':
            return Colors.teal500;
        default:
            return Colors.grey500;
    }
}

const tag = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    padding: 3px 6px;
    border-radius: 16px;
    font-size: 12.5px;
    font-weight: 500;
    background-color: ${Colors.grey100};
`;