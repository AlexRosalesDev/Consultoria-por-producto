import React, { useState, useEffect } from 'react'
import MapComponent from './components/Map/MapComponent'
import FiltrosDashboard from './components/Map/FiltrosDashboard'

function App() {
  const [message, setMessage] = useState('Cargando...')
  const [markers, setMarkers] = useState([])
  const [filteredMarkers, setFilteredMarkers] = useState([])
  const [loading, setLoading] = useState(true)

  const [filtrosAplicados, setFiltrosAplicados] = useState({
    categoria: '',
    municipio: ''
  })

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:8000/api/hello/').then((res) => res.json()),
      fetch('http://localhost:8000/api/municipios/').then((res) => res.json())
    ])
      .then(([helloData, municipiosData]) => {
        setMessage(helloData.message)

        const markersData = municipiosData.map((m) => ({
          position: [m.latitud, m.longitud],
          name: m.nombre,
          poblacion: m.poblacion
        }))

        setMarkers(markersData)
        setFilteredMarkers(markersData)
        setLoading(false)
      })
      .catch((err) => {
        setMessage('Error: ' + err.message)
        setLoading(false)
      })
  }, [])

  const aplicarFiltros = ({ categoria, municipio }) => {
    setFiltrosAplicados({ categoria, municipio })

    let resultado = [...markers]

    if (municipio) {
      resultado = resultado.filter(
        (marker) => marker.name.toLowerCase() === municipio.toLowerCase()
      )
    }

    setFilteredMarkers(resultado)
  }

  const limpiarFiltros = () => {
    setFiltrosAplicados({
      categoria: '',
      municipio: ''
    })
    setFilteredMarkers(markers)
  }

  const municipiosDisponibles = markers.map((marker) => marker.name)

  if (loading) {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>🌍 GeoBolivia Dashboard</h1>
        <p>🔄 Cargando datos del backend...</p>
      </div>
    )
  }

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#f4f7fb',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '10px', color: '#1f2937', textAlign: 'center' }}>
          🌍 GeoBolivia Dashboard
        </h1>

        <h2 style={{ marginBottom: '8px', color: '#374151', textAlign: 'center' }}>
          HU-01: Dashboard con mapas e indicadores climáticos
        </h2>

        <p style={{ marginBottom: '6px', color: '#4b5563', textAlign: 'center' }}>
          <strong>Día 3 - 5: Filtros funcionales e integración</strong>
        </p>

        <p style={{ marginBottom: '20px', color: '#4b5563', textAlign: 'center' }}>
          <strong>Municipios visibles:</strong> {filteredMarkers.length}
        </p>

        <FiltrosDashboard
          municipios={municipiosDisponibles}
          onAplicar={aplicarFiltros}
          onLimpiar={limpiarFiltros}
          filtrosAplicados={filtrosAplicados}
        />

        <div
          style={{
            marginTop: '20px',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
            border: '1px solid #e5e7eb'
          }}
        >
          <h3 style={{ marginBottom: '15px', color: '#1f2937', textAlign: 'center' }}>
            Mapa geoespacial
          </h3>

          <MapComponent markers={filteredMarkers} />
        </div>

        <div
          style={{
            marginTop: '20px',
            padding: '15px',
            background: '#e8f4fd',
            borderRadius: '12px',
            border: '1px solid #bfdbfe'
          }}
        >
          <p style={{ margin: 0, color: '#1e3a8a' }}>
            <strong>Estado del Backend:</strong> {message}
          </p>
          <p style={{ margin: '8px 0 0 0', color: '#1e3a8a' }}>
            <strong>Categoría activa:</strong>{' '}
            {filtrosAplicados.categoria || 'Ninguna'}
          </p>
          <p style={{ margin: '4px 0 0 0', color: '#1e3a8a' }}>
            <strong>Municipio activo:</strong>{' '}
            {filtrosAplicados.municipio || 'Ninguno'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default App