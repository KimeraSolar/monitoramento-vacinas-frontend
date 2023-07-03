import { InputContainer, InputField, InputLabel } from "./style";

type Props = {
    name: string;
    label: string;
}

function Input({ name, label }: Props) {
    return (
        <InputContainer htmlFor={name}>
            <InputLabel>{label}</InputLabel>
            <InputField name={name} id={name} type="text" />
        </InputContainer>
    );
}

export default Input;