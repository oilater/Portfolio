import { useRef } from "react";
import { css } from "@emotion/react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useAssemble } from "../hooks/useAssemble";
import { useSlideUp } from "../hooks/useSlideUp";

export default function Landing() {
  const titleRef = useRef<HTMLHeadingElement>(null!);
  // Custom Hooks
  const { assemble } = useAssemble();
  const { slideUp } = useSlideUp();

  // Animation Timeline
  useGSAP(() => {
    const tl = gsap.timeline();
    const assembleTween = assemble(titleRef, { split: 'words', duration: 1.5, ease: 'expo.inOut' });
    const slideUpTween = slideUp(titleRef, { split: 'lines', duration: 1, ease: 'power2.out' });

    assembleTween && tl.add(assembleTween);
    slideUpTween && tl.add(slideUpTween);
    tl.play();
  }, {
    dependencies: [assemble, slideUp],
  });
  
  return (
    <div css={container}>
      {/* Title */}
      <h1 ref={titleRef} css={title}>
        Hello! I'm a <br /> 
        <span css={subTitle}>Frontend </span>Engineer
      </h1>      

      {/* Subtitle */}
      
    </div>
  );
};

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: black;
  text-align: center;
`;

const title = css`
  font-size: calc(2rem + 2vw);
  color: white;
`;

const subTitle = css`
  color: dodgerblue;
`;