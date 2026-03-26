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
    <div
      style={{
        marginBottom: '20px',
        padding: '15px',
        background: '#f5f5f5',
        borderRadius: '8px'
      }}
    >
      <h3>Filtros combinados</h3>

      <div style={{ marginBottom: '10px' }}>
        <label>
          Buscar por nombre:
        </label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Ejemplo: Cochabamba"
          style={{
            marginLeft: '10px',
            padding: '5px',
            width: '250px'
          }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>
          Población mínima:
        </label>
        <input
          type="number"
          value={minPopulation}
          onChange={(e) => onMinPopulationChange(e.target.value)}
          placeholder="Ejemplo: 50000"
          style={{
            marginLeft: '10px',
            padding: '5px',
            width: '250px'
          }}
        />
      </div>

      <button
        onClick={onClear}
        style={{
          padding: '8px 12px',
          border: 'none',
          borderRadius: '6px',
          background: '#007bff',
          color: 'white',
          cursor: 'pointer'
        }}
      >
        Limpiar filtros
      </button>

      <p style={{ marginTop: '10px' }}>
        <strong>Resultados encontrados:</strong> {totalResults}
      </p>
    </div>
  )
}

export default SimpleFilter