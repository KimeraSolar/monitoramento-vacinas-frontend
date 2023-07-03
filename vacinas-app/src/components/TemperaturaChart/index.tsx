import { TemperaturaCamara } from "../../types/Camara";
import Title from "../Title";
import { ChartContainer } from "./style";
import 'chart.js/auto';
import { Chart } from "react-chartjs-2";

type Props = {
    temperaturas: TemperaturaCamara[];
}

function TemperaturaChart({temperaturas}: Props) {
    const latestTemperaturas = temperaturas.slice(temperaturas.length - 31);
    const labels = latestTemperaturas.map(item => new Date(item.key));
    const data = latestTemperaturas.map(item => item.value.toFixed(2));

    return (
    <ChartContainer>
        <Chart type="line" 
        data={{
            labels: labels.map(label => label.toLocaleString('pt-BR')),
            datasets: [{
                label: 'Temperatura (°C)',
                data: data,
                borderColor: 'rgb(0, 0, 0, 0.3)',
                backgroundColor: 'rgb(0, 0, 0, 0.1)',
                fill: {
                    target: 'origin',
                    above: 'rgb(236, 150, 10, 0.6)', 
                    below: 'rgb(93, 144, 221, 0.6)'
                  },
            }],
        }}
        options={{
            aspectRatio: 2,
            maintainAspectRatio: true,
            scales: {
                y: {
                    ticks: {
                        callback: (value) => `${value} °C`
                    }
                }
            }
        }}
        id="temp-chart"
        />
    </ChartContainer>
    );
}

export default TemperaturaChart;