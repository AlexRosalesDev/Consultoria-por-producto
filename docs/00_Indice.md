# ÍNDICE MAESTRO - ESPECIFICACIÓN DE REQUERIMIENTOS

**Proyecto:** Consultoría en Desarrollo de Sistemas - GeoBolivia
**Documento Fuente:** TDR "Consultor en Desarrollo de Sistemas - 2da Convocatoria" (PRO-RURAL / Vicepresidencia)
**Fecha de Análisis:** [Fecha actual]
**Versión SRS:** 1.0 (Derivación exhaustiva del TDR)

---

## ESTRUCTURA COMPLETA DEL DOCUMENTO

### 1. INTRODUCCIÓN Y CONTEXTO (`01_Introduccion_y_Contexto.md`)
- 1.1 Antecedentes del Proyecto (COSUDE, BBC, Vicepresidencia)
- 1.2 Marco Institucional y Convenios
- 1.3 Objetivo de la Consultoría (textual del TDR)
- 1.4 Resultados Esperados del Convenio
- 1.5 Análisis de STAKEHOLDERS (COMPLETO - 14 interesados identificados)
  - Matriz de stakeholders con roles, influencia y expectativas
  - Mapa de poder-interés
  - Estrategias de gestión por stakeholder
- 1.6 Alcance del Sistema (Inclusiones y Exclusiones explícitas)
- 1.7 Duración, Plazos y Condiciones Contractuales
- 1.8 Propiedad Intelectual y Confidencialidad

### 2. REQUERIMIENTOS FUNCIONALES (`02_Requerimientos_Funcionales.md`)
- **TOTAL: 28 REQUERIMIENTOS FUNCIONALES**

#### 2.1 Módulo de Procesamiento y Sistematización (RF-01 al RF-08)
- Recopilación de información (pública/privada)
- Procesamiento de datos geográficos y estadísticos
- Sistematización por sectores (agropecuario, agua, bosques)

#### 2.2 Módulo de Análisis y Estructura de Datos (RF-09 al RF-13)
- Análisis de estructura existente
- Propuesta de nueva estructura
- Análisis de base de datos actual
- Propuesta de despliegue

#### 2.3 Módulo de Gestión de Formatos Geoespaciales (RF-14 al RF-17)
- Metadatos
- Shapefiles
- Normativa IDE-EPB
- Estándares técnicos

#### 2.4 Módulo de Dashboard y Visualización (RF-18 al RF-24)
- Tableros de control web
- Actualización en tiempo real
- Visualización por categorías
- Mapas interactivos
- Acceso multiplataforma
- Búsquedas y consultas
- Descargas de información

#### 2.5 Módulo de Reportes y Apoyo a Decisiones (RF-25 al RF-28)
- Reportes para toma de decisiones
- Enfoque en pequeños productores
- Generación de propuestas (notas conceptuales)
- Integración con GeoBolivia

### 3. REQUERIMIENTOS NO FUNCIONALES Y DEVOPS (`03_Requerimientos_No_Funcionales_DevOps.md`)
- **TOTAL: 18 REQUERIMIENTOS NO FUNCIONALES**

#### 3.1 Usabilidad (RNF-01 al RNF-03)
- Manuales de usuario y administrador
- Idioma español
- Curva de aprendizaje

#### 3.2 Rendimiento (RNF-04 al RNF-07)
- Tiempo de carga
- Latencia de actualización
- Concurrencia de usuarios
- Optimización de consultas

#### 3.3 Seguridad (RNF-08 al RNF-11)
- Propiedad intelectual
- Confidencialidad
- Integridad de datos
- Control de acceso

#### 3.4 Mantenibilidad (RNF-12 al RNF-15)
- Documentación técnica
- Scripts de mantenimiento
- Código fuente documentado
- Guía de instalación

#### 3.5 Compatibilidad y Portabilidad (RNF-16 al RNF-18)
- Navegadores soportados
- Dispositivos (responsive)
- Integración con IDE-EPB

### 4. RESTRICCIONES (`04_Restricciones.md`)
- **TOTAL: 13 RESTRICCIONES**

#### 4.1 Restricciones de Tiempo (RTR-01 al RTR-04)
- Plazo máximo de consultoría
- Dedicación exclusiva
- Plazos de entrega de productos
- Plazos de revisión y ajustes

#### 4.2 Restricciones de Presupuesto (RTR-05 al RTR-07)
- Presupuesto máximo
- Modalidad de pago
- Impuestos y costos incluidos

#### 4.3 Restricciones Técnicas (RTR-08 al RTR-10)
- Cumplimiento normativa IDE-EPB
- Integración con GeoBolivia
- Tecnologías sugeridas (perfil)

#### 4.4 Restricciones Contractuales y Legales (RTR-11 al RTR-13)
- Propiedad intelectual
- Confidencialidad
- Modalidad de contratación

---

## RESUMEN CUANTITATIVO

| Categoría | Cantidad | Rango IDs |
|-----------|----------|-----------|
| Stakeholders | 14 | S-01 al S-14 |
| Requerimientos Funcionales | 28 | RF-01 al RF-28 |
| Requerimientos No Funcionales | 18 | RNF-01 al RNF-18 |
| Restricciones | 13 | RTR-01 al RTR-13 |
| **TOTAL ELEMENTOS** | **73** | - |

---

## REFERENCIA CRUZADA CON PRODUCTOS TDR

| Producto TDR | Requerimientos Asociados |
|--------------|--------------------------|
| Producto 1: Plan de Trabajo | RTR-03, RTR-04 |
| Producto 2: Informe estructura de datos | RF-07 al RF-13, RF-15, RF-16, RNF-12 |
| Producto 3: Aplicación Dashboard | RF-18 al RF-28, RNF-01 al RNF-07, RNF-16 al RNF-18 |
| Producto 4: Informe Final + Documentación | RNF-01, RNF-02, RNF-12 al RNF-15, RTR-08 |

(01_Introduccion_y_Contexto.md)