import { useLoaderData } from "react-router-dom";
import Form from "../../components/Form";
import { Section } from "../../styles/global";
import Input from "../../components/Input";
import Dropdown from "../../components/Dropdown";

function AbastecerCamara() {
    const { camara } = useLoaderData() as { camara: string };
    const tiposVacina = [
        { value: 1, label: 'CoronaVac' },
        { value: 2, label: 'CovidShield' },
        { value: 3, label: 'Pfizer BionTech' },
        { value: 3, label: '- Nova vacina -' },
    ]

    return (
        <Section>
            <Form title={`Abastecer câmara ${camara}`} onSubmit={() => {}}>
                <Dropdown label="Tipo" name="vacinaType" options={tiposVacina}/>
                <Input disabled label="Nome" name="vacinaName"/>
                <Input disabled label="Temperatura mínima (°C)" name="vacinaMinTemp"/>
                <Input disabled label="Temperatura máxima (°C)" name="vacinaMaxTemp"/>
                <Input disabled label="Tempo para descarte (minutos)" name="vacinaDescarteTime"/>
                <Input label="Data de abastecimento" name="vacinaAbastecimentoDate"/>
                <Input label="Data de vencimento" name="vacinaVencimentoDate"/>
            </Form>
        </Section>
    )
}

export default AbastecerCamara;