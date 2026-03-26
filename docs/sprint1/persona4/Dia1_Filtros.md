# AVANCE DEL DÍA 1 – SPRINT 1  
# DESARROLLO DEL MÓDULO DE FILTROS DEL DASHBOARD EN EL SISTEMA GEOBOLIVIA

## 1. Introducción

En el contexto actual de la transformación digital, el desarrollo de sistemas de información geográfica orientados a la gestión, visualización y análisis de datos territoriales constituye una herramienta estratégica para la toma de decisiones. En este marco surge el proyecto **GeoBolivia**, concebido como una solución informática destinada a integrar funcionalidades de consulta, visualización, validación y acceso a información geográfica y climática mediante una plataforma estructurada por módulos.

Dentro de la planificación general del proyecto, el equipo de desarrollo definió un **Sprint 1** con el objetivo de entregar una primera versión funcional base del sistema, contemplando componentes esenciales como la visualización inicial del dashboard, la búsqueda geográfica, el control básico de acceso, la descarga básica de información, la carga inicial y la validación previa de integridad antes de insertar datos. Para lograr una ejecución ordenada y progresiva, el trabajo fue distribuido entre cinco integrantes, asignando responsabilidades específicas a cada uno.

En este contexto, la **Persona 4** asumió las tareas vinculadas al módulo de **Filtros**, así como funciones relacionadas con **QA, pruebas y documentación técnica**. Durante el **Día 1 del Sprint 1**, cuyo enfoque estuvo centrado en la planificación, el diseño y la estructuración inicial del sistema, se trabajó en la definición lógica del módulo de filtros del dashboard, estableciendo sus bases funcionales, su organización técnica y la documentación necesaria para respaldar su posterior integración con los demás componentes del sistema.

El presente documento expone, de manera formal y académica, el avance correspondiente al primer día de trabajo en el módulo de filtros del sistema GeoBolivia, detallando el propósito del desarrollo realizado, el alcance del trabajo ejecutado, la lógica planteada, las decisiones técnicas adoptadas y la forma en que este avance contribuye al cumplimiento de la historia de usuario asignada y de los objetivos del Sprint 1.

## 2. Contextualización del Sprint 1

El Sprint 1 del proyecto GeoBolivia fue definido como la primera etapa de construcción funcional del sistema, priorizando aquellos componentes indispensables para disponer de una base operativa inicial. Dentro de las historias de usuario seleccionadas para esta etapa se incluyeron aquellas relacionadas con la visualización del dashboard, la búsqueda geográfica, la descarga básica con control por rol, la carga y validación administrativa, el acceso público y restringido, así como la integración y limpieza de datos.

De acuerdo con la organización del equipo, se estableció una división de responsabilidades entre cinco participantes. En dicha distribución, la Persona 4 fue asignada al trabajo de filtros, pruebas, control de calidad y documentación. A su vez, en el marco de la historia de usuario HU-01, su participación contribuye al desarrollo del dashboard mediante la definición de mecanismos de filtrado que permitan al usuario interactuar con la información geográfica y climática de manera más precisa.

## 3. Historia de usuario relacionada

La historia de usuario que enmarca este avance es la siguiente:

**HU-01 (Must):**  
*Como técnico de GeoBolivia, quiero visualizar dashboards con mapas e indicadores climáticos para interpretar rápidamente la información por categoría y territorio.*

La relación entre esta historia de usuario y el módulo de filtros es directa, puesto que la visualización útil y comprensible de un dashboard depende de la posibilidad de restringir o segmentar la información mostrada. En este sentido, los filtros constituyen un componente fundamental, ya que permiten al usuario seleccionar criterios específicos para delimitar la información de interés y mejorar la interpretación de los datos.

## 4. Objetivo del trabajo desarrollado en el Día 1

El objetivo específico del trabajo realizado durante el Día 1 fue **definir y estructurar la base inicial del módulo de filtros del dashboard**, estableciendo una lógica funcional preliminar, una organización técnica clara y una documentación de apoyo que sirva como sustento para el desarrollo posterior del componente.

De manera puntual, se buscó:

- identificar los filtros mínimos necesarios para la primera versión del dashboard;
- establecer el comportamiento esperado del módulo;
- plantear la estructura inicial de interfaz;
- definir validaciones básicas;
- preparar insumos de pruebas y control de errores;
- dejar el componente listo para evolucionar en las siguientes jornadas del sprint.

## 5. Alcance del avance correspondiente al Día 1

