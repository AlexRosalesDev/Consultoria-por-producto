import React, { useState } from 'react'

function FiltrosDashboard() {
  const [categoria, setCategoria] = useState('')
  const [municipio, setMunicipio] = useState('')
  const [filtrosAplicados, setFiltrosAplicados] = useState(null)

  const categorias = ['Agropecuario', 'Agua', 'Bosques']
  const municipios = ['Cochabamba', 'Quillacollo', 'Vinto', 'Sacaba', 'Tiquipaya']

  const aplicarFiltros = () => {
    setFiltrosAplicados({
      categoria: categoria || 'No seleccionada',
      municipio: municipio || 'No seleccionado'
    })
  }

  const limpiarFiltros = () => {
    setCategoria('')
    setMunicipio('')
    setFiltrosAplicados(null)
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>Panel de filtros geoespaciales</h2>
        <p style={styles.subtitle}>
          Seleccione una categoría temática y un municipio para filtrar la
          información del dashboard.
        </p>

        <div style={styles.formRow}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Categoría</label>
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              style={styles.select}
            >
              <option value="" style={styles.option}>
                Seleccione una categoría
              </option>
              {categorias.map((item, index) => (
                <option key={index} value={item} style={styles.option}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Municipio</label>
            <select
              value={municipio}
              onChange={(e) => setMunicipio(e.target.value)}
              style={styles.select}
            >
              <option value="" style={styles.option}>
                Seleccione un municipio
              </option>
              {municipios.map((item, index) => (
                <option key={index} value={item} style={styles.option}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div style={styles.buttonGroup}>
          <button onClick={aplicarFiltros} style={styles.primaryButton}>
            Aplicar filtros
          </button>

          <button onClick={limpiarFiltros} style={styles.secondaryButton}>
            Limpiar filtros
          </button>
        </div>

        <div style={styles.resultBox}>
          <h3 style={styles.resultTitle}>Estado de filtros</h3>

          {filtrosAplicados ? (
            <div>
              <p style={styles.activeText}>
                <strong>Filtros activos</strong>
              </p>
              <p style={styles.resultText}>
                <strong>Categoría:</strong> {filtrosAplicados.categoria}
              </p>
              <p style={styles.resultText}>
                <strong>Municipio:</strong> {filtrosAplicados.municipio}
              </p>
            </div>
          ) : (
            <p style={styles.resultText}>Sin filtros aplicados</p>
          )}
        </div>
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    padding: '10px 0',
    fontFamily: 'Arial, sans-serif'
  },
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
    border: '1px solid #e5e7eb'
  },
  title: {
    marginBottom: '8px',
    fontSize: '28px',
    color: '#1f2937'
  },
  subtitle: {
    marginBottom: '24px',
    color: '#6b7280',
    fontSize: '15px',
    lineHeight: '1.5'
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    marginBottom: '24px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    marginBottom: '8px',
    fontWeight: '600',
    color: '#374151'
  },
  select: {
    padding: '12px',
    borderRadius: '10px',
    border: '1px solid #d1d5db',
    fontSize: '15px',
    outline: 'none',
    backgroundColor: '#ffffff',
    color: '#111827'
  },
  option: {
    backgroundColor: '#ffffff',
    color: '#111827'
  },
  buttonGroup: {
    display: 'flex',
    gap: '12px',
    marginBottom: '24px',
    flexWrap: 'wrap'
  },
  primaryButton: {
    backgroundColor: '#2563eb',
    color: '#ffffff',
    border: 'none',
    padding: '12px 18px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: '600'
  },
  secondaryButton: {
    backgroundColor: '#e5e7eb',
    color: '#111827',
    border: 'none',
    padding: '12px 18px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: '600'
  },
  resultBox: {
    backgroundColor: '#f9fafb',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    padding: '20px'
  },
  resultTitle: {
    marginBottom: '12px',
    color: '#1f2937'
  },
  activeText: {
    color: '#065f46',
    marginBottom: '10px'
  },
  resultText: {
    margin: '6px 0',
    color: '#374151'
  }
}

export default FiltrosDashboard