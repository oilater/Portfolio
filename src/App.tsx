import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Portfolio from './pages/Portfolio';
import { useEffect } from 'react';
import ArticlePage from './pages/ArticlePage';

gsap.registerPlugin(SplitText, ScrollTrigger);

function App() {
  function onScroll() {}

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/article/:id" element={<ArticlePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
