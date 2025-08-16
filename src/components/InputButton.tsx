import { inputButton, inputButtonPlaceholder, inputButtonIcon } from "../styles/components/InputButton.css";

interface InputButtonProps {
  value: string;
  onClick?: () => void;
}

export function InputButton({ value, onClick }: InputButtonProps) {
  return (
    <button
      onClick={onClick}
      className={inputButton}
    >
      <span className={value ? '' : inputButtonPlaceholder}>{value || '기술을 선택하세요'}</span>
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none"
        className={inputButtonIcon}
      >
        <path 
          d="M7 10l5 5 5-5" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}