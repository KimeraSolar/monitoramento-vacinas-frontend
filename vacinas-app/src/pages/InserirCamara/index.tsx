import { useContext, useState } from "react";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { Section } from "../../styles/global";
import { GerenteContext } from "../../contexts/gerenteContext";
import { useNavigate } from "react-router-dom";
import { handleSubmit } from "../../utils/handleSubmit";

function InserirCamara() {
    const {username} = useContext(GerenteContext);
    const [camaraname, setCamaraname] = useState('');
    const navigate = useNavigate();

    return (
    <Section>
        <Form title="Inserir nova câmara" onSubmit={() => {
            handleSubmit('camara/inserir',{camaraName: camaraname, gerenteName: username}, `Não foi possível inserir nova Câmara ${camaraname}`, () => navigate(`/camara/${camaraname}`));
            }}>
            <Input name="camaraName" label="ID da câmara" value={camaraname} onChange={setCamaraname}/>
        </Form>
    </Section>
    )
}

export default InserirCamara;