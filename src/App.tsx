import { lazy, Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';

function App() {
  const Landing = lazy(() => import('./pages/Landing'));
  
  return (
    <Suspense fallback={<Skeleton count={10} />}>
      <Landing />
  </Suspense>
  )
}

export default App;