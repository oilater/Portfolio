import { useState } from "react";
import { useTech } from "../hooks/use-tech";
import { Select } from "./Select";
import { InputButton } from "./InputButton";

export default function TechSelect() {
  const { data: techs } = useTech();
  const [ selected, change ] = useState('');

  return (
    <Select 
      label="Techs"
      trigger={<InputButton value={selected} />}
      onChange={change}
      options={techs} 
    />
  );
}