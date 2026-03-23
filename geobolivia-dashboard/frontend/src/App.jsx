import React, { useState, useEffect } from 'react'
import MapComponent from './components/Map/MapComponent'
import FiltrosDashboard from './components/Map/FiltrosDashboard'

function App() {
  const [message, setMessage] = useState('Cargando...')
  const [markers, setMarkers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:8000/api/hello/').then(res => res.json()),
      fetch('http://localhost:8000/api/municipios/').then(res => res.json())
    ])
      .then(([helloData, municipiosData]) => {
        setMessage(helloData.message)

        const markersData = municipiosData.map((m) => ({
          position: [m.latitud, m.longitud],
          name: m.nombre,
          poblacion: m.poblacion
        }))

        setMarkers(markersData)
        setLoading(false)
      })
      .catch((err) => {
        setMessage('Error: ' + err.message)
        setLoading(false)
      })
  }, [])

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
        <h1 style={{ marginBottom: '10px', color: '#1f2937' }}>
          🌍 GeoBolivia Dashboard
        </h1>

        <h2 style={{ marginBottom: '8px', color: '#374151' }}>
          HU-01: Dashboard con mapas e indicadores climáticos
        </h2>

        <p style={{ marginBottom: '6px', color: '#4b5563' }}>
          <strong>Día 3 - Datos reales desde Django</strong>
        </p>

        <p style={{ marginBottom: '20px', color: '#4b5563' }}>
          <strong>Municipios cargados:</strong> {markers.length}
        </p>

        {/* TU PARTE: FILTROS */}
        <FiltrosDashboard />

        {/* PARTE DE TU COMPAÑERO: MAPA */}
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
          <h3 style={{ marginBottom: '15px', color: '#1f2937' }}>
            Mapa geoespacial
          </h3>

          <MapComponent markers={markers} />
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
        </div>
      </div>
    </div>
  )
}

export default App