import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Portfolio from './pages/Portfolio';
import ArticlePage from './pages/ArticlePage';
import Layout from './pages/Layout';

gsap.registerPlugin(SplitText, ScrollTrigger);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Portfolio />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
