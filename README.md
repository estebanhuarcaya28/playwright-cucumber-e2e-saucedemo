# Desafío de Automatización - QA Esteban Huarcaya

Este proyecto consiste en la automatización de pruebas de la aplicación SauceDemo utilizando Playwright y Cucumber. El objetivo es validar el proceso de compra de un producto en la plataforma.

## Objetivos del Reto

### Casos de Prueba:

1. **Caso de Prueba 1: Login con credenciales válidas**
   - **Descripción**: Verificar que el usuario puede iniciar sesión con credenciales válidas.
   - **Entradas**: Usuario: `standard_user`, Contraseña: `secret_sauce`.
   - **Resultados Esperados**: El usuario debe ser redirigido a la página de productos.

2. **Caso de Prueba 2: Selección de un producto**
   - **Descripción**: Verificar que el usuario puede seleccionar un producto para comprar.
   - **Entradas**: Producto disponible en la página.
   - **Resultados Esperados**: El producto seleccionado debe añadirse al carrito.

3. **Caso de Prueba 3: Proceso de checkout**
   - **Descripción**: Verificar que el usuario puede completar el proceso de compra.
   - **Entradas**: Información de checkout (Nombre: `Esteban`, Apellido: `Huarcaya Curo`, Código postal: `5001`).
   - **Resultados Esperados**: El usuario debe ver un mensaje de confirmación de compra.

### Técnica de Diseño de Caso de Prueba:
- **Partición de Equivalencia**: Se ha utilizado esta técnica para dividir las entradas posibles (credenciales, selección de productos) en grupos equivalentes que producen el mismo resultado. Por ejemplo, se han probado credenciales válidas y no válidas, así como la selección de productos de diferentes categorías.

## Tecnologías Utilizadas
- [Playwright](https://playwright.dev/) para la automatización de pruebas.
- [Cucumber](https://cucumber.io/) para la redacción de pruebas en lenguaje Gherkin.

## Cómo Ejecutar el Proyecto
1. Clona el repositorio:
   ```bash
   git clone https://github.com/estebanhuarcaya28/playwright-cucumber-e2e-saucedemo.git

2. Navega a la carpeta del proyecto:
   cd desafio-automatización-qa-esteban-huarcaya

3. Instala las dependencias:
   npm init playwright@latest
   npm i @cucumber/cucumber
   
4. Ejecuta las pruebas:
   npx cucumber-js test

Contacto
Nombre: Esteban Huarcaya Curo
Correo electrónico: estebanhuarcayacuro@gmail.com
LinkedIn: https://www.linkedin.com/in/estebanhuarcayacuro/
