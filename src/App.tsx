import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Portfolio from './pages/Portfolio';
import { useEffect } from 'react';

gsap.registerPlugin(SplitText, ScrollTrigger); 

function App() {
  const onScroll = () => {};

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [])

  return (
      <Portfolio />
  );
}

export default App;