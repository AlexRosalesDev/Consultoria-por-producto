# 05. Historias de Usuario

## 5.1 Tabla de Trazabilidad (RF → HU)

| ID RF | ID HU | Relación |
|---|---|---|
| RF-04, RF-05, RF-09, RF-10 | HU-01 | Visualización de dashboard y mapa |
| RF-06, RF-08 | HU-02 | Búsqueda geográfica |
| RF-07 | HU-03 | Búsqueda por atributos |
| RF-11, RF-12 | HU-04 | Descarga de información con control por rol |
| RF-13, RF-14, RF-15, RF-19 | HU-05 | Carga y validación administrativa |
| RF-20, RF-21 | HU-06 | Acceso público y restringido |
| RF-16, RF-17 | HU-07 | Publicación interoperable |
| RF-18 | HU-08 | Actualización incremental |
| RF-02, RF-03, RF-23, RF-24 | HU-09 | Uso analítico |
| RF-01, RF-13, RF-14 | HU-10 | Integración y limpieza |

---

## 5.2 Product Backlog (Historias de Usuario)

### HU-01 (Must)
**Como** técnico de GeoBolivia  
**Quiero** visualizar dashboards con mapas e indicadores  
**Para** interpretar información rápidamente  

**Criterios:**
- Mapa interactivo + gráficos
- Filtros dinámicos
- Acceso web

---

### HU-02 (Must)
**Como** usuario técnico  
**Quiero** buscar municipios  
**Para** centrar el mapa  

**Criterios:**
- Buscador geográfico
- Centrado automático
- Datos válidos

---

### HU-03 (Should)
**Como** analista  
**Quiero** filtrar por atributos  
**Para** identificar condiciones  

**Criterios:**
- Búsqueda por palabra clave
- Reflejo en mapa
- Datos validados

---

### HU-04 (Must)
**Como** usuario autorizado  
**Quiero** descargar datos  
**Para** analizarlos  

**Criterios:**
- CSV disponible
- GeoJSON/Shapefile
- Control por rol

---

(continúas igual hasta HU-10)