Durante esta primera jornada no se pretendió alcanzar una implementación completa del filtro, sino construir una base sólida y bien documentada. El alcance del avance se centró en los siguientes aspectos:

- definición del conjunto inicial de filtros;
- diseño lógico de su funcionamiento;
- estructuración preliminar del panel de filtros;
- planteamiento de validaciones mínimas;
- diseño de acciones de aplicar y limpiar;
- organización de la documentación de pruebas;
- preparación de una plantilla para registro de errores.

En consecuencia, este avance responde a la meta grupal del Día 1, la cual consistía en contar con el proyecto inicial creado, la estructura de carpetas definida y el código base iniciado, contribuyendo además a la métrica de tener el 100% de módulos definidos y aproximadamente el 20% del código base implementado.

## 6. Definición del módulo de filtros

Para la primera base funcional del dashboard se consideró pertinente trabajar con un conjunto reducido de filtros, priorizando aquellos que resultan más representativos para una plataforma geográfica y climática. Los filtros inicialmente definidos fueron los siguientes:

- **Territorio**
- **Categoría**
- **Fecha desde**
- **Fecha hasta**

La elección de estos filtros responde a criterios de claridad, utilidad y escalabilidad. En lugar de incorporar desde el inicio una gran cantidad de opciones o combinaciones complejas, se optó por establecer un núcleo funcional que permita organizar la información del dashboard a partir de variables territoriales, temáticas y temporales. Esta decisión favorece un desarrollo progresivo y ordenado, coherente con la metodología del sprint.

## 7. Diseño lógico propuesto

La lógica base del módulo de filtros fue concebida para responder a un flujo simple y controlado. En términos generales, se estableció que el componente deberá permitir al usuario seleccionar o ingresar criterios, almacenarlos temporalmente, validarlos y posteriormente aplicarlos al dashboard.

La lógica definida contempla los siguientes comportamientos:

- mantenimiento de un estado inicial de filtros;
- actualización de cada filtro según la interacción del usuario;
- validación del rango de fechas antes de aplicar el filtrado;
- ejecución explícita mediante un botón de aplicación;
- restablecimiento del módulo mediante un botón de limpieza.

Este diseño evita realizar acciones automáticas innecesarias y permite un mayor control del comportamiento del componente, especialmente pensando en su futura integración con mapa, gráficos y fuentes reales de datos.

## 8. Estructura funcional del panel de filtros

Desde el punto de vista de interfaz, se propuso una estructura simple, legible y funcional para el panel de filtros del dashboard. Dicha estructura contempla:

- una lista desplegable para seleccionar el territorio;
- una lista desplegable para seleccionar la categoría;
- un campo de fecha inicial;
- un campo de fecha final;
- un botón para aplicar filtros;
- un botón para limpiar filtros.

Este enfoque responde a un criterio de usabilidad básica, permitiendo que el usuario identifique de manera inmediata los campos relevantes y las acciones disponibles. Asimismo, la organización planteada facilita futuras mejoras visuales o funcionales sin alterar la lógica fundamental del módulo.

## 9. Validación inicial del módulo

Como parte del diseño técnico, se incorporó una validación elemental orientada a preservar la coherencia de los datos ingresados por el usuario. La regla definida en esta etapa fue la siguiente:

- la **fecha desde** no puede ser mayor que la **fecha hasta**.

Esta validación fue seleccionada por su relevancia práctica y por su bajo nivel de complejidad, lo que la convierte en una medida adecuada para una fase inicial de desarrollo. Más adelante, el módulo podrá incorporar validaciones complementarias, pero en el Día 1 resultó prioritario dejar establecida una primera capa de control que contribuya a la integridad de la información.

## 10. Organización técnica del módulo

Con el propósito de mantener el código ordenado, comprensible y escalable, se planteó una estructura modular para el desarrollo del componente. La organización propuesta diferencia entre lógica, interfaz, utilidades, pruebas y documentación, lo que permite distribuir claramente las responsabilidades dentro del módulo.

La estructura base considerada fue la siguiente:

