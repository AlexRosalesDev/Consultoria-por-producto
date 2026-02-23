# 3. Requerimientos Funcionales - Módulo Principal

## 3.1. Clasificación de Requerimientos

### Requerimientos de Negocio
- **RN-01:** Reducir el tiempo de análisis de información geoespacial en un 30%.
- **RN-02:** Centralizar la información climática de Bolivia en una sola plataforma.
- **RN-03:** Facilitar la toma de decisiones basada en datos actualizados.

### Requerimientos de Usuario
- **RU-01:** El usuario final necesita visualizar datos climáticos en un mapa interactivo.
- **RU-02:** El administrador necesita gestionar los accesos al sistema.
- **RU-03:** El técnico necesita filtrar información por categorías específicas.

## 3.2. Requerimientos Funcionales (Prioridad MUST)

| ID | Descripción del Requerimiento | Prioridad | Criterio de Aceptación |
|----|------------------------------|-----------|------------------------|
| **RF-01** | El sistema debe validar las credenciales de usuario (Login) mediante un formulario de autenticación. | MUST | Acceso denegado tras 3 intentos fallidos; mensaje claro de error. |
| **RF-02** | El sistema debe mostrar datos dinámicos que se actualicen en tiempo real desde la base de datos geoespacial. | MUST | Al actualizar la base de datos, los cambios deben reflejarse automáticamente en el tablero sin necesidad de reiniciar el sistema. |
| **RF-03** | El sistema debe permitir la visualización de datos por categorías (temperatura, precipitación, humedad, etc.). | MUST | El usuario debe poder seleccionar una categoría y visualizar únicamente los datos correspondientes en el mapa y en los gráficos. |
| **RF-05** | El sistema debe cumplir con la normativa técnica de IDE-EPB para datos geoespaciales. | MUST | El sistema debe validar que los datos y servicios publicados cumplan con los estándares establecidos por la normativa técnica vigente antes de su publicación. |