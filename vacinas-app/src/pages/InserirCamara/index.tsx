import Form from "../../components/Form";
import Input from "../../components/Input";
import { Section } from "../../styles/global";

function InserirCamara() {
    return (
    <Section>
        <Form title="Inserir nova câmara" onSubmit={() => {}}>
            <Input name="camaraName" label="ID da câmara" />
        </Form>
    </Section>
    )
}

export default InserirCamara;