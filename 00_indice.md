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