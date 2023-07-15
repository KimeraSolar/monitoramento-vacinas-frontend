import Button from "../Button";
import Title from "../Title";
import { DialogButtonContainer, DialogContainer, DialogOverlay } from "./style";

interface OptionsDialogProps {
    content: string;
    firstOptionText: string;
    secondOptionText: string;
    onFirstOption: () => void;
    onSecondOption: () => void;
    onCancel: () => void;
}

export default function OptionsDialog({ content, onFirstOption, onSecondOption, firstOptionText, secondOptionText, onCancel }: OptionsDialogProps) {
    return (
        <DialogOverlay>
            <DialogContainer>
                <Title>{content}</Title>
                <DialogButtonContainer>
                    <Button onClick={onFirstOption}>{firstOptionText}</Button>
                    <Button onClick={onSecondOption}>{secondOptionText}</Button>
                    <Button onClick={onCancel}>Cancelar</Button>
                </DialogButtonContainer>
            </DialogContainer>
        </DialogOverlay>
    );
}