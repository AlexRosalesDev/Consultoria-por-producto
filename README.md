# Guía de Trabajo: Identificación de Requerimientos para un Proyecto Real

**Versión del Documento:** 1.0  
**Fecha:** 12/02/2026

**Autor:**

- Elias Churqui Zarate
- Alex Rosales Quispe
- Kevin Abdias Flores Escobar
- Jose Alcozer Martinez
- Tonny Edzon Torrez Cruz

---

## 1. Introducción y Objetivo

El propósito de esta guía es proporcionar un marco estructurado para descubrir, analizar y documentar los requerimientos de un proyecto de software o ingeniería. Un buen levantamiento de requerimientos reduce el riesgo de fracaso del proyecto, sobrecostos y malentendidos con el cliente.

**¿Qué es un Requerimiento?**
Es una condición o capacidad que debe cumplir el sistema para satisfacer un contrato, estándar, especificación u otro documento formalmente impuesto.

## 2. Fases de la Identificación

### Fase A: Definición del Contexto y Stakeholders (Interesados)

Antes de hablar de funciones, debemos entender quiénes interactúan con el sistema.

- **Stakeholders Clave:** ¿Quién paga? ¿Quién lo usa? ¿Quién lo mantiene?
- **Problema de Negocio:** ¿Qué dolor o necesidad resuelve este software?
- **Alcance (Scope):** ¿Qué INCLUYE el proyecto y qué NO INCLUYE (Exclusiones)?

### Fase B: Técnicas de Elicitación (Extracción de Información)

Selecciona al menos dos técnicas para tu proyecto:

1.  **Entrevistas:** Reuniones 1 a 1 con usuarios clave.
2.  **Lluvia de Ideas (Brainstorming):** Sesión grupal para generar ideas sin filtros.
3.  **Observación (Shadowing):** Ver cómo trabajan los usuarios actualmente.
4.  **Análisis Documental:** Revisar reportes actuales, excels o sistemas legados.
5.  **Prototipado:** Mostrar bocetos rápidos para recibir feedback.

### Fase C: Clasificación de Requerimientos

1.  **Requerimientos de Negocio**
    Objetivos de alto nivel de la organización (Ej: "Reducir el tiempo de facturación en un 20%").

2.  **Requerimientos de Usuario**
    Lo que el usuario necesita hacer con el sistema (Ej: "El cajero necesita registrar una venta rápidamente").

3.  **Requerimientos Funcionales (RF)**
    Comportamientos específicos del sistema. Se redactan generalmente como:
    "El sistema debe permitir [ACCIÓN] a [ACTOR] para [OBJETIVO]."

    - **Ejemplo:** El sistema debe permitir al administrador generar un reporte PDF de ventas mensuales.

4.  **Requerimientos No Funcionales (RNF) - Atributos de Calidad**
    Cómo debe comportarse el sistema (Restricciones). Usa el acrónimo URPS:
    - **Usabilidad** (Facilidad de uso, colores, accesibilidad).
    - **Reliability** (Confiabilidad, disponibilidad 24/7).
    - **Performance** (Rendimiento, tiempos de carga < 2 seg).
    - **Supportability** (Mantenibilidad, facilidad de instalación, escalabilidad).
    - **Extra:** Seguridad (Encriptación, roles, backups).

## 3. Hoja de Trabajo Práctica (Plantilla)

*Instrucciones: Rellena esta sección con los datos de tu proyecto real.*

### 3.1. Ficha del Proyecto

| Concepto | Descripción |
| :--- | :--- |
| **Nombre del Proyecto** | Desarrollo de Tableros de Control Geoespacial para Cambio Climático – GeoBolivia |
| **Problema a Resolver** | Los sistemas actuales de información geoespacial presentan los datos en un formato poco claro y complicado de interpretar. Esto hace que a los técnicos les tome más tiempo analizar la información y, como consecuencia, se pierde o no se aprovecha correctamente información valiosa al momento de tomar decisiones. |
| **Objetivo Principal** | Procesar y sistematizar información geográfica y estadística para desplegarla en tableros de control web interactivos, actualizables en tiempo real y accesibles desde cualquier dispositivo. |

### 3.2. Matriz de Stakeholders

| Rol | Nombre/Cargo | Nivel de Influencia (Alto/Medio/Bajo) | Expectativa Principal |
| :--- | :--- | :--- | :--- |
| **Cliente / Patrocinador** | Pro-Rural / COSUDE Vicepresidente | Alto | Cumplimiento del resultado 1 del convenio entrega en 45 dias |
| **Usuario Final** | Responsable de GeoBolivia/IDE- EPB | Alto | Obtener una herramienta funcional alinieada a la normativa técnica de geobolivia |
| **Equipo Técnico** | Alex Rosales Quispe, Jose Alcocer Martinez, Elias Churqui Zarate, Kevin Abdias Flores Escobar, Tonny Edzon Torrez Cruz | - | - |

### 3.3. Listado de Requerimientos Funcionales (RF)

*Prioridad: MoSCoW (Must, Should, Could, Won't have)*

| ID | Descripción del Requerimiento | Prioridad | Criterio de Aceptación |
| :--- | :--- | :--- | :--- |
| **RF-01** | El sistema debe validar las credenciales de usuario (Login). | Must | Acceso denegado tras 3 intentos fallidos. |
| **RF-02** | El sistema debe mostrar datos dinámicos que se actualicen en tiempo real desde la base de datos geoespacial. | Must | Al actualizar la base de datos, los cambios deben reflejarse automáticamente en el tablero sin necesidad de reiniciar el sistema. |
| **RF-03** | El sistema debe permitir la vizualizacion de datos por categorias. | Must | El usuario debe poder seleccionar una categoría y visualizar únicamente los datos correspondientes en el mapa y en los gráficos. |
| **RF-04** | El sistema debe permitir al usuario generar reportes comparativos de indicadores climáticos entre diferentes periodos de tiempo y regiones geográficas. | Should | El sistema debe mostrar correctamente la comparación seleccionada y permitir exportar el reporte en formato PDF o Excel. |
| **RF-05** | El sistema debe cumplir con la normativa técnica de IDE-EPB. | Must | El sistema debe validar que los datos y servicios publicados cumplan con los estándares establecidos por la normativa técnica vigente antes de su publicación. |

### 3.4. Listado de Requerimientos No Funcionales (RNF)

| ID | Categoría | Descripción Técnica | Métrica de Éxito |
| :--- | :--- | :--- | :--- |
| **RNF-01** | Seguridad | Las contraseñas no deben guardarse en texto plano. | Uso de Hashing (bcrypt/Argon2). |
| **RNF-02** | Rendimiento | Tiempo de respuesta en búsquedas. | Menos de 1 segundo con 10k registros. |
| **RNF-03** | Compatibilidad | Dispositivos soportados. | Web Responsive (Móvil y Escritorio). |

### 3.5. Reglas de Negocio y Restricciones

*(Ej: El presupuesto es limitado a $X, o el sistema debe usar base de datos Oracle por política de la empresa).*

## 4. Validación y Cierre

Para dar por terminada esta fase, responde el siguiente Checklist:

- [x] ¿Son los requerimientos claros y sin ambigüedades?
- [x] ¿Son los requerimientos medibles (se pueden probar)?
- [ ] ¿Todos los stakeholders clave han aprobado esta lista?
- [ ] ¿Se han identificado riesgos técnicos asociados a los requerimientos complejos?

**Firma de Aprobación del Cliente:** `_________________________`

**Fecha:** `_________________________`
