import { Dropdown } from "./Dropdown";

interface SelectProps {
    label: string;
    trigger: React.ReactElement<{onClick?: () => void}>;
    options: string[];
    onChange: (value: string) => void;
}

export function Select({ label, trigger, options, onChange }: SelectProps) {
  return (
    <Dropdown label={label} onChange={onChange}>
      <Dropdown.Trigger as={trigger} />
      <Dropdown.Menu>
        {options.map((option) => (
          <Dropdown.Item key={option}>{option}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}