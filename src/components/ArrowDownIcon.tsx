import { css } from "@emotion/react";

export function ArrowDownIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 48 48" 
      css={icon}
    >
      <path 
        d="M2 6l10 10 10-10" 
        stroke="currentColor" 
        strokeWidth="4" 
        transform="scale(2)"
      />
    </svg>
  );
};

const icon = css`
  width: 14px;
  height: 14px;
  color: #E4E4E5;
`;