import React, { useState, useEffect } from 'react'
import MapComponent from './components/Map/MapComponent'
import SimpleFilter from './components/Map/filters/SimpleFilter'

function App() {
  const [message, setMessage] = useState('Cargando...')
  const [markers, setMarkers] = useState([])
  const [loading, setLoading] = useState(true)

  const [searchTerm, setSearchTerm] = useState('')
  const [minPopulation, setMinPopulation] = useState('')

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:8000/api/hello/').then(res => res.json()),
      fetch('http://localhost:8000/api/municipios/').then(res => res.json())
    ])
      .then(([helloData, municipiosData]) => {
        setMessage(helloData.message)

        const markersData = municipiosData.map(m => ({
          position: [m.latitud, m.longitud],
          name: m.nombre,
          poblacion: m.poblacion
        }))

        setMarkers(markersData)
        setLoading(false)
      })
      .catch(err => {
        setMessage('Sin conexión con el backend (modo demostración)')
        setLoading(false)
      })
  }, [])

  const filteredMarkers = markers.filter(marker => {
    const matchesName = marker.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    const matchesPopulation =
      minPopulation === '' || marker.poblacion >= Number(minPopulation)

    return matchesName && matchesPopulation
  })

  const handleClearFilter = () => {
    setSearchTerm('')
    setMinPopulation('')
  }

  if (loading) {
    return (
      <div style={{ padding: '20px' }}>
        <h1>🌍 GeoBolivia Dashboard</h1>
        <p>🔄 Cargando datos del backend...</p>
      </div>
    )
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>🌍 GeoBolivia Dashboard</h1>
      <h2>HU-01: Dashboard con mapas e indicadores climáticos</h2>
      <p><strong>Día 4 - Filtros combinados</strong></p>
      <p><strong>Municipios cargados:</strong> {markers.length}</p>

      <SimpleFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        minPopulation={minPopulation}
        onMinPopulationChange={setMinPopulation}
        onClear={handleClearFilter}
        totalResults={filteredMarkers.length}
      />

      <MapComponent markers={filteredMarkers} />

      <div
        style={{
          marginTop: '20px',
          padding: '10px',
          background: '#e8f4fd',
          borderRadius: '8px'
        }}
      >
        <p><strong>Estado del Backend:</strong> {message}</p>
      </div>
    </div>
  )
}

export default App