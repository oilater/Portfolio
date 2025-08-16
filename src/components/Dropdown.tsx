import { createContext, useContext, useState, cloneElement } from "react";
import { dropdownLabel, dropdownItem } from "../styles/components/Dropdown.css";

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
        <div className={dropdownLabel}>
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
      className={dropdownItem}
    >
      {children}
    </div>
  );
}

Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;
Dropdown.Item = Item;