```bash
src/
  components/
    filters/
      FilterPanel.jsx
  hooks/
    useDashboardFilters.js
  utils/
    filterValidation.js
  tests/
    filters/
      filterValidation.test.js

docs/
  sprint1/
    P4_Dia1_Filtros.md
    P4_Plan_Pruebas.md
    P4_Registro_Errores.md

## 11. Justificación técnica de las decisiones adoptadas

Las decisiones tomadas durante el Día 1 no responden únicamente a una preferencia de estilo, sino a criterios técnicos propios de un desarrollo de software bien estructurado.

En primer lugar, se consideró necesario **separar la lógica del comportamiento del componente visual**, con el fin de evitar que un solo archivo concentre estados, validaciones, reglas de negocio y presentación. Esta separación mejora la mantenibilidad del código y facilita tanto su lectura como su evolución posterior.

En segundo lugar, se optó por **definir un conjunto mínimo de filtros**, ya que una implementación demasiado amplia en una etapa temprana habría incrementado innecesariamente la complejidad del módulo. Al iniciar con filtros esenciales, se garantiza una base clara sobre la cual luego pueden añadirse nuevas funcionalidades.

En tercer lugar, la incorporación de una **validación básica de fechas** responde a la necesidad de proteger la coherencia de los datos desde las primeras fases del desarrollo, evitando dejar toda la validación para etapas finales de integración.

Finalmente, se incluyó desde el inicio la preparación de documentos de pruebas y registros de errores, dado que el rol asignado a la Persona 4 no se limita al desarrollo de interfaz, sino que también involucra responsabilidades de aseguramiento de calidad y documentación técnica. De este modo, el trabajo del módulo no se concibe de manera aislada, sino como parte de un proceso formal de construcción y control del software.

## 12. Plan inicial de pruebas

En cumplimiento del rol asignado, se elaboró una propuesta de casos de prueba iniciales para verificar el correcto funcionamiento del módulo de filtros en sus fases tempranas. Entre los principales escenarios identificados se encuentran:

- verificación de la carga correcta del panel de filtros;
- comprobación del registro adecuado del territorio seleccionado;
- comprobación del registro adecuado de la categoría seleccionada;
- validación de aceptación de un rango de fechas correcto;
- validación de error cuando la fecha inicial supera a la final;
- verificación del correcto restablecimiento de los campos al utilizar la opción de limpieza.

La definición de estos casos de prueba desde el Día 1 permite anticipar la etapa de validación funcional y aporta orden al proceso de desarrollo.

## 13. Registro inicial de errores

Además del plan de pruebas, se dejó preparada una plantilla de registro de incidencias para documentar eventuales fallos detectados durante el desarrollo y la integración del módulo. Este registro contempla campos básicos como:

- identificador del error;
- módulo afectado;
- descripción del problema;
- severidad;
- estado;
- responsable.

La existencia de este instrumento es importante porque facilita la trazabilidad de fallos, la asignación de responsabilidades y el control del avance correctivo dentro del sprint.

## 14. Resultados obtenidos

Como resultado del trabajo realizado durante el Día 1, se logró:

- definir el conjunto inicial de filtros del dashboard;
- establecer la lógica funcional base del módulo;
- plantear la estructura del panel de filtros;
- definir una validación básica de integridad;
- organizar la estructura técnica del componente;
- preparar la base documental para pruebas y control de errores;
- dejar el módulo listo para avanzar hacia una implementación funcional en la siguiente fase.

Estos resultados permiten afirmar que el módulo de filtros quedó debidamente definido en su dimensión conceptual, lógica y organizativa, cumpliendo con lo esperado para la primera jornada del Sprint 1.

## 15. Conclusión

El avance correspondiente al Día 1 del Sprint 1 en el proyecto GeoBolivia permitió establecer una base técnica y metodológica sólida para el desarrollo del módulo de filtros del dashboard. A pesar de tratarse de una etapa inicial, el trabajo realizado fue fundamental para orientar la construcción posterior del componente, ya que no se limitó a una idea general, sino que concretó definiciones funcionales, decisiones de diseño, criterios de validación y elementos de documentación esenciales para el proceso de desarrollo.

La labor realizada por la Persona 4 evidencia la importancia de abordar el desarrollo de software desde una perspectiva estructurada, en la que el diseño del componente, la lógica interna, las pruebas y la documentación formen parte de un mismo proceso de calidad. Esta forma de trabajo resulta coherente con la metodología Scrum + Kanban adoptada por el equipo, ya que permite avanzar de forma iterativa, controlada y orientada a resultados medibles.

En síntesis, el módulo de filtros quedó correctamente encaminado para evolucionar durante los siguientes días del sprint, aportando de manera directa al cumplimiento de la historia de usuario relacionada con la visualización del dashboard y fortaleciendo la construcción progresiva del sistema GeoBolivia.