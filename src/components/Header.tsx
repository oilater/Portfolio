import { css } from '@emotion/react';
import { GithubIcon } from './GithubIcon';
import { VelogIcon } from './VelogIcon';

type HeaderProps = {
    className: string;
    onVelog: () => void;
    onGithub: () => void;
};

export default function Header({ onVelog, onGithub, className }: HeaderProps) {
    return (
    <header className={className} css={header}>
        <button type="button" onClick={onVelog} aria-label="Velog로 이동">
        <VelogIcon />
        </button>
        <button type="button" onClick={onGithub} aria-label="Github로 이동">
        <GithubIcon />
        </button>
    </header>
    );
};

const header = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 960px;
  padding: 20px 20px 10px 0;
  transition: opacity 0.3s ease-in-out;
`;