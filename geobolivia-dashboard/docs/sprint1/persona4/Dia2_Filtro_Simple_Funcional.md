# AVANCE DEL DÍA 2 – SPRINT 1  
# IMPLEMENTACIÓN DE FILTRO SIMPLE FUNCIONAL PARA EL DASHBOARD DEL SISTEMA GEOBOLIVIA

## 1. Introducción

En el desarrollo del sistema **GeoBolivia**, el **Sprint 1** tiene como finalidad construir una primera versión funcional base del sistema, contemplando componentes esenciales como dashboard, búsqueda geográfica, control de acceso, descarga básica, carga inicial y validación de integridad.

Dentro de este sprint, el **Día 2** tuvo como objetivo principal el **desarrollo base**, es decir, lograr que cada módulo asignado al equipo cuente con una funcionalidad mínima visible e independiente. En el caso de la **Persona 4**, responsable del módulo de **Filtros**, se planteó como tarea específica la implementación de un **filtro simple con input funcional**, acompañado de pruebas básicas y documentación de soporte.

El presente documento expone el trabajo realizado en esta jornada, incluyendo el objetivo alcanzado, el alcance funcional, el diseño técnico adoptado, el código base implementado, la justificación de la solución y los resultados obtenidos.

## 2. Objetivo del Día 2

Implementar una primera versión **funcional e independiente** del módulo de filtros del dashboard, permitiendo la búsqueda simple sobre datos simulados mediante un campo de entrada, con acciones de aplicar y limpiar, de modo que el componente pueda ser visualizado y probado sin depender aún de la integración con mapa, gráficos o backend real.

## 3. Relación con el plan del sprint

De acuerdo con el plan de trabajo del **Día 2 – Viernes (Desarrollo base)**, se estableció para la Persona 4 la siguiente actividad:

**P4: Filtro simple (input funcional)**

Asimismo, el entregable grupal del día fue:

- componentes visibles funcionando individualmente.

Y las métricas definidas fueron:

- **40% de funcionalidad total**
- **100% de módulos ejecutándose de forma independiente**

En este sentido, el trabajo realizado en el módulo de filtros responde directamente a la meta del día, ya que se desarrolló un componente visible, funcional y ejecutable de forma autónoma.

## 4. Alcance del trabajo realizado

Durante el Día 2 se desarrolló un **filtro simple funcional**, compuesto por:

- un campo de entrada de texto;
- un botón para aplicar el filtro;
- un botón para limpiar el filtro;
- una lista tabular de datos simulados;
- una lógica de filtrado sobre territorio y categoría;
- visualización de resultados encontrados;
- mensaje de ausencia de resultados;
- pruebas unitarias básicas del comportamiento del filtro.

El desarrollo se mantuvo dentro de un alcance realista y coherente con la fase del sprint, evitando aún la integración con servicios externos o componentes de otros módulos.

## 5. Contribución a la Historia de Usuario HU-01

### Historia de Usuario HU-01
**Como** técnico de GeoBolivia,  
**quiero** visualizar dashboards con mapas e indicadores climáticos,  
**para** interpretar rápidamente la información por categoría y territorio.

### Aporte del módulo en esta etapa
Aunque en esta fase el filtro aún no está integrado con el mapa ni con los gráficos, su implementación representa un avance directo hacia el cumplimiento de la historia de usuario, dado que:

- permite buscar información por **territorio**;
- permite buscar información por **categoría**;
- establece la base funcional para que en la siguiente fase el dashboard responda a selecciones del usuario;
- prepara una interfaz de interacción que será posteriormente conectada con los demás componentes del sistema.

## 6. Actividades realizadas

Las actividades desarrolladas durante esta jornada fueron las siguientes:

### 6.1 Diseño del filtro simple
Se definió una interfaz mínima compuesta por:

- un **input de texto**;
- un botón **Aplicar**;
- un botón **Limpiar**;
- una tabla de resultados.

### 6.2 Selección de datos simulados
Para garantizar independencia del módulo, se empleó una colección de datos simulados con registros de ejemplo relacionados con:

- territorio;
- categoría;
- valor climático.

### 6.3 Implementación de la lógica de filtrado
Se desarrolló una función encargada de filtrar registros en función del texto ingresado por el usuario, permitiendo coincidencias sobre:

- el campo **territorio**;
- el campo **categoría**.

### 6.4 Implementación del componente visible
Se construyó un componente funcional capaz de:

- recibir texto desde el usuario;
- aplicar el filtro sobre datos simulados;
- mostrar los resultados filtrados;
- limpiar el criterio de búsqueda y restaurar la lista completa.

### 6.5 Definición de pruebas básicas
Se incorporaron pruebas unitarias para validar el comportamiento principal del filtro, incluyendo búsqueda por territorio, búsqueda por categoría y ausencia de coincidencias.

## 7. Estructura del módulo

La estructura de archivos propuesta para este avance es la siguiente:

