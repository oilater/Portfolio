import { icon } from "../styles/ArrowDownIcon.css";

export function ArrowDownIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 48 48" 
      className={icon}
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