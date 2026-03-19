# 3. Requerimientos No Funcionales

Los siguientes requerimientos no funcionales fueron definidos con base en el TDR del proyecto y en la entrevista realizada al stakeholder. Se incluyen atributos de calidad, restricciones operativas del sistema y requisitos técnicos de entrega relacionados con mantenimiento, despliegue y sostenibilidad institucional.

| ID | Categoría | Descripción técnica | Métrica de éxito | Prioridad |
|---|---|---|---|---|
| RNF-01 | Usabilidad | La interfaz del sistema debe estar en español. | El 100% de textos visibles, mensajes y manuales entregados están en español. | Must |
| RNF-02 | Usabilidad | El sistema debe incluir manual de usuario y manual de administrador. | Se entregan ambos manuales con procedimientos de uso, administración y resolución básica de errores. | Must |
| RNF-03 | Usabilidad | El módulo administrativo debe ser comprensible para personal no programador. | Un técnico institucional puede ejecutar una carga guiada usando la interfaz y la plantilla definida. | Should |
| RNF-04 | Rendimiento | La carga inicial del dashboard debe mantenerse en un tiempo razonable. | El dashboard carga en menos de 5 segundos en condiciones normales de prueba. | Should |
| RNF-05 | Rendimiento | Los cambios aprobados en datos deben reflejarse con baja latencia en la visualización. | Los cambios validados se reflejan en el tablero en menos de 60 segundos. | Must |
| RNF-06 | Rendimiento | Las consultas espaciales y por atributos frecuentes deben responder sin degradación severa. | Las consultas comunes mantienen tiempos de respuesta operables para el usuario. | Should |
| RNF-07 | Seguridad | El sistema debe diferenciar acceso público y acceso restringido según rol. | Un usuario sin permisos no puede visualizar ni descargar información sensible. | Must |
| RNF-08 | Seguridad | La solución debe resguardar la confidencialidad de la información sensible tratada en la consultoría. | La arquitectura y operación evitan exposición de datos restringidos. | Must |
| RNF-09 | Integridad | La carga de datos debe validar estructura, geometrías, duplicados y consistencia antes de publicar información. | Las cargas inválidas son rechazadas con mensajes claros y no alteran la base principal. | Must |
| RNF-10 | Integridad | El sistema debe mantener trazabilidad básica de las cargas realizadas. | Cada carga registra fecha, estado, tipo de archivo y resultado de validación. | Should |
| RNF-11 | Control de acceso | El sistema debe implementar control de acceso para funciones administrativas. | Existe al menos un rol administrador y otro de consulta pública o restringida. | Must |
| RNF-12 | Mantenibilidad | El sistema debe entregarse con documentación técnica suficiente para mantenimiento institucional. | Se entrega documentación del sistema, componentes, dependencias y procedimientos básicos. | Must |
| RNF-13 | Mantenibilidad | Deben entregarse scripts de mantenimiento cuando formen parte de la solución. | Los scripts entregados son funcionales y están documentados. | Should |
| RNF-14 | Mantenibilidad | Debe entregarse una guía de instalación o despliegue reproducible. | Un técnico puede reinstalar o desplegar la solución siguiendo la guía entregada. | Must |
| RNF-15 | Compatibilidad | El sistema debe ser accesible desde navegadores web modernos. | Funciona correctamente en Chrome, Edge y Firefox recientes. | Must |
| RNF-16 | Compatibilidad | La interfaz debe adaptarse a diferentes tamaños de pantalla. | La solución es usable en escritorio, tablet y móvil. | Must |
| RNF-17 | Interoperabilidad | La publicación de datos y metadatos debe alinearse a la normativa de GeoBolivia e IDE-EPB. | La solución puede validarse técnicamente como compatible con el nodo GeoBolivia. | Must |
| RNF-18 | Entrega técnica | Todo el código, documentación y activos digitales producidos deben ser entregados a la institución. | Se entrega paquete completo con código fuente, manuales, configuraciones y artefactos definidos. | Must |
- **Descripción:** Manual paso a paso para instalar el sistema desde cero.
- **Justificación:** Si el servidor falla, poder reinstalarlo fácilmente.
- **Criterio de Aceptación:** Guía que permita instalar el sistema en menos de 2 horas.

[04_Restricciones.md](04_Restricciones.md)
