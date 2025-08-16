import { Content } from "./Content";
import Intro from "./Intro";
import Introduce from "./Introduce";
import { Work } from "./Work";
import { Education } from "./Education";
import { Outro } from "./Outro";
import { container, wrapper } from "../styles/pages/Portfolio.css";

export default function Portfolio() {
  return (
    <div className={container}>
      <main className={wrapper}>
          <Intro />
          <Introduce />
          <Work />
          <Content />
          <Education />
          <Outro />
      </main>
    </div>
  );
}