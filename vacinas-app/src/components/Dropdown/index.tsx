import { DropdownContainer, DropdownField, DropdownLabel } from "./style";

type Props = {
    name: string;
    label: string;
    options: Array<{
        label: string;
        value: string | number;
    }>
    value?: string;
    onChange?: (value:string) => void; 
}

function Dropdown({ name, label, options, value, onChange }: Props) {
    return (
        <DropdownContainer htmlFor={name}>
            <DropdownLabel>{label}</DropdownLabel>
            <DropdownField id={name} name={name} value={value} onChange={(event) => onChange && onChange(event.target.value)}>
                {options.map(option => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </DropdownField>
        </DropdownContainer>
    )
}

export default Dropdown;