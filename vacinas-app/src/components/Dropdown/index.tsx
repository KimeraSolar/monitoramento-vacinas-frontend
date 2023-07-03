import { DropdownContainer, DropdownField, DropdownLabel } from "./style";

type Props = {
    name: string;
    label: string;
    options: Array<{
        label: string;
        value: string | number;
    }>
}

function Dropdown({ name, label, options }: Props) {
    return (
        <DropdownContainer htmlFor={name}>
            <DropdownLabel>{label}</DropdownLabel>
            <DropdownField id={name} name={name}>
                {options.map(option => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </DropdownField>
        </DropdownContainer>
    )
}

export default Dropdown;