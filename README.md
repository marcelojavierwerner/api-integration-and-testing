# API Integration and Testing🚀

Este repositorio contiene la implementación, el modelado y la suite de pruebas automatizadas para la integración de servicios **RESTful APIs**. El proyecto abarca desde el diseño del esquema de datos en JSON, la construcción de endpoints con **Node.js / Express**, hasta la ejecución de pruebas de integración automatizadas utilizando **Postman** y **Newman (CLI)**.

---

## 🛠️ Tecnologías & Herramientas

* **Entorno de Ejecución Backend:** Node.js, Express.js.
* **Formatos de Intercambio de Datos:** JSON (JavaScript Object Notation).
* **Testing & Automatización:** Postman Workspace, Newman CLI (Continuous Integration Testing).
* **Control de Calidad (QA / Assertions):** Postman Test Scripts (JavaScript / Chai Assertion Library).

---

## 📁 Contenido & Estructura del Repositorio

```text
api-integration-and-testing/
├── schemas/
│   └── order_payload.json      # Esquema JSON para procesamiento de pedidos y logística
├── backend_api/
│   ├── api4.js                 # Servidor HTTP en Express exponiendo endpoints REST
│   └── package.json            # Dependencias del proyecto Backend
├── testing_suite/
│   ├── postman_collection.json # Colección de peticiones y test cases de Postman
│   └── postman_tests.js        # Scripts de aserción y validación de respuestas (status, length, trim)
└── README.md
```

---

## 🔬 Capas del Proyecto

### 1. Modelado de Datos (Esquema JSON)
Diseño del esquema de payloads para integración logística (caso de uso *Patito Feliz*), estructurando atributos simples y colecciones de objetos anidados (`Articles`) con validación de tipos booleanos (`Dangerous`) y numéricos.

### 2. Desarrollo de la API REST (Express.js)
Construcción de un servidor de servicios web en Node.js/Express para servir endpoints HTTP (`GET /usuarios`) que retornan colecciones estructuradas en formato JSON.

### 3. Testing Automatizado & Aserciones (Postman / Newman)
Pruebas de integración sobre servicios REST (incluyendo consumo e inspección de APIs públicas como PokéAPI y endpoints propios), evaluando:
* **Verificación de Status Code:** Aserción de respuesta HTTP `200 OK`.
* **Validación de Contenido:** Inspección de longitud de colecciones (`greaterThanOrEqual`).
* **Sanitización de Datos:** Filtrado y aserción de atributos no vacíos (`trim() === ""`).
* **Ejecución CLI (Newman):** Automatización de colecciones de pruebas directamente desde la terminal del sistema operativo.

---

## 💡 Aplicación en Ciencia de Datos & MLOps

* **Inferencia de Modelos vía API:** Este patrón de integración sienta las bases estructurales para el despliegue de microservicios de Machine Learning (ej. APIs construidas con FastAPI o Flask).
* **Pruebas de Regresión en Pipelines:** La automatización mediante Newman permite integrar pruebas de disponibilidad y consistencia de datos en pipelines CI/CD antes de alimentar modelos predictivos.

---

## 👤 Autor

**Marcelo Javier Werner** — *SerWer Data Lab*
