import { TemperaturaCamara } from "../../types/Camara";
import Title from "../Title";
import { ChartContainer } from "./style";
import 'chart.js/auto';
import { Line } from "react-chartjs-2";

type Props = {
    temperaturas: TemperaturaCamara[];
}

function TemperaturaChart({temperaturas}: Props) {
    const labels = temperaturas.map(item => new Date(item.key));
    const data = temperaturas.map(item => item.value.toFixed(2));

    return (
    <ChartContainer>
        <Line 
        data={{
            labels,
            datasets: [{
                label: 'Temperatura',
                data
            }]
        }}
        options={{
            aspectRatio: 2,
            maintainAspectRatio: true
        }}
        id="temp-chart"
        />
    </ChartContainer>
    );
}

export default TemperaturaChart;