# 2. REQUERIMIENTOS FUNCIONALES (RF) - EXTREMADAMENTE DETALLADOS

**Total de Requerimientos Funcionales: 28**
**Numeración:** RF-01 al RF-28
**Base:** Análisis exhaustivo de todas las secciones del TDR

---

## 2.1 MÓDULO DE PROCESAMIENTO Y SISTEMATIZACIÓN (RF-01 al RF-08)

### RF-01: Procesar información geográfica de cambio climático
- **Descripción:** El sistema debe procesar información geográfica (geoespacial) en el ámbito de cambio climático.
- **Fuente TDR:** Objetivo: "Procesar... información geográfica"
- **Justificación:** La base de GeoBolivia es información georreferenciada.
- **Criterio de Aceptación:** El sistema acepta datos geoespaciales en formatos estándar (shapefile, GeoJSON, etc.) y los integra a la plataforma.

### RF-02: Procesar información estadística de cambio climático
- **Descripción:** El sistema debe procesar información estadística (datos tabulares, indicadores) en el ámbito de cambio climático.
- **Fuente TDR:** Objetivo: "Procesar... información... estadística"
- **Justificación:** Los dashboards requieren datos numéricos para gráficos y KPIs.
- **Criterio de Aceptación:** El sistema integra datos tabulares (CSV, Excel) con información geográfica, asociando estadísticas a geometrías.

### RF-03: Sistematizar información del sector agropecuario
- **Descripción:** El sistema debe sistematizar (organizar, catalogar, estructurar) la información geoespacial referida al sector agropecuario.
- **Fuente TDR:** Producto 1.2: "sistematizado información... sector agropecuario"
- **Justificación:** El sector agropecuario es prioritario para las políticas de adaptación climática.
- **Criterio de Aceptación:** Los datos agropecuarios están organizados en categorías claras (cultivos, ganadería, suelos, etc.) y son consultables.

### RF-04: Sistematizar información del sector agua/bosques
- **Descripción:** El sistema debe sistematizar la información geoespacial referida al sector agua y bosques.
- **Fuente TDR:** Producto 1.2: "sistematizado información... agua/bosques"
- **Justificación:** Recursos hídricos y bosques son críticos para la resiliencia climática.
- **Criterio de Aceptación:** Los datos de agua (cuencas, ríos, precipitación) y bosques (cobertura, deforestación) están organizados y catalogados.

### RF-05: Recopilar información de instituciones públicas
- **Descripción:** El sistema debe permitir la recopilación e integración de información proveniente de instituciones públicas.
- **Fuente TDR:** Objetivo: "información... de las instituciones públicas"
- **Justificación:** El estado boliviano genera gran cantidad de datos relevantes.
- **Criterio de Aceptación:** El sistema puede ingerir datos desde ministerios, gobiernos autónomos y otras entidades públicas.

### RF-06: Recopilar información de instituciones privadas
- **Descripción:** El sistema debe permitir la recopilación e integración de información proveniente de instituciones privadas.
- **Fuente TDR:** Objetivo: "información... de las instituciones... privadas"
- **Justificación:** ONGs, consultoras y empresas generan datos valiosos.
- **Criterio de Aceptación:** El sistema puede ingerir datos desde fuentes privadas autorizadas, con reconocimiento de fuente.

### RF-07: Socializar información a través de plataforma digital
- **Descripción:** El sistema debe permitir la socialización (publicación, difusión) de la información procesada a través de la plataforma digital de GeoBolivia.
- **Fuente TDR:** Producto 1.3: "Se ha socializado información... a través de la plataforma digital de GeoBolivia"
- **Justificación:** El objetivo final es que la información esté disponible públicamente.
- **Criterio de Aceptación:** Los dashboards y datos son accesibles desde el portal geo.gob.bo o integrados como nodo.

### RF-08: Mantener información actualizada
- **Descripción:** El sistema debe permitir la actualización periódica de la información para apoyar decisiones basadas en datos recientes.
- **Fuente TDR:** Resultado 2: "Con base en información actualizada de Cambio Climático"
- **Justificación:** Las decisiones de política pública requieren datos vigentes.
- **Criterio de Aceptación:** El sistema soporta actualizaciones programadas o manuales sin interrumpir el servicio.

