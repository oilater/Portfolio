import { createContext, useContext, useState, cloneElement } from "react";

interface DropdownProps {
  label: string;
  onChange: (val: string) => void;
  children: React.ReactNode;
}

interface DropdownContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSelectItem: (val: string) => void;
}

const DropdownContext = createContext<DropdownContextType>({
  isOpen: false,
  setIsOpen: () => {},
  onSelectItem: () => {}
});

export function Dropdown({ label, onChange, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onSelectItem = (item: string) => {
    onChange(item);
    setIsOpen(false);
  };

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen, onSelectItem }}>
      <div>
        <div style={{ fontSize: '20px', fontWeight: '600', color: '#191f28' }}>
          {label}
        </div>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

function Trigger({ as }: { as: React.ReactElement<{ onClick?: () => void }> }) {
  const { setIsOpen } = useContext(DropdownContext);
  
  return cloneElement(as, { 
    ...as.props,
    onClick: () => setIsOpen(prev => !prev) 
  });
}

function Menu({ children }: { children: React.ReactNode }) {
  const { isOpen } = useContext(DropdownContext);

  return <div>{isOpen && children}</div>;
}

function Item({ children }: { children: string }) {
  const { onSelectItem } = useContext(DropdownContext);
  
  return (
    <div 
      onClick={() => onSelectItem(children)}
      style={{
        width: '280px',
        padding: '16px 20px',
        fontSize: '16px',
        color: '#191f28',
        cursor: 'pointer',
        borderBottom: '1px solid #f2f4f6',
        transition: 'all 0.2s ease',
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        minHeight: '48px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#f8fafc';
        e.currentTarget.style.color = '#3182f6';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.color = '#191f28';
      }}
    >
      {children}
    </div>
  );
}

Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;
Dropdown.Item = Item;