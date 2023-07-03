import { InputContainer, InputField, InputLabel } from "./style";

type Props = {
    name: string;
    label: string;
    disabled?: boolean;
}

function Input({ name, label, disabled = false }: Props) {
    return (
        <InputContainer htmlFor={name}>
            <InputLabel>{label}</InputLabel>
            <InputField name={name} id={name} type="text" disabled={disabled}/>
        </InputContainer>
    );
}

export default Input;