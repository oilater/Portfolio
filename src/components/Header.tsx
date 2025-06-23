import { css } from '@emotion/react';
import { GithubIcon } from './GithubIcon';
import { VelogIcon } from './VelogIcon';

type HeaderProps = {
    onVelog: () => void;
    onGithub: () => void;
    className: string;
};

export function Header({ onVelog, onGithub, className }: HeaderProps) {
    return (
    <header className={className} css={header}>
        <button type="button" onClick={onVelog}>
        <VelogIcon />
        </button>
        <button type="button" onClick={onGithub}>
        <GithubIcon />
        </button>
    </header>
    );
};

const header = css`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  top: 0;
  width: 100%;
  max-width: 1140px;
  height: 60px;
  align-items: center;
  padding-top: 50px;
  padding-right: 20px;
  gap: 10px;
`;