import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { introTimeline } from "../timelines/IntroTimeline.ts";
import {
  introWrapper,
  introTitleSection,
  baseTitle,
  titleOrigin,
  title,
  subTitle
} from "../styles/pages/Intro.css";

export default function Intro() {
  const introScope = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    introTimeline().play();
  }, { scope: introScope });

  return (
    <div ref={introScope} className={introWrapper}>
      <div className={`introTitleSection ${introTitleSection}`}>
        <h1 className={`introTitle ${baseTitle} ${titleOrigin}`}>
          안녕하세요,<br />
          프론트엔드 개발자<br/> 
          <span className="subTitle">김성현</span>입니다.
        </h1>
        <h1 className={`introTitleFill ${baseTitle} ${title}`}>
          안녕하세요,<br />
          프론트엔드 개발자<br/> 
          <span className={`subTitle ${subTitle}`}>김성현</span>입니다.
        </h1>
      </div>
    </div>
  );
}