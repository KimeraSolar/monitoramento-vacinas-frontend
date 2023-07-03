import { useContext, useEffect, useState } from "react";
import { GerenteContext } from "../../contexts/gerenteContext";
import { Mensagem } from "../../types/Mensagem";
import useFetch from "../../hooks/useFetch";
import MensagemCard from "../../components/MensagemCard";
import Title from "../../components/Title";
import { Section } from "../../styles/global";

function Mensagens() {
    const { username } = useContext(GerenteContext);
    const { data: mensagens = [] } = useFetch<Mensagem[]>(`/${username}/mensagens`);
    const [latestMensagens, setLatestMensagens] = useState<Mensagem[]>([]);

    useEffect(() => {
        const orderedMensagens = mensagens.sort((a, b) => {
            const dateA = new Date(a.key);
            const dateB = new Date(b.key);
            if (dateA > dateB) return -1;
            if (dateA < dateB) return 1;
            return 0;
        });
        setLatestMensagens(orderedMensagens.slice(0, 29));
    }, [mensagens]);

    return (
    <Section>
        <Title>{`Mensagens`}</Title>
        {latestMensagens.map(mensagem => <MensagemCard dataHora={new Date(mensagem.key).toLocaleString('pt-BR')} mensagem={mensagem.value}/>)}
    </Section>
    );
}

export default Mensagens;