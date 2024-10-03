# Proyecto de Automatización con Playwright

Este proyecto tiene como objetivo automatizar la funcionalidad de compra de un producto en la aplicación SauceDemo utilizando Playwright y Cucumber.

## Objetivos del Reto

### 1. Casos de Prueba:

#### Caso de Prueba 1: Iniciar sesión con credenciales válidas
- **Descripción**: Verificar que un usuario pueda iniciar sesión con credenciales válidas.
- **Pasos**:
  1. Navegar a la página de inicio de sesión de SauceDemo.
  2. Ingresar el nombre de usuario `standard_user`.
  3. Ingresar la contraseña `secret_sauce`.
  4. Hacer clic en el botón "Login".
- **Resultado Esperado**: El usuario debe ser redirigido a la página de productos.

#### Caso de Prueba 2: Seleccionar un producto y añadirlo al carrito
- **Descripción**: Verificar que un usuario pueda añadir un producto al carrito.
- **Pasos**:
  1. Iniciar sesión como en el caso de prueba 1.
  2. Seleccionar un producto aleatorio.
  3. Hacer clic en el botón "Add to cart".
- **Resultado Esperado**: El producto debe ser añadido al carrito.

#### Caso de Prueba 3: Proceder al checkout
- **Descripción**: Verificar que un usuario pueda proceder al checkout después de añadir un producto al carrito.
- **Pasos**:
  1. Iniciar sesión como en el caso de prueba 1.
  2. Añadir un producto al carrito como en el caso de prueba 2.
  3. Ir al carrito.
  4. Hacer clic en el botón "Checkout".
- **Resultado Esperado**: El usuario debe ser llevado a la página de información de checkout.

#### Caso de Prueba 4: Completar la información de checkout
- **Descripción**: Verificar que un usuario pueda completar la información de checkout.
- **Pasos**:
  1. Proceder al checkout como en el caso de prueba 3.
  2. Rellenar los campos: First Name, Last Name y Zip/Postal Code.
  3. Hacer clic en el botón "Continue".
- **Resultado Esperado**: El usuario debe ser llevado a la página de resumen del checkout.

#### Caso de Prueba 5: Confirmar la compra
- **Descripción**: Verificar que un usuario pueda confirmar la compra.
- **Pasos**:
  1. Completar la información de checkout como en el caso de prueba 4.
  2. Hacer clic en el botón "Finish".
- **Resultado Esperado**: Se debe mostrar un mensaje de confirmación de la compra.

### 2. Técnica de Diseño de Caso de Prueba
Se ha utilizado la **Técnica de Partición de Equivalencia** para identificar diferentes entradas y acciones en el flujo de compra, dividiendo los casos en clases equivalentes. Por ejemplo:
- **Entradas válidas**: Credenciales correctas, información de checkout válida.
- **Entradas inválidas**: Credenciales incorrectas, campos de checkout vacíos.

## Instrucciones para Ejecutar el Proyecto

1. Clona el repositorio:
   ```bash
   git clone <tu-repositorio-url>

2. Navega al directorio del proyecto:
    cd playwright-course-jm-consultant4

4. Instala las dependencias:
    npm install

5. Ejecuta las pruebas:
    npx cucumber-js test
