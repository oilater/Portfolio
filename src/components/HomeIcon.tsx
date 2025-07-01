import { css } from '@emotion/react';

export function HomeIcon() {
  return (
    <div css={iconWrapper}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        css={icon}
      >
        <path d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20Z" />
      </svg>
    </div>
  );
}

const iconWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: #C3C3C6;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.2);
  }
`;

const icon = css`
  width: 20px;
  height: 20px;
  color: #121417;
`;