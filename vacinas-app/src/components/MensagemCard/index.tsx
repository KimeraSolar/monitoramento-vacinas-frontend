import { Card } from "./style";

type Props = {
    dataHora: string;
    mensagem: string;
}

function MensagemCard({ dataHora, mensagem }: Props) {
    return (
        <Card>
            <h4>{dataHora}</h4>
            <p>{mensagem}</p>
        </Card>
    )
}

export default MensagemCard;