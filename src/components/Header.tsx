import { css } from '@emotion/react';
import { GithubIcon } from './GithubIcon';
import { VelogIcon } from './VelogIcon';

type HeaderProps = {
    onVelog: () => void;
    onGithub: () => void;
    className: string;
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
  gap: 10px;
  width: 100%;
  max-width: 1140px;
  align-items: center;
  padding-top: 20px;
  padding-right: 20px;
`;