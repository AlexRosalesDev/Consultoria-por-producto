import React, { useState, useEffect } from 'react'
import Graph from './components/Map/Graph'
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
      .catch(() => {
        setMessage('Sin conexión con el backend(modo demostración)')
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

  const backendOk = !message.toLowerCase().includes('sin conexión')

  if (loading) {
    return (
      <div style={styles.page}>
        <div style={styles.loadingCard}>
          <div style={styles.loadingIcon}>🌍</div>
          <h1 style={styles.loadingTitle}>GeoBolivia Dashboard</h1>
          <p style={styles.loadingText}>Cargando información del sistema...</p>
        </div>
      </div>
    )
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <header style={styles.hero}>
          <div style={styles.heroBadge}>Sprint 1 · Persona 4</div>
          <h1 style={styles.title}>🌍 GeoBolivia Dashboard</h1>
          <p style={styles.subtitle}>
            HU-01: Dashboard con mapas e indicadores climáticos
          </p>
          <p style={styles.dayLabel}>Día 5 · Validación funcional e integración visual</p>
        </header>

        <section style={styles.metricsGrid}>
          <div style={styles.metricCard}>
            <span style={styles.metricLabel}>Municipios cargados</span>
            <span style={styles.metricValue}>{markers.length}</span>
          </div>

          <div style={styles.metricCard}>
            <span style={styles.metricLabel}>Resultados filtrados</span>
            <span style={styles.metricValue}>{filteredMarkers.length}</span>
          </div>

          <div style={styles.metricCard}>
            <span style={styles.metricLabel}>Estado backend</span>
            <span
              style={{
                ...styles.statusPill,
                background: backendOk ? '#153a2b' : '#4a1f1f',
                color: backendOk ? '#86efac' : '#fca5a5'
              }}
            >
              {backendOk ? 'Conectado' : 'Sin conexión'}
            </span>
          </div>
        </section>

        {!backendOk && (
          <div style={styles.warningBox}>
            <strong>Advertencia:</strong> no se logró establecer conexión con el backend.
            El frontend continúa operativo con fines de validación visual.
          </div>
        )}

        <section style={styles.card}>
          <div style={styles.sectionHeader}>
            <div>
              <h2 style={styles.sectionTitle}>Filtros combinados</h2>
              <p style={styles.sectionText}>
                Prueba visual del filtrado por nombre y población mínima.
              </p>
            </div>
          </div>

          <SimpleFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            minPopulation={minPopulation}
            onMinPopulationChange={setMinPopulation}
            onClear={handleClearFilter}
            totalResults={filteredMarkers.length}
          />
        </section>

        <section style={styles.card}>
          <div style={styles.sectionHeader}>
            <div>
              <h2 style={styles.sectionTitle}>Avance del sprint</h2>
              <p style={styles.sectionText}>
                Visualización del progreso por día dentro del Sprint 1.
              </p>
            </div>
          </div>

          <Graph markers={filteredMarkers} />
        </section>

        <footer style={styles.footer}>
          <div style={styles.footerBox}>
            <strong>Estado del Backend:</strong> {message}
          </div>
        </footer>
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    background:
      'linear-gradient(135deg, #081018 0%, #0f172a 45%, #111827 100%)',
    color: '#f8fafc',
    padding: '32px 16px'
  },
  container: {
    maxWidth: '1120px',
    margin: '0 auto'
  },
  hero: {
    textAlign: 'center',
    marginBottom: '28px'
  },
  heroBadge: {
    display: 'inline-block',
    padding: '8px 14px',
    borderRadius: '999px',
    background: 'rgba(56, 189, 248, 0.12)',
    color: '#7dd3fc',
    border: '1px solid rgba(125, 211, 252, 0.25)',
    fontSize: '14px',
    marginBottom: '16px'
  },
  title: {
    fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
    margin: 0,
    fontWeight: 800
  },
  subtitle: {
    margin: '10px 0 6px',
    fontSize: '1.15rem',
    color: '#cbd5e1'
  },
  dayLabel: {
    margin: 0,
    color: '#93c5fd',
    fontWeight: 600
  },
  metricsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '16px',
    marginBottom: '18px'
  },
  metricCard: {
    background: 'rgba(15, 23, 42, 0.72)',
    border: '1px solid rgba(148, 163, 184, 0.15)',
    borderRadius: '18px',
    padding: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)'
  },
  metricLabel: {
    display: 'block',
    color: '#94a3b8',
    fontSize: '0.95rem',
    marginBottom: '8px'
  },
  metricValue: {
    fontSize: '2rem',
    fontWeight: 800,
    color: '#f8fafc'
  },
  statusPill: {
    display: 'inline-block',
    padding: '10px 14px',
    borderRadius: '999px',
    fontWeight: 700,
    fontSize: '0.95rem'
  },
  warningBox: {
    background: 'rgba(127, 29, 29, 0.35)',
    border: '1px solid rgba(248, 113, 113, 0.3)',
    color: '#fecaca',
    padding: '14px 16px',
    borderRadius: '14px',
    marginBottom: '18px'
  },
  card: {
    background: 'rgba(15, 23, 42, 0.72)',
    border: '1px solid rgba(148, 163, 184, 0.15)',
    borderRadius: '22px',
    padding: '24px',
    marginBottom: '22px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)'
  },
  sectionHeader: {
    marginBottom: '18px'
  },
  sectionTitle: {
    margin: '0 0 6px',
    fontSize: '1.45rem',
    fontWeight: 800
  },
  sectionText: {
    margin: 0,
    color: '#94a3b8'
  },
  footer: {
    marginTop: '10px'
  },
  footerBox: {
    background: 'rgba(15, 23, 42, 0.72)',
    border: '1px solid rgba(148, 163, 184, 0.15)',
    borderRadius: '16px',
    padding: '16px 18px',
    color: '#e2e8f0'
  },
  loadingCard: {
    maxWidth: '520px',
    margin: '80px auto',
    padding: '36px 28px',
    textAlign: 'center',
    borderRadius: '24px',
    background: 'rgba(15, 23, 42, 0.8)',
    border: '1px solid rgba(148, 163, 184, 0.15)'
  },
  loadingIcon: {
    fontSize: '3rem',
    marginBottom: '12px'
  },
  loadingTitle: {
    margin: 0,
    fontSize: '2rem'
  },
  loadingText: {
    color: '#cbd5e1',
    marginTop: '10px'
  }
}

export default App