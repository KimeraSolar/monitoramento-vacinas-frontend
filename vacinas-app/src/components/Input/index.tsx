import { InputContainer, InputField, InputLabel } from "./style";

type Props = {
    name: string;
    label: string;
    disabled?: boolean;
    value?: string;
    onChange?: (value: string) => void;
}

function Input({ name, label, value, onChange, disabled = false }: Props) {
    return (
        <InputContainer htmlFor={name}>
            <InputLabel>{label}</InputLabel>
            <InputField name={name} id={name} type="text" disabled={disabled} value={value} onChange={(event) => {onChange && onChange(event.target.value || '')}}/>
        </InputContainer>
    );
}

export default Input;