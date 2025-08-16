import { useEffect } from 'react';
import { HomeIcon } from './HomeIcon.tsx';
import { GithubIcon } from './GithubIcon.tsx';
import { VelogIcon } from './VelogIcon.tsx';
import { header, nav, innerNav } from '../styles/Header.css';

type HeaderProps = {
    className: string;
    onVelog: () => void;
    onGithub: () => void;
    onHome: () => void;
};

export default function Header({ onVelog, onGithub, onHome, className }: HeaderProps) {

  const onTop = () => {
    if (window.scrollY > 0) {
      document.body.classList.add('active-border');
    } else {
      document.body.classList.remove('active-border');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onTop, { passive: true });
    onTop();

    return () => window.removeEventListener('scroll', onTop);
  }, []);

    return (
    <header className={`${className} ${header}`}>
      <nav className={nav}>
        <div className={innerNav}>
          <button type="button" onClick={onHome} aria-label="홈으로 이동">
            <HomeIcon />
          </button>
          <button type="button" onClick={onVelog} aria-label="Velog로 이동">
            <VelogIcon />
          </button>
          <button type="button" onClick={onGithub} aria-label="Github로 이동">
            <GithubIcon />
          </button>
        </div>
      </nav>
    </header>
    );
};