---

## 2.2 MÓDULO DE ANÁLISIS Y ESTRUCTURA DE DATOS (RF-09 al RF-13)

### RF-09: Analizar estructura de datos existente
- **Descripción:** El sistema (a través de su proceso de implementación) debe incluir un análisis de la estructura de datos de información geoespacial actualmente disponible en GeoBolivia.
- **Fuente TDR:** Actividad: "Analizar la estructura de datos de la información geoespacial"
- **Justificación:** Para proponer mejoras, primero hay que entender el estado actual.
- **Criterio de Aceptación:** Se entrega un diagnóstico documentado de la estructura actual (formatos, organización, calidad).

### RF-10: Proponer estructura optimizada para dashboards
- **Descripción:** El sistema debe implementar una estructura de datos optimizada para el despliegue en tableros de control, basada en el análisis previo.
- **Fuente TDR:** Actividad: "proponer la que mejor se adecue para sistematizarla y desplegarla en tableros de control"
- **Justificación:** Los dashboards requieren estructuras de datos diferentes a los sistemas transaccionales.
- **Criterio de Aceptación:** La propuesta incluye modelo de datos, esquema de base de datos y justificación de la elección.

### RF-11: Analizar base de datos actual de GeoBolivia
- **Descripción:** El sistema debe incluir un análisis detallado de la base de datos de información geoespacial con la que cuenta actualmente GeoBolivia.
- **Fuente TDR:** Actividad: "Analizar la base de datos de información geoespacial con la que se cuenta actualmente"
- **Justificación:** Identificar fortalezas, debilidades y oportunidades de mejora.
- **Criterio de Aceptación:** Informe detallado del estado actual de la base de datos (volumen, rendimiento, integridad).

### RF-12: Proponer mejoras para despliegue estadístico
- **Descripción:** El sistema debe proponer e implementar mejoras específicas para el despliegue de información estadística en los tableros de control.
- **Fuente TDR:** Actividad: "realizar propuesta de despliegue de información informativa y estadística, para mostrar el tablero de control"
- **Justificación:** La visualización estadística requiere diseño específico (gráficos, indicadores).
- **Criterio de Aceptación:** Diseño de vistas optimizadas para dashboards con indicadores clave.

### RF-13: Implementar estructura según protocolos GeoBolivia
- **Descripción:** El sistema debe implementar la estructura de datos propuesta siguiendo los protocolos establecidos para ser implementados en la plataforma digital de GeoBolivia.
- **Fuente TDR:** Actividad: "de acuerdo a los protocolos establecidos para ser implementados en la plataforma digital de GeoBolivia"
- **Justificación:** Garantizar compatibilidad e integración.
- **Criterio de Aceptación:** La implementación sigue los estándares y protocolos documentados de GeoBolivia.

---

## 2.3 MÓDULO DE GESTIÓN DE FORMATOS GEOESPACIALES (RF-14 al RF-17)

### RF-14: Gestionar metadatos de información geoespacial
- **Descripción:** El sistema debe manejar metadatos asociados a cada capa o conjunto de datos geoespaciales.
- **Fuente TDR:** Producto 2: "metadatos, shapefile y otros"
- **Justificación:** Los metadatos son esenciales para la trazabilidad, calidad y confianza de los datos.
- **Criterio de Aceptación:** Cada capa de información incluye metadatos con: fuente, fecha de creación/actualización, descripción, contacto, proyección, metodología.

### RF-15: Gestionar shapefiles
- **Descripción:** El sistema debe permitir la importación, procesamiento y exportación de shapefiles como formato de intercambio geoespacial.
- **Fuente TDR:** Producto 2: "shapefile y otros"
- **Justificación:** Shapefile es el formato estándar de facto en muchas instituciones.
- **Criterio de Aceptación:** El sistema importa correctamente shapefiles (incluyendo .shp, .shx, .dbf, .prj) y puede exportar datos en este formato.

