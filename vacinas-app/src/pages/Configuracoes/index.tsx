import Form from "../../components/Form";
import Input from "../../components/Input";
import { Section } from "../../styles/global";

function Configuracoes() {
    return (
        <Section>
            <Form title="Configurar alertas de manutenção em câmara" onSubmit={() => {}}>
                <Input label="Quantidade de eventos observados" name="eventosObserved"/>
                <Input label="Tempo de observação (segundos)" name="eventosObservedTime"/>
            </Form>
            <Form title="Configurar alertas de manutenção em sensores" onSubmit={() => {}}>
                <Input label="Quantidade de variações bruscas de temperatura observadas" name="tempVariacoes"/>
                <Input label="Tempo de observação (segundos)" name="tempVariacoesTime"/>
            </Form>
        </Section>
    );
}

export default Configuracoes;