import { css } from "@emotion/react";
import { forwardRef, type ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, onClick, ...props }, ref) => {
  return <button 
      role="button" 
      aria-label={`${children}으로 이동`} 
      css={button} 
      onClick={onClick}
      ref={ref} 
      {...props}
      >
        {children}
      </button>;
});

const button = css`
  color: white;
  font-size: 1.3rem;
  font-weight: 500;
  background: none;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;