### RF-16: Cumplir normativa técnica IDE-EPB
- **Descripción:** El sistema debe cumplir con la normativa técnica establecida en la Infraestructura de Datos Espaciales del Estado Plurinacional de Bolivia (IDE-EPB).
- **Fuente TDR:** Producto 2: "de acuerdo a la normativa técnica establecida en la Infraestructura de Datos Espaciales del Estado Plurinacional de Bolivia y su nodo GeoBolivia"
- **Justificación:** Es un requisito contractual y técnico para la integración con GeoBolivia.
- **Criterio de Aceptación:** Validación de que los datos y servicios publicados cumplen con los estándares IDE-EPB (metadatos, sistemas de referencia, etc.).

### RF-17: Soportar otros formatos geoespaciales
- **Descripción:** El sistema debe soportar otros formatos geoespaciales además de shapefile, según sea necesario.
- **Fuente TDR:** Producto 2: "shapefile y otros"
- **Justificación:** Pueden existir datos en formatos alternativos (GeoJSON, KML, GeoTIFF).
- **Criterio de Aceptación:** El sistema procesa al menos un formato adicional (GeoJSON recomendado por ser web-friendly).

---

## 2.4 MÓDULO DE DASHBOARD Y VISUALIZACIÓN (RF-18 al RF-24)

### RF-18: Desplegar información en tableros de control web
- **Descripción:** El sistema debe desplegar la información procesada en tableros de control (dashboards) accesibles vía web.
- **Fuente TDR:** Actividad: "desplegarla en tableros de control (dashboards)" y Producto 3: "Software o plataforma de despliegue de información en entorno web"
- **Justificación:** El producto principal es un dashboard interactivo.
- **Criterio de Aceptación:** El dashboard es accesible mediante URL pública/privada desde cualquier navegador web moderno.

### RF-19: Mostrar datos dinámicos con actualización en tiempo real
- **Descripción:** El sistema debe mostrar datos dinámicos que se actualicen en tiempo real desde la base de datos geoespacial.
- **Fuente TDR:** Producto 3: "mostrando datos dinámicos que se vayan actualizando a tiempo real con la información de la base de datos de información geográfica"
- **Justificación:** La información climática puede cambiar frecuentemente (ej: datos meteorológicos).
- **Criterio de Aceptación:** Cuando se modifica un registro en la base de datos, el cambio se refleja en el dashboard en menos de 60 segundos sin necesidad de recargar manualmente la página.

### RF-20: Desplegar información por categorías temáticas
- **Descripción:** El sistema debe permitir la visualización de información desplegada por categorías en el ámbito de cambio climático.
- **Fuente TDR:** Actividad: "ámbito de cambio climático referida al sector agropecuario y agua/bosque" y Producto 3: "desplegado por categorías"
- **Justificación:** Los usuarios necesitan filtrar la información según su área de interés.
- **Criterio de Aceptación:** El dashboard permite filtrar la visualización por al menos: (1) Sector Agropecuario, (2) Sector Agua, (3) Sector Bosques, y subcategorías relevantes.

### RF-21: Integrar mapas interactivos
- **Descripción:** El sistema debe integrar mapas interactivos que muestren la información georreferenciada.
- **Fuente TDR:** Producto 2 (implícito por shapefiles y metadatos geoespaciales)
- **Justificación:** GeoBolivia es una infraestructura de datos espaciales; los mapas son centrales.
- **Criterio de Aceptación:** El dashboard incluye un visor de mapas con funcionalidades: zoom, pan, selección de capas, popups con información.

### RF-22: Ser accesible desde cualquier dispositivo
- **Descripción:** El sistema debe ser accesible desde cualquier dispositivo con conexión a internet (computadora, tablet, smartphone).
- **Fuente TDR:** Producto 3: "entorno web accesible desde cualquier dispositivo"
- **Justificación:** Los tomadores de decisiones pueden necesitar acceder desde diferentes lugares y dispositivos.
- **Criterio de Aceptación:** La interfaz es responsiva y funcional en resoluciones desde 320px (móvil) hasta 4K (desktop).

