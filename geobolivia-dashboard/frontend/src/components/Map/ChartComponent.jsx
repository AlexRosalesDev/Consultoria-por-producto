import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const ChartComponent = () => {

  const data = {
    labels: ['Enero', 'Febrero', 'Marzo'],
    datasets: [
      {
        label: 'Ventas',
        data: [100, 200, 150],
        backgroundColor: ['red', 'blue', 'green']
      }
    ]
  };

  return (
    <div>
      <h2>Gráfico de ejemplo</h2>
      <Bar data={data} />
    </div>
  );
};

export default ChartComponent;
