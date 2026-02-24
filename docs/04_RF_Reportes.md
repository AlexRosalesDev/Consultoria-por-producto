---
Responsable: Kevin Abdias Flores Escobar
Rol: Developer
Sprint: 1
Fecha: 24/02/2026
Prioridad: SHOULD (Debería tener)
Estado: Completado
Revisado por: Jose Alcozer (Product Owner)
---
# 4. Requerimientos Funcionales - Reportes y Análisis

## 4.1. Requerimientos Funcionales de Reportes (Prioridad SHOULD/COULD)

| ID | Descripción del Requerimiento | Prioridad | Criterio de Aceptación |
|----|------------------------------|-----------|------------------------|
| **RF-04** | El sistema debe permitir al usuario generar reportes comparativos de indicadores climáticos entre diferentes periodos de tiempo y regiones geográficas. | SHOULD | El sistema debe mostrar correctamente la comparación seleccionada y permitir exportar el reporte en formato PDF o Excel. |
| **RF-08** | El sistema debe permitir al usuario visualizar tendencias históricas de datos climáticos en formato de gráficos (líneas, barras). | SHOULD | Los gráficos deben generarse dinámicamente según el rango de fechas seleccionado. |
| **RF-09** | El sistema debe permitir al usuario guardar vistas personalizadas (combinaciones de capas y filtros). | COULD | El usuario puede guardar una configuración de visualización y recuperarla posteriormente. |
| **RF-10** | El sistema debe permitir la generación de reportes automáticos programados (diarios, semanales, mensuales). | COULD | El sistema envía por correo electrónico los reportes según la programación definida. |

## 4.2. Requerimientos de Visualización de Datos

### Capas de Información Base
- **RF-11:** El sistema debe mostrar una capa base cartográfica del territorio boliviano.
- **RF-12:** El sistema debe permitir superponer múltiples capas temáticas.
- **RF-13:** El sistema debe mostrar coordenadas geográficas al hacer clic en el mapa.

### Interactividad
- **RF-14:** El sistema debe permitir hacer zoom in/out en el mapa.
- **RF-15:** El sistema debe mostrar información contextual (tooltips) al pasar el cursor sobre elementos del mapa.
- **RF-16:** El sistema debe permitir la selección de áreas geográficas mediante polígonos.

## 4.3. Matriz de Trazabilidad RF - Objetivos de Negocio

| ID Requerimiento | Objetivo de Negocio Relacionado | Prioridad |
|-----------------|--------------------------------|-----------|
| RF-04, RF-08 | Facilitar la toma de decisiones basada en datos | SHOULD |
| RF-09, RF-10 | Centralizar la información climática | COULD |
| RF-11 al RF-16 | Mejorar la experiencia de usuario | SHOULD |