### RF-23: Permitir búsquedas de información
- **Descripción:** El sistema debe ofrecer la posibilidad de efectuar búsquedas de información geográfica.
- **Fuente TDR:** Antecedentes: "ofreciendo la posibilidad de efectuar búsquedas, consultas y descargas"
- **Justificación:** Funcionalidad base de GeoBolivia que debe mantenerse.
- **Criterio de Aceptación:** El dashboard incluye un campo de búsqueda por palabra clave, ubicación geográfica o categoría.

### RF-24: Permitir consultas y descargas de información
- **Descripción:** El sistema debe permitir consultas detalladas y descargas de la información visualizada.
- **Fuente TDR:** Antecedentes: "consultas y descargas"
- **Justificación:** Los usuarios técnicos necesitan acceder a los datos brutos para análisis propios.
- **Criterio de Aceptación:** El sistema permite descargar los datos visualizados en formatos estándar (CSV para datos tabulares, shapefile para datos geoespaciales).

---

## 2.5 MÓDULO DE REPORTES Y APOYO A DECISIONES (RF-25 al RF-28)

### RF-25: Apoyar la toma de decisiones en cambio climático
- **Descripción:** El sistema debe proporcionar información estructurada que apoye la toma de decisiones en el ámbito de cambio climático.
- **Fuente TDR:** Antecedentes: "apoya a la toma de decisiones en el Estado Plurinacional en el ámbito de cambio climático"
- **Justificación:** Es el propósito último del fortalecimiento de GeoBolivia.
- **Criterio de Aceptación:** Los dashboards incluyen indicadores clave (KPIs) relevantes para políticas de adaptación al cambio climático.

### RF-26: Enfocar información en pequeños productores
- **Descripción:** El sistema debe permitir visualizar y analizar información con énfasis en pequeños productores, segmentando por regiones o municipios.
- **Fuente TDR:** Resultado 2: "con énfasis en pequeños productores"
- **Justificación:** Las políticas de adaptación deben llegar a los más vulnerables.
- **Criterio de Aceptación:** La información puede filtrarse por municipios o regiones con alta concentración de pequeños productores agrícolas.

### RF-27: Facilitar elaboración de propuestas para fondos climáticos
- **Descripción:** El sistema debe proporcionar información que facilite la elaboración de propuestas (notas conceptuales) para fondos climáticos verticales.
- **Fuente TDR:** Resultado 2: "elaborar y gestionar propuestas o notas conceptuales de proyecto de adaptación... presentadas a un fondo climático vertical"
- **Justificación:** El fin último es conseguir financiamiento para proyectos de adaptación.
- **Criterio de Aceptación:** El sistema permite generar reportes con la estructura de información requerida por fondos climáticos (ej: impacto esperado, líneas base, indicadores).

### RF-28: Integrar con el Órgano Rector del Sistema de Planificación
- **Descripción:** El sistema debe permitir la coordinación con el Órgano Rector del Sistema de Planificación Integral del Estado para la elaboración de propuestas.
- **Fuente TDR:** Resultado 2: "vía el Órgano Rector del Sistema de Planificación Integral del Estado"
- **Justificación:** Las propuestas deben seguir los cauces institucionales establecidos.
- **Criterio de Aceptación:** La información del sistema puede ser exportada en formatos compatibles con los sistemas de planificación del Estado.

---

## 2.6 MATRIZ DE TRAZABilidad RF vs PRODUCTOS TDR

| Producto TDR | Requerimientos Asociados |
|--------------|--------------------------|
| Producto 1.1: Recopilación de información | RF-05, RF-06 |
| Producto 1.2: Sistematización de información | RF-03, RF-04, RF-14, RF-15, RF-16, RF-17 |
| Producto 1.3: Socialización en plataforma | RF-07, RF-28 |
| Producto 2: Informe estructura de datos | RF-09, RF-10, RF-11, RF-12, RF-13, RF-14, RF-15, RF-16 |
| Producto 3: Aplicación Dashboard | RF-18, RF-19, RF-20, RF-21, RF-22, RF-23, RF-24 |
| Producto 4: Informe Final | RF-01, RF-02 (documentados) |
| Resultado 2: Propuestas para fondos | RF-25, RF-26, RF-27, RF-28 |

(03_Requerimeintos_No_Funcionales.md)