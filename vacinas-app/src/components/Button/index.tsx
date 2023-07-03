import { ButtonContainer } from "./style";

type Props = {
    children: string;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
}

function Button({ onClick, children, type }: Props) {
    return (
        <ButtonContainer onClick={onClick} type={type || 'button'}>
            {children}
        </ButtonContainer>
    );
}

export default Button;