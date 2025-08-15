interface InputButtonProps {
  value: string;
  onClick?: () => void;
}

export function InputButton({ value, onClick }: InputButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        marginTop: '10px',
        backgroundColor: '#ffffff',
        width: '280px',
        height: '56px',
        padding: '0 20px',
        borderRadius: '8px',
        color: value ? '#191f28' : '#8b95a1',
        border: '1px solid #e5e8eb',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '500',
        textAlign: 'left',
        transition: 'all 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#3182f6';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(49, 130, 246, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#e5e8eb';
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
      }}
    >
      <span>{value || '기술을 선택하세요'}</span>
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none"
        style={{ color: '#8b95a1' }}
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