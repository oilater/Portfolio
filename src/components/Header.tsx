import { css } from '@emotion/react';
import { GithubIcon } from './GithubIcon';
import { VelogIcon } from './VelogIcon';
import { useEffect } from 'react';
import { HomeIcon } from './HomeIcon';

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
    <header className={className} css={header}>
      <nav css={nav}>
        <div css={innerNav}>
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

const header = css`
  z-index: 100;
  transform: translateZ(0);
  background-color: rgba(18, 20, 23, 0.95);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 10px 10px 10px 0;
  transition: opacity 0.3s ease-in-out;
  
  body.active-border & {
    border-bottom: 1px solid #3c3c47;
  }
`;

const nav = css`
  width: 100%; 
  max-width: 896px;
`;

const innerNav = css`
  width: 92%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;