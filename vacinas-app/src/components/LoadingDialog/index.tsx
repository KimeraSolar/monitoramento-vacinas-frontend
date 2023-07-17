import Title from "../Title";
import { DialogContainer, DialogOverlay } from "./style";

interface LoadingDialogProps {
    content: string;
}

export default function LoadingDialog({ content }: LoadingDialogProps) {

    return (
        <DialogOverlay>
            <DialogContainer>
                <Title>{content}</Title>
            </DialogContainer>
        </DialogOverlay>
    );
}