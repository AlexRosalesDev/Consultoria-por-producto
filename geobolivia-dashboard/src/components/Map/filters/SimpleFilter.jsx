import React from 'react'

function SimpleFilter({
  searchTerm,
  onSearchChange,
  minPopulation,
  onMinPopulationChange,
  onClear,
  totalResults
}) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.grid}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Buscar por nombre</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Ejemplo: Cochabamba"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Población mínima</label>
          <input
            type="number"
            value={minPopulation}
            onChange={(e) => onMinPopulationChange(e.target.value)}
            placeholder="Ejemplo: 50000"
            style={styles.input}
          />
        </div>
      </div>

      <div style={styles.actions}>
        <button onClick={onClear} style={styles.button}>
          Limpiar filtros
        </button>

        <div style={styles.resultsBox}>
          <span style={styles.resultsLabel}>Resultados encontrados</span>
          <span style={styles.resultsValue}>{totalResults}</span>
        </div>
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '16px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  label: {
    color: '#cbd5e1',
    fontWeight: 600
  },
  input: {
    background: '#0f172a',
    color: '#f8fafc',
    border: '1px solid rgba(148, 163, 184, 0.25)',
    borderRadius: '12px',
    padding: '12px 14px',
    outline: 'none',
    fontSize: '0.95rem'
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px',
    flexWrap: 'wrap'
  },
  button: {
    background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    padding: '12px 18px',
    fontWeight: 700,
    cursor: 'pointer',
    boxShadow: '0 8px 20px rgba(37, 99, 235, 0.35)'
  },
  resultsBox: {
    background: 'rgba(30, 41, 59, 0.85)',
    border: '1px solid rgba(148, 163, 184, 0.15)',
    borderRadius: '14px',
    padding: '12px 16px',
    minWidth: '200px'
  },
  resultsLabel: {
    display: 'block',
    color: '#94a3b8',
    fontSize: '0.9rem',
    marginBottom: '4px'
  },
  resultsValue: {
    fontSize: '1.4rem',
    fontWeight: 800,
    color: '#f8fafc'
  }
}

export default SimpleFilter