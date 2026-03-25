import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Graph() {
  const [datos, setDatos] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/data/sprint.json')
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => {
        if (!data || data.length === 0) throw new Error();

        setDatos(data);
        setFiltro(data[0].dia);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  // 🛑 Si está cargando
  if (loading) return <p>Cargando datos...</p>;

  // 🛑 Si hay error
  if (error) return <p>Error al cargar datos ❌</p>;

  // 🛑 Si no hay datos
  if (datos.length === 0) return <p>No hay datos disponibles</p>;

  // ✅ Filtrado seguro
  const index = datos.findIndex(d => d.dia === filtro);
  const datosFiltrados = index !== -1 ? datos.slice(index) : datos;

  const chartData = {
    labels: datosFiltrados.map(d => d.dia),
    datasets: [
      {
        label: 'Avance del Sprint (%)',
        data: datosFiltrados.map(d => d.progreso),
        backgroundColor: 'rgba(75, 192, 192, 0.7)'
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'Avance del Sprint por Día (%)'
      }
    }
  };

  return (
    <div>
      {/* Filtro */}
      <div style={{ marginBottom: '15px' }}>
        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>
          Filtrar desde:
        </label>

        <select
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          style={{
            padding: '8px',
            borderRadius: '6px',
            border: '1px solid #ccc'
          }}
        >
          {datos.map((d, i) => (
            <option key={i} value={d.dia}>
              {d.dia}
            </option>
          ))}
        </select>
      </div>

      {/* Gráfico */}
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default Graph;