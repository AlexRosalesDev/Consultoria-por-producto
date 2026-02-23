### 3.4. Listado de Requerimientos No Funcionales (RNF)

| ID | Categoría | Descripción Técnica | Métrica de Éxito |
| :--- | :--- | :--- | :--- |
| **RNF-01** | Seguridad | Las contraseñas no deben guardarse en texto plano. | Uso de Hashing (bcrypt/Argon2). |
| **RNF-02** | Rendimiento | Tiempo de respuesta en búsquedas. | Menos de 1 segundo con 10k registros. |
| **RNF-03** | Compatibilidad | Dispositivos soportados. | Web Responsive (Móvil y Escritorio). |