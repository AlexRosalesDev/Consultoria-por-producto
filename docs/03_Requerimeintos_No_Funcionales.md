# 3. REQUERIMIENTOS NO FUNCIONALES Y DEVOPS - EXTREMADAMENTE DETALLADOS

**Total de Requerimientos No Funcionales: 18**
**Numeración:** RNF-01 al RNF-18
**Base:** Análisis exhaustivo de todas las secciones del TDR

---

## 3.1 USABILIDAD (RNF-01 al RNF-03)

### RNF-01: Manuales de usuario y administrador
- **Descripción:** El sistema debe incluir manuales de usuario y administrador completos.
- **Fuente TDR:** Producto 4: "con manuales de usuario y administrador"
- **Justificación:** La transferencia de conocimiento es esencial para la sostenibilidad.
- **Métrica de Éxito:** Se entregan dos manuales (usuario final y administrador técnico) en formato PDF y/o HTML, con capturas de pantalla, procedimientos paso a paso y resolución de problemas comunes.

### RNF-02: Idioma español
- **Descripción:** La interfaz de usuario y toda la documentación deben estar en español.
- **Fuente TDR:** (Implícito por ser una institución boliviana) y consistente con la documentación del proyecto.
- **Justificación:** Los usuarios y mantenedores son hispanohablantes.
- **Métrica de Éxito:** 100% de los textos en interfaz, mensajes, manuales y documentación técnica en español, con terminología técnica adecuada.

### RNF-03: Curva de aprendizaje
- **Descripción:** El sistema debe ser intuitivo para los técnicos de GeoBolivia, requiriendo mínimo entrenamiento.
- **Fuente TDR:** (Implícito en la necesidad de fortalecimiento de capacidades)
- **Justificación:** La transferencia efectiva requiere que el sistema sea comprensible.
- **Métrica de Éxito:** Un técnico de GeoBolivia con perfil promedio debe poder realizar las tareas principales (consultar, filtrar, descargar) sin asistencia después de 2 horas de exploración.

---

## 3.2 RENDIMIENTO (RNF-04 al RNF-07)

### RNF-04: Tiempo de carga del dashboard
- **Descripción:** El dashboard debe cargar en un tiempo aceptable para una buena experiencia de usuario.
- **Fuente TDR:** (Implícito en la expectativa de calidad)
- **Justificación:** Los usuarios abandonan sistemas lentos.
- **Métrica de Éxito:** Tiempo de carga inicial del dashboard < 5 segundos en conexión de 10 Mbps (medido con herramientas como Lighthouse).

### RNF-05: Latencia de actualización en tiempo real
- **Descripción:** Los cambios en la base de datos deben reflejarse en el dashboard con latencia mínima.
- **Fuente TDR:** Producto 3: "actualizando a tiempo real"
- **Justificación:** La utilidad de los datos climáticos depende de su actualidad.
- **Métrica de Éxito:** Latencia máxima de 30 segundos entre la modificación en base de datos y la visualización en el dashboard.

### RNF-06: Concurrencia de usuarios
- **Descripción:** El sistema debe soportar múltiples usuarios accediendo simultáneamente sin degradación significativa del rendimiento.
- **Fuente TDR:** (Implícito por ser un servicio público)
- **Justificación:** GeoBolivia es un portal nacional con múltiples usuarios potenciales.
- **Métrica de Éxito:** El sistema mantiene tiempos de respuesta aceptables (< 5 segundos para carga, < 2 segundos para interacciones) con 50 usuarios concurrentes.

### RNF-07: Optimización de consultas geoespaciales
- **Descripción:** Las consultas a la base de datos geoespacial deben estar optimizadas para rendimiento.
- **Fuente TDR:** Producto 3: "datos dinámicos que se vayan actualizando a tiempo real"
- **Justificación:** Las consultas geoespaciales pueden ser computacionalmente costosas.
- **Métrica de Éxito:** Las consultas de datos geoespaciales con hasta 10,000 registros responden en menos de 2 segundos.

---

## 3.3 SEGURIDAD (RNF-08 al RNF-11)

### RNF-08: Propiedad intelectual del código
- **Descripción:** Todo el código fuente desarrollado debe ser entregado y pasar a ser propiedad exclusiva de Vicepresidencia y PRO-RURAL.
- **Fuente TDR:** Sección 16: "La documentación que se produzca... será de propiedad exclusiva de la Vicepresidencia del Estado Plurinacional y PRO-RURAL"
- **Justificación:** El estado debe ser dueño de las herramientas que financia.
- **Métrica de Éxito:** Entrega de repositorio completo con código fuente, sin ofuscación, incluyendo todos los archivos necesarios para reconstruir el sistema.

### RNF-09: Confidencialidad de la información
- **Descripción:** El consultor y el sistema deben garantizar la confidencialidad de la información a la que se accede durante la consultoría.
- **Fuente TDR:** Sección 15: "guardar absoluta confidencialidad sobre la información a la que tenga acceso durante y después de la ejecución del servicio"
- **Justificación:** Puede haber datos sensibles de instituciones o de planificación estatal.
- **Métrica de Éxito:** Firma de acuerdo de confidencialidad y diseño que respete niveles de acceso si existieran.

### RNF-10: Integridad de datos
- **Descripción:** Los procesos de ingesta y transformación de datos deben preservar la integridad de la información original.
- **Fuente TDR:** (Implícito en la calidad esperada)
- **Justificación:** Decisiones basadas en datos corruptos pueden tener consecuencias graves.
- **Métrica de Éxito:** Los procesos ETL incluyen validaciones de integridad (ej: conteo de registros, checksums, validación de esquemas) y registran errores.

### RNF-11: Control de acceso básico
- **Descripción:** El sistema debe implementar control de acceso para funciones administrativas.
- **Fuente TDR:** (Implícito en profesionalismo esperado)
- **Justificación:** No todos los usuarios deben poder modificar configuraciones o datos.
- **Métrica de Éxito:** Existe al menos un rol de administrador con acceso a funciones de gestión, y roles de usuario con acceso solo a consulta/visualización.

---

## 3.4 MANTENIBILIDAD (RNF-12 al RNF-15)

### RNF-12: Documentación técnica completa
- **Descripción:** El sistema debe incluir documentación técnica detallada que permita su mantenimiento futuro.
- **Fuente TDR:** Producto 4: "documentación del sistema"
- **Justificación:** Los técnicos de GeoBolivia deben poder mantener y evolucionar el sistema.
- **Métrica de Éxito:** Documentación incluye: arquitectura del sistema, modelo de datos, descripción de componentes, dependencias, configuración, y procedimientos de respaldo.

### RNF-13: Scripts de mantenimiento
- **Descripción:** Se deben entregar scripts de mantenimiento para tareas comunes (backup, actualización, limpieza).
- **Fuente TDR:** Producto 4: "incluyendo scripts de mantenimiento si lo hubiese"
- **Justificación:** Automatizar tareas recurrentes reduce errores.
- **Métrica de Éxito:** Scripts documentados con instrucciones de uso, probados y funcionales.

### RNF-14: Código fuente comentado
- **Descripción:** El código fuente debe estar comentado en las partes de lógica compleja.
- **Fuente TDR:** Producto 4: "documentación del sistema" (implícito)
- **Justificación:** Facilita la comprensión y modificación futura por otros desarrolladores.
- **Métrica de Éxito:** Al menos el 30% de las líneas de lógica de negocio incluyen comentarios explicativos.

### RNF-15: Guía de instalación
- **Descripción:** El sistema debe incluir una guía de instalación paso a paso.
- **Fuente TDR:** (Implícito en la necesidad de transferencia)
- **Justificación:** Si el sistema debe reinstalarse o migrarse, debe ser posible hacerlo sin el consultor original.
- **Métrica de Éxito:** Guía que permita a un técnico con perfil adecuado instalar el sistema desde cero en menos de 4 horas.

---

## 3.5 COMPATIBILIDAD Y PORTABILIDAD (RNF-16 al RNF-18)

### RNF-16: Compatibilidad con navegadores principales
- **Descripción:** El sistema debe ser compatible con los navegadores web más utilizados.
- **Fuente TDR:** Producto 3: "entorno web accesible"
- **Justificación:** Los usuarios utilizan diferentes navegadores según preferencia o política institucional.
- **Métrica de Éxito:** Funcionalidad completa en versiones recientes (últimas 2) de: Google Chrome, Mozilla Firefox, Microsoft Edge, Safari.

### RNF-17: Diseño responsivo
- **Descripción:** La interfaz debe adaptarse a diferentes tamaños de pantalla.
- **Fuente TDR:** Producto 3: "desde cualquier dispositivo"
- **Justificación:** Los tomadores de decisiones pueden acceder desde tablets o smartphones.
- **Métrica de Éxito:** La interfaz es utilizable en resoluciones desde 320px (iPhone SE) hasta 3840px (4K), sin pérdida de funcionalidad.

### RNF-18: Compatibilidad con estándares IDE-EPB
- **Descripción:** Los servicios publicados deben ser compatibles con la Infraestructura de Datos Espaciales del Estado.
- **Fuente TDR:** Producto 2: "normativa técnica establecida en la Infraestructura de Datos Espaciales del Estado Plurinacional de Bolivia y su nodo GeoBolivia"
- **Justificación:** El sistema debe integrarse como nodo de GeoBolivia.
- **Métrica de Éxito:** Los servicios cumplen con estándares OGC (WMS, WFS) si aplica, y los metadatos siguen el perfil IDE-EPB.