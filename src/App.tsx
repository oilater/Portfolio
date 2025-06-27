import { lazy, Suspense, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

function App() {
  const Landing = lazy(() => import('./pages/Landing'));

  useEffect(() => {
    gsap.registerPlugin(SplitText);
  }, [])
  
  return (
    <Suspense fallback={<Skeleton count={10} />}>
      <Landing />
  </Suspense>
  )
}

export default App;