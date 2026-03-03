---
Responsable: Tonny Edzon Torrez Cruz
Rol: Developer
Sprint: 1
Fecha: 24/02/2026
Categoría: Requerimientos No Funcionales
Estado: Completado
Revisado por: Jose Alcozer (Product Owner)
---
# 5. Requerimientos No Funcionales, Técnicas de Elicitación y Cierre

## 5.1. Fase B: Técnicas de Elicitación (Extracción de Información)

Para este proyecto, se seleccionaron las siguientes técnicas:

### 1. Entrevistas
- **Descripción:** Reuniones 1 a 1 con usuarios clave (Responsable de GeoBolivia/IDE-EPB).
- **Objetivo:** Obtener información detallada sobre flujos de trabajo actuales.
- **Responsable:** Elias Churqui Zarate, Alex Rosales Quispe

### 2. Análisis Documental
- **Descripción:** Revisión de reportes actuales y documentación técnica existente.
- **Objetivo:** Identificar patrones de información y requisitos normativos.
- **Responsable:** Kevin Abdias Flores Escobar, Jose Alcozer Martinez

## 5.2. Requerimientos No Funcionales (RNF)

| ID | Categoría | Descripción Técnica | Métrica de Éxito |
|----|-----------|---------------------|------------------|
| **RNF-01** | Seguridad | Las contraseñas no deben guardarse en texto plano. | Uso de bcrypt/Argon2 para almacenamiento de credenciales. |
| **RNF-02** | Seguridad | Comunicación encriptada entre cliente y servidor. | Implementación de HTTPS/TLS. |
| **RNF-03** | Rendimiento | Tiempo de respuesta en búsquedas y carga de mapas. | Menos de 1 segundo con 10,000 registros. |
| **RNF-04** | Rendimiento | Carga inicial del tablero. | Tiempo de carga inicial menor a 3 segundos. |
| **RNF-05** | Compatibilidad | Dispositivos soportados. | Web Responsive (Móvil y Escritorio). |

## 5.3. Validación y Cierre

- [ ] ¿Son los requerimientos claros y sin ambigüedades?
- [ ] ¿Son los requerimientos medibles (se pueden probar)?
- [ ] ¿Todos los stakeholders clave han aprobado esta lista?
- [ ] ¿Se han identificado riesgos técnicos asociados a los requerimientos complejos?