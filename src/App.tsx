import { lazy, Suspense, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function App() {
  const Portfolio = lazy(() => import('./pages/Portfolio'));

  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger); 
  }, [])
  
  return (
    <Suspense fallback={<Skeleton count={10} />}>
      <Portfolio />
  </Suspense>
  )
}

export default App;