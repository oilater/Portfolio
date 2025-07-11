import { css } from "@emotion/react";
import { type ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, onClick, ...props }: ButtonProps) => {
  return <button 
      role="button"
      type="button"
      aria-label={`${children}으로 이동`} 
      css={button} 
      onClick={onClick}
      {...props}
      >
        {children}
      </button>;
};

const button = css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #C3C3C6;
  font-size: 1.2rem;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
`;