import React from 'react'

function SimpleFilter({ searchTerm, onSearchChange, onClear, totalResults }) {
  return (
    <div
      style={{
        margin: '20px 0',
        padding: '15px',
        background: '#1e1e1e',
        borderRadius: '10px',
        border: '1px solid #333'
      }}
    >
      <h3 style={{ marginBottom: '10px' }}>Filtro simple de municipios</h3>

      <input
        type="text"
        placeholder="Buscar municipio por nombre..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          padding: '10px',
          width: '300px',
          borderRadius: '8px',
          border: '1px solid #555',
          marginRight: '10px'
        }}
      />

      <button
        onClick={onClear}
        style={{
          padding: '10px 16px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Limpiar
      </button>

      <p style={{ marginTop: '10px' }}>
        <strong>Resultados encontrados:</strong> {totalResults}
      </p>
    </div>
  )
}

export default SimpleFilter