import { css } from "@emotion/react";
import { forwardRef, type ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ ...props }, ref) => {
  return <button role="button" aria-label={`${props.children}으로 이동`} css={button} ref={ref} {...props}/>;
});

export default Button;

const button = css`
  color: white;
  font-size: 1.3rem;
  font-weight: 500;
  background: none;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;