```bash
src/
  components/
    filters/
      SimpleFilter.jsx
  data/
    mockClimateData.js
  utils/
    applySimpleFilter.js
  tests/
    filters/
      applySimpleFilter.test.js

### Justificación de la estructura
La estructura fue organizada de forma modular para separar claramente:

- la interfaz visible;
- los datos simulados;
- la lógica reutilizable del filtrado;
- las pruebas unitarias.

Esta decisión facilita el mantenimiento, la legibilidad y la futura integración con otros módulos del sistema.

## 8. Diseño técnico de la solución

## 8.1 Enfoque funcional
El módulo fue diseñado para funcionar de manera independiente durante esta etapa. Para ello, se evitó depender de un endpoint real o de componentes externos.

## 8.2 Lógica de filtrado
Se utilizó una función separada del componente visual para realizar el filtrado, tomando como parámetros:

- el conjunto de datos;
- el término de búsqueda ingresado.

La búsqueda se realiza mediante comparación de texto parcial y sin distinción entre mayúsculas y minúsculas.

## 8.3 Visualización de resultados
Los resultados se presentan en una tabla simple, permitiendo observar de forma inmediata:

- identificador;
- territorio;
- categoría;
- valor.

## 8.4 Manejo de estados
El componente maneja dos estados principales:

- el valor actual escrito en el input;
- el filtro activo que se aplica sobre los datos.

Esto permite controlar mejor el comportamiento del componente y evitar filtrados involuntarios en cada pulsación, manteniendo una acción explícita mediante el botón **Aplicar**.

## 9. Código base implementado

A continuación se presenta el código desarrollado para el Día 2.

### 9.1 Datos simulados  
**Archivo:** `src/data/mockClimateData.js`

```javascript
export const mockClimateData = [
  { id: 1, territorio: "La Paz", categoria: "Temperatura", valor: 18 },
  { id: 2, territorio: "Cochabamba", categoria: "Humedad", valor: 65 },
  { id: 3, territorio: "Santa Cruz", categoria: "Precipitación", valor: 120 },
  { id: 4, territorio: "La Paz", categoria: "Humedad", valor: 70 },
  { id: 5, territorio: "Cochabamba", categoria: "Temperatura", valor: 22 }
];

### 9.2 Lógica del filtro simple  
**Archivo:** `src/utils/applySimpleFilter.js`

```javascript
export function applySimpleFilter(data, searchTerm) {
  const normalizedTerm = searchTerm.trim().toLowerCase();

  if (!normalizedTerm) return data;

  return data.filter((item) => {
    const territorio = item.territorio.toLowerCase();
    const categoria = item.categoria.toLowerCase();

    return (
      territorio.includes(normalizedTerm) ||
      categoria.includes(normalizedTerm)
    );
  });
}

### 9.3 Componente funcional del filtro  
**Archivo:** `src/components/filters/SimpleFilter.jsx`

```javascript
import React, { useMemo, useState } from "react";
import { mockClimateData } from "../../data/mockClimateData";
import { applySimpleFilter } from "../../utils/applySimpleFilter";

function SimpleFilter() {
  const [inputValue, setInputValue] = useState("");
  const [activeFilter, setActiveFilter] = useState("");

  const filteredData = useMemo(() => {
    return applySimpleFilter(mockClimateData, activeFilter);
  }, [activeFilter]);

  const handleApply = () => {
    setActiveFilter(inputValue);
  };

  const handleClear = () => {
    setInputValue("");
    setActiveFilter("");
  };

  return (
    <div style={{ padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h3>Filtro simple del dashboard</h3>

      <input
        type="text"
        placeholder="Buscar por territorio o categoría"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ padding: "8px", width: "260px", marginRight: "8px" }}
      />

      <button onClick={handleApply} style={{ marginRight: "8px" }}>
        Aplicar
      </button>

      <button onClick={handleClear}>
        Limpiar
      </button>

      <p style={{ marginTop: "16px" }}>
        <strong>Filtro activo:</strong> {activeFilter || "Ninguno"}
      </p>

      <p>
        <strong>Resultados encontrados:</strong> {filteredData.length}
      </p>

      <table border="1" cellPadding="8" style={{ marginTop: "10px", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Territorio</th>
            <th>Categoría</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.territorio}</td>
                <td>{item.categoria}</td>
                <td>{item.valor}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No se encontraron resultados.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SimpleFilter;

### 9.4 Pruebas unitarias básicas  
**Archivo:** `src/tests/filters/applySimpleFilter.test.js`

```javascript
import { applySimpleFilter } from "../../utils/applySimpleFilter";

const mockData = [
  { id: 1, territorio: "La Paz", categoria: "Temperatura", valor: 18 },
  { id: 2, territorio: "Cochabamba", categoria: "Humedad", valor: 65 },
  { id: 3, territorio: "Santa Cruz", categoria: "Precipitación", valor: 120 }
];

describe("Filtro simple", () => {
  test("debe retornar todos los datos si el filtro está vacío", () => {
    expect(applySimpleFilter(mockData, "")).toHaveLength(3);
  });

  test("debe filtrar por territorio", () => {
    const result = applySimpleFilter(mockData, "La Paz");
    expect(result).toHaveLength(1);
    expect(result[0].territorio).toBe("La Paz");
  });

  test("debe filtrar por categoría", () => {
    const result = applySimpleFilter(mockData, "Humedad");
    expect(result).toHaveLength(1);
    expect(result[0].categoria).toBe("Humedad");
  });

  test("debe retornar vacío si no hay coincidencias", () => {
    const result = applySimpleFilter(mockData, "Viento");
    expect(result).toHaveLength(0);
  });
});

## 10. Justificación técnica de la solución adoptada

La solución fue implementada bajo criterios de simplicidad, independencia funcional y proyección futura dentro del sprint.

### 10.1 Uso de datos simulados
Se decidió emplear datos simulados en lugar de consumir directamente un endpoint real.

**Justificación:**  
En esta etapa del sprint, la prioridad era cumplir con la meta de que el módulo funcione de manera autónoma. Depender del backend habría condicionado la demostración del componente y retrasado la validación temprana.

### 10.2 Separación entre lógica y componente visual
La función de filtrado se implementó fuera del componente principal.

**Justificación:**  
Esta decisión permite:

- reutilizar la lógica;
- facilitar las pruebas unitarias;
- mantener el componente visual más limpio;
- preparar la futura integración con datos reales.

### 10.3 Uso de un input simple
Se optó por implementar un único campo de entrada capaz de filtrar por territorio o categoría.

**Justificación:**  
El entregable del Día 2 exigía un filtro simple funcional. Por ello, se evitó añadir complejidad innecesaria, priorizando una solución mínima pero operativa.

### 10.4 Aplicación manual del filtro
El filtro se ejecuta mediante un botón y no automáticamente en cada pulsación.

**Justificación:**  
Esto mejora el control del usuario, reduce cambios innecesarios y se adapta mejor a escenarios futuros donde el filtrado podría invocar consultas al backend o actualizar múltiples componentes del dashboard.

### 10.5 Presentación tabular de resultados
Los resultados se muestran en una tabla simple en lugar de integrarse de inmediato con visualizaciones complejas.

**Justificación:**  
Una tabla permite comprobar de forma clara y directa que el filtrado está funcionando, lo cual es adecuado para una fase de validación temprana del módulo.

## 11. Casos de prueba considerados

Como parte de las responsabilidades de QA, se definieron los siguientes casos de prueba:

| Código | Caso de prueba | Resultado esperado |
|--------|----------------|-------------------|
| CP-01 | Cargar el componente | El filtro se muestra correctamente |
| CP-02 | Escribir “La Paz” y aplicar | Se muestran solo registros de La Paz |
| CP-03 | Escribir “Temperatura” y aplicar | Se muestran solo registros de esa categoría |
| CP-04 | Escribir un valor sin coincidencias | Se muestra el mensaje “No se encontraron resultados” |
| CP-05 | Presionar el botón limpiar | Se restablece el input y reaparecen todos los registros |

## 12. Resultados obtenidos

Al cierre del Día 2, el módulo de filtros logró los siguientes resultados:

- se implementó un componente visible y operativo;
- se habilitó el ingreso de texto mediante input funcional;
- se logró filtrar información por territorio o categoría;
- se incorporaron acciones de aplicar y limpiar;
- se mostró retroalimentación visible al usuario mediante resultados;
- se validó el comportamiento básico con pruebas unitarias;
- el módulo quedó funcionando de manera independiente.

## 13. Relación con las métricas del sprint

El trabajo desarrollado aporta directamente al cumplimiento de las métricas establecidas para el Día 2:

### 13.1 40% de funcionalidad total

El módulo de filtros ya no se encuentra únicamente definido a nivel lógico, sino que presenta una funcionalidad visible y ejecutable, contribuyendo al avance global del sistema.

### 13.2 100% de módulos ejecutándose de forma independiente

El filtro fue desarrollado con datos simulados y lógica propia, lo que permite su ejecución autónoma sin necesidad de integración inmediata con otros módulos.

## 14. Limitaciones actuales

Si bien el módulo ya cuenta con una funcionalidad mínima visible, en esta fase aún no se han implementado:

- conexión con endpoint real de datos;
- integración con el mapa;
- integración con gráficos;
- filtros múltiples combinados;
- validaciones avanzadas;
- pruebas integrales entre módulos.

Estas tareas corresponden a las siguientes etapas del sprint, especialmente a la fase de integración y pruebas conjuntas.

## 15. Conclusión

El trabajo realizado en el **Día 2 del Sprint 1** permitió transformar la definición lógica del módulo de filtros en un componente funcional, visible e independiente, cumpliendo con el objetivo establecido para esta jornada. La implementación del filtro simple con input funcional constituye un avance concreto dentro del desarrollo del dashboard de GeoBolivia, ya que proporciona una base operativa para futuras integraciones con mapa, gráficos y backend.

Desde un punto de vista técnico y metodológico, el componente desarrollado responde adecuadamente a la fase del sprint, manteniendo un equilibrio entre simplicidad, funcionalidad y preparación para el crecimiento del sistema.