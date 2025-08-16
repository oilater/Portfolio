import { Colors } from "../theme/theme";
import { tag } from "../styles/components/Tag.css";

type TagProps = {
    text: string;
}

export default function Tag({ text }: TagProps) {
    const tagColor = getTagColor(text);

    return (
        <div className={tag}>
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