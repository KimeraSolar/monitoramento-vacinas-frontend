import Button from "../Button";
import Title from "../Title";
import { FormContainer, FormContentContainer } from "./style";

type Props = {
    title: string;
    children: React.ReactNode;
    onSubmit: () => void;
}

function Form({ title, children, onSubmit }: Props) {
    return (
    <FormContainer>
        <Title>{title}</Title>
        <FormContentContainer onSubmit={onSubmit}>
            {children}
            <Button type="submit" onClick={() => {}}>Salvar</Button>
        </FormContentContainer>
    </FormContainer>
    );
}

export default Form;