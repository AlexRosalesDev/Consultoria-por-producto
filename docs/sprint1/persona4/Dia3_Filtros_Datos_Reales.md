# AVANCE DEL DÍA 3 – SPRINT 1  
# INTEGRACIÓN DEL FILTRO SIMPLE CON DATOS REALES EN EL DASHBOARD DEL SISTEMA GEOBOLIVIA

## 1. Introducción

En el desarrollo de sistemas informáticos orientados a la gestión y visualización de información geográfica, uno de los aspectos más relevantes es la capacidad de integrar la interfaz del usuario con datos reales provenientes del backend. Esta integración permite transformar componentes visuales aislados en funcionalidades operativas dentro de un sistema real, favoreciendo así una experiencia de uso más útil, dinámica y alineada con los objetivos del proyecto.

En este contexto, el proyecto **GeoBolivia** fue concebido como un sistema de dashboard geográfico y climático, estructurado para ofrecer funcionalidades de visualización, consulta, filtrado e interpretación de información territorial. Durante el **Sprint 1**, el equipo de trabajo definió una serie de objetivos orientados a la construcción de una versión base del sistema, priorizando módulos esenciales como el mapa, el dashboard, la búsqueda geográfica, el acceso básico y la integración de datos iniciales.

Dentro de la distribución de tareas del equipo, la **Persona 4** asumió la responsabilidad del desarrollo del módulo de **Filtros**, así como funciones complementarias relacionadas con **QA, pruebas y documentación técnica**. Luego de haber definido en el **Día 1** la lógica inicial de filtros y de haber implementado en el **Día 2** un filtro simple funcional en el frontend, el **Día 3** representó una fase de mayor nivel técnico, al orientarse a la integración del componente con datos reales obtenidos desde el backend Django.

El presente documento expone, con carácter formal y académico, el trabajo realizado en el **Día 3 del Sprint 1**, describiendo el objetivo alcanzado, el proceso de integración desarrollado, las decisiones técnicas adoptadas, los resultados obtenidos y la manera en que este avance contribuye al cumplimiento de la historia de usuario asignada y de las métricas definidas para esta jornada.

## 2. Contextualización del Día 3 dentro del Sprint 1

De acuerdo con la planificación general del Sprint 1, el **Día 3 – Sábado (Funcionalidad real)** tuvo como objetivo principal conectar los módulos desarrollados con información real, superando así la etapa inicial de estructura base y funcionalidad independiente. Esta fase se planteó como un momento clave dentro del sprint, ya que buscaba convertir los componentes construidos durante los días anteriores en elementos parcialmente funcionales e integrados al sistema real.

En esta jornada, la tarea asignada a la **Persona 4** fue:

**P4: Filtros aplicados a datos**

Del mismo modo, el entregable grupal del día fue definido como:

**Sistema parcialmente funcional conectado**

y las métricas establecidas fueron:

- **60% de funcionalidad total**
- **Datos reales integrados**

Estas condiciones ubican al Día 3 como una etapa de transición entre la construcción técnica del componente y su funcionamiento efectivo dentro de la lógica del sistema GeoBolivia.

## 3. Relación con la Historia de Usuario HU-01

La historia de usuario relacionada con este avance es la siguiente:

**HU-01 (Must):**  
*Como técnico de GeoBolivia, quiero visualizar dashboards con mapas e indicadores climáticos para interpretar rápidamente la información por categoría y territorio.*

La relación entre esta historia de usuario y el trabajo ejecutado durante el Día 3 es directa. Durante esta fase, el módulo de filtros dejó de operar únicamente como un componente visual o de prueba y pasó a intervenir sobre datos reales del sistema, permitiendo que la interacción del usuario afecte el contenido mostrado en el mapa y en el conteo de resultados.

De esta manera, el avance alcanzado fortalece el cumplimiento de la historia de usuario, en la medida en que la visualización del dashboard ya no depende solo de una estructura estática, sino de una interacción real entre interfaz, backend y datos geográficos.

## 4. Objetivo del trabajo desarrollado en el Día 3

El objetivo específico del Día 3 fue **integrar el filtro simple del frontend con datos reales provenientes del backend Django**, de forma que el criterio de búsqueda ingresado por el usuario pudiera aplicarse sobre municipios cargados desde la API y reflejar sus resultados en el dashboard y en el mapa.

De manera concreta, se buscó:

- conectar el frontend con endpoints reales del backend;
- cargar información real de municipios;
- aplicar el filtro de búsqueda sobre dichos datos;
- actualizar dinámicamente el conteo de resultados;
- reflejar el subconjunto filtrado dentro del componente de mapa;
- comprobar el funcionamiento real del módulo en una etapa parcialmente conectada del sistema.

## 5. Alcance del avance correspondiente al Día 3

El alcance del trabajo desarrollado en esta jornada incluyó la integración funcional entre frontend y backend, con énfasis en la aplicación del filtro a datos reales del sistema. En este sentido, el avance realizado comprendió:

- consumo de datos reales desde la API del backend;
- carga de municipios desde Django hacia el dashboard;
- transformación de municipios en marcadores utilizables por el mapa;
- filtrado por nombre sobre los municipios obtenidos;
- actualización del mapa en función del resultado filtrado;
- actualización del contador de resultados visibles;
- verificación del funcionamiento correcto del backend y del frontend de manera conjunta.

No formó parte del alcance de esta jornada la implementación de filtros múltiples avanzados, criterios combinados o lógica analítica más compleja, ya que esas tareas corresponden a una fase posterior del sistema.

## 6. Proceso de integración realizado

### 6.1 Integración con la API del backend

Como parte del trabajo del Día 3, se integró el frontend con dos endpoints del backend Django:

- un endpoint de verificación o mensaje de estado;
- un endpoint de municipios.

Esta integración permitió que el sistema consumiera información real proveniente del backend y validara el estado operativo del servicio.

### 6.2 Preparación del entorno backend

Para garantizar que el frontend pudiera consumir datos reales, fue necesario preparar el entorno backend local, lo que implicó:

- instalación de Python y dependencias de Django;
- creación y activación del entorno virtual;
- instalación de librerías requeridas;
- ejecución de migraciones;
- carga de datos de municipios;
- levantamiento del servidor backend.

Este proceso fue fundamental para habilitar la comunicación entre el dashboard y la base de datos gestionada por Django.

### 6.3 Carga de municipios reales

Una vez operativo el backend, se realizó la carga de datos reales de municipios, obteniendo como resultado la integración de registros correspondientes a distintas ciudades y departamentos. Estos datos fueron luego consumidos por el frontend y transformados en una estructura compatible con el componente de mapa.

### 6.4 Aplicación del filtro sobre datos reales

El siguiente paso consistió en aplicar el filtro simple, previamente desarrollado, sobre la colección real de municipios obtenida desde la API. Para ello, el término ingresado por el usuario se comparó con el nombre de los municipios, generando un subconjunto filtrado que responde a la búsqueda realizada.

### 6.5 Reflejo del filtrado en el mapa

Los resultados del filtrado fueron enviados al componente del mapa, permitiendo que los marcadores mostrados se ajustaran a la búsqueda activa. De este modo, el filtro no solo afectó una lista o un conteo, sino también la representación visual geográfica del dashboard.

## 7. Implementación técnica adoptada

### 7.1 Modificación del componente principal del frontend

Se actualizó el archivo principal del dashboard para:

- importar el componente de filtro;
- consumir datos reales desde los endpoints del backend;
- almacenar los municipios obtenidos;
- registrar el término de búsqueda del usuario;
- generar un subconjunto filtrado de marcadores;
- enviar los resultados filtrados al mapa.

### 7.2 Uso del componente `SimpleFilter`

El componente `SimpleFilter` fue utilizado como módulo de interacción del usuario, encargado de:

- recibir el término de búsqueda;
- ejecutar la acción de limpieza;
- mostrar el número de resultados encontrados.

### 7.3 Integración con `MapComponent`

El componente del mapa recibió como entrada los marcadores ya filtrados, de manera que su visualización fuera coherente con el criterio activo ingresado en el filtro.

## 8. Estructura técnica involucrada

Los archivos principales implicados en el avance del Día 3 fueron los siguientes:

```bash
frontend/
  src/
    App.jsx
    components/
      Map/
        MapComponent.jsx
        filters/
          SimpleFilter.jsx

### Justificación de la organización

La organización adoptada permitió mantener una separación razonable entre:

- lógica de integración general del dashboard;
- componente específico del mapa;
- componente específico del filtro.

Esta estructura resulta apropiada para un desarrollo modular, facilita la lectura del código y permite ampliar el módulo en futuras iteraciones sin alterar excesivamente la arquitectura actual.

## 9. Implementación funcional desarrollada

A continuación se presenta la lógica funcional implementada durante el Día 3 para integrar el filtro simple con datos reales del backend.

### 9.1 Componente principal del dashboard  
**Archivo:** `frontend/src/App.jsx`

```javascript
import React, { useState, useEffect } from 'react'
import MapComponent from './components/Map/MapComponent'
import SimpleFilter from './components/Map/filters/SimpleFilter'

function App() {
  const [message, setMessage] = useState('Cargando...')
  const [markers, setMarkers] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

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
        setMessage('Error: ' + err.message)
        setLoading(false)
      })
  }, [])

  const filteredMarkers = markers.filter(marker =>
    marker.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleClearFilter = () => {
    setSearchTerm('')
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
      <p><strong>Día 3 - Datos reales desde Django</strong></p>
      <p><strong>Municipios cargados:</strong> {markers.length}</p>

      <SimpleFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
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

### 9.2 Componente de filtro integrado  
**Archivo:** `frontend/src/components/Map/filters/SimpleFilter.jsx`

```javascript
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

## 10. Resultados obtenidos

Como resultado del trabajo desarrollado durante el Día 3, se consiguió:

- establecer conexión efectiva entre frontend y backend;
- cargar datos reales de municipios en el dashboard;
- mostrar municipios reales en el mapa mediante marcadores;
- aplicar el filtro simple sobre datos reales;
- actualizar el número de resultados encontrados;
- comprobar la respuesta visual del mapa ante el filtrado;
- validar el estado operativo del backend desde la interfaz;
- consolidar una versión parcialmente funcional conectada del sistema.

Durante la validación funcional se comprobó la carga correcta de **9 municipios**, así como la operatividad del filtro simple sobre dichos datos.

## 11. Justificación técnica de la solución implementada

La solución desarrollada durante el Día 3 resulta técnicamente adecuada por diversas razones.

En primer lugar, se mantuvo la lógica incremental del sprint, evolucionando el componente desde una base conceptual hasta una aplicación real sobre información del backend. Esto demuestra coherencia metodológica y evita reconstrucciones innecesarias.

En segundo lugar, la separación entre el componente de filtro y la lógica general del dashboard permitió mantener la interfaz del filtro enfocada en su función principal, mientras que la obtención y transformación de datos permaneció centralizada en el componente principal.

En tercer lugar, la integración del mapa con el subconjunto filtrado simplificó la arquitectura del flujo de datos, ya que el componente cartográfico solo recibe información ya procesada, reduciendo complejidad interna y favoreciendo la mantenibilidad del sistema.

Finalmente, el uso de datos reales provenientes del backend permitió dar un salto cualitativo en el desarrollo del módulo, pasando de un prototipo funcional a una integración válida dentro del sistema GeoBolivia.

## 12. Relación con el entregable del día

El entregable establecido para la jornada fue:

**Sistema parcialmente funcional conectado**

Este entregable fue alcanzado satisfactoriamente, ya que el filtro dejó de ser un componente aislado y pasó a operar de manera conectada con el backend y el mapa. El sistema demostró una funcionalidad real, aunque todavía parcial, permitiendo al usuario interactuar con datos reales del dashboard.

## 13. Relación con las métricas del sprint

### 13.1 60% de funcionalidad total

La funcionalidad del módulo avanzó significativamente respecto a los días anteriores. Ya no se trata únicamente de una interfaz o lógica local, sino de un componente integrado y operativo dentro del sistema.

### 13.2 Datos reales integrados

Esta métrica se cumplió de manera efectiva, dado que el filtro se aplicó sobre municipios reales obtenidos desde el backend Django y cargados en el dashboard.

## 14. Limitaciones actuales

A pesar de los avances logrados, el módulo todavía presenta ciertas limitaciones que deberán abordarse en fases posteriores del proyecto:

- el filtrado se realiza únicamente por nombre de municipio;
- no existen aún filtros avanzados por categoría, fecha o atributos múltiples;
- no se ha extendido todavía la lógica de filtrado a otros indicadores del dashboard;
- la validación avanzada del filtro sigue pendiente;
- la integración con gráficos u otros componentes analíticos aún puede fortalecerse.

Estas limitaciones son coherentes con la naturaleza incremental del Sprint 1 y no desmerecen el progreso funcional alcanzado.

## 15. Conclusión

El trabajo realizado durante el **Día 3 del Sprint 1** permitió consolidar una etapa de alta relevancia en el desarrollo del módulo de filtros del sistema GeoBolivia, al lograr la integración del frontend con datos reales provenientes del backend Django. Gracias a esta conexión, el filtro simple dejó de operar como una funcionalidad aislada y pasó a influir directamente en la visualización del mapa y en el conteo de resultados dentro del dashboard.

Desde una perspectiva técnica, el avance representa una evolución coherente y progresiva respecto a los días anteriores, evidenciando una transición ordenada desde la definición lógica del módulo hasta su integración parcial dentro del sistema real. Asimismo, desde el punto de vista metodológico, el trabajo realizado se ajusta adecuadamente a la lógica de Scrum + Kanban, aportando un incremento funcional medible y verificable dentro del Sprint 1.

En síntesis, el módulo de filtros alcanzó en esta jornada una condición parcialmente funcional conectada, cumpliendo con el objetivo del día, con las métricas establecidas y con un aporte concreto al cumplimiento de la historia de usuario relacionada con la visualización del dashboard geográfico y climático de GeoBolivia.