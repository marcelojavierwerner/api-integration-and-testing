# Suite de Pruebas Automatizadas en Postman (API Testing)

## 📌 Descripción
Este módulo contiene los scripts de prueba en JavaScript desarrollados dentro del entorno de **Postman** para la validación automática de respuestas HTTP, integridad de colecciones y sanitización de datos.

## 🧪 Pruebas Implementadas (`postman_tests.js`)

* **Verificación de Estado HTTP:** Valida que el servidor responda con un código `200 OK`.
* **Conteo y Logs:** Registra en la consola de Postman la cantidad total de productos devueltos en la respuesta.
* **Aserción de Volumen:** Verifica que la API retorne como mínimo un arreglo de 10 elementos (`greaterThanOrEqual(10)`).
* **Sanitización y Calidad de Datos:** Aplica un filtro de arreglo (`filter`) con `.trim()` para verificar que ningún producto contenga el campo `nombre` vacío o con espacios en blanco.

## ⚙️ Cómo Ejecutar los Tests
1. Abrir **Postman**.
2. Crear una nueva petición HTTP de tipo `GET` hacia la URL del servicio.
3. Pegar el código de `postman_tests.js` en la pestaña **Tests**.
4. Hacer clic en **Send** y revisar los resultados en la pestaña **Test Results**.
