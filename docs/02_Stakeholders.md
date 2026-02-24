---
Responsable: Elias Churqui Zarate
Rol: Developer
Sprint: 1
Fecha: 24/02/2026
Estado: Completado
Revisado por: Jose Alcozer (Product Owner)
---

# 2. Stakeholders y Reglas de Negocio

## 2.1. Fase A: Definición del Contexto y Stakeholders
Antes de hablar de funciones, debemos entender quiénes interactúan con el sistema.

- **Stakeholders Clave:** Identificamos quién paga, quién usa y quién mantiene el sistema.
- **Problema de Negocio:** Dolor o necesidad que resuelve este software.
- **Alcance (Scope):** Límites del proyecto.

## 2.2. Matriz de Stakeholders

| Rol | Nombre/Cargo | Nivel de Influencia | Expectativa Principal |
|-----|--------------|---------------------|----------------------|
| **Cliente / Patrocinador** | Pro-Rural / COSUDE - Vicepresidente | Alto | Cumplimiento del resultado 1 del convenio (entrega en 45 días) |
| **Usuario Final** | Responsable de GeoBolivia/IDE-EPB | Alto | Herramienta funcional alineada a la normativa técnica de GeoBolivia |

### Equipo de Desarrollo (Scrum)

| Rol Scrum | Nombre | Nivel de Influencia | Expectativa Principal |
|-----------|--------|---------------------|----------------------|
| **Scrum Master** | Alex Rosales Quispe | Alto | Facilitar el proceso Scrum y asegurar la calidad de los entregables |
| **Product Owner** | Jose Alcozer Martinez | Alto | Maximizar el valor del producto y priorizar el backlog |
| **Developer** | Elias Churqui Zarate | Alto | Documentar stakeholders y reglas de negocio |
| **Developer** | Kevin Abdias Flores Escobar | Alto | Especificar reportes y criterios de aceptación |
| **Developer** | Tonny Edzon Torrez Cruz | Alto | Definir requerimientos no funcionales y métricas de calidad |

## 2.3. Reglas de Negocio y Restricciones

### Reglas de Negocio
1. **RN-01:** Todos los datos geoespaciales publicados deben cumplir con la normativa técnica de IDE-EPB antes de su visualización.
2. **RN-02:** El acceso al sistema requiere autenticación mediante credenciales válidas.
3. **RN-03:** Los reportes generados deben mantener la integridad de los datos fuente.
4. **RN-04:** Las actualizaciones en tiempo real deben preservar el historial de cambios.

### Restricciones Técnicas
1. **RT-01:** El presupuesto está limitado a recursos de software libre y de código abierto.
2. **RT-02:** El sistema debe ser compatible con los principales navegadores web (Chrome, Firefox, Edge, Safari).
3. **RT-03:** Se debe utilizar únicamente tecnologías que permitan despliegue en la nube.
4. **RT-04:** El código fuente debe estar documentado en español.