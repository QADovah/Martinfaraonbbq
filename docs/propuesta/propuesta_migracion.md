# Propuesta de Evolución Arquitectónica: Martín Faraón BBQ

## 1. Análisis de Situación (El Diagnóstico)

Acabamos de correr el `/sdd-init`. Tu stack actual es HTML, CSS y JS "vanilla" en un único archivo (`index.html`) de casi 4000 líneas. 

*   **¿Es rápido para el usuario?** Sí, el HTML crudo vuela. 
*   **¿Es escalable para el desarrollador?** Absolutamente no. 

Tener todo en un solo archivo es el equivalente a tener la cocina, la caja, los ahumadores y el baño en una sola habitación. Cualquier cambio te obliga a navegar por un mar de etiquetas. Esto aumenta el riesgo de que rompas una etiqueta de cierre y se descalabre toda la página.

## 2. ¿Pasamos a React? (La Trampa de la Inmediatez)

Me preguntás si pasar los componentes a React "mejora la experiencia". Como Arquitecto te voy a hablar sin filtro: **React puro no va a mejorar la experiencia del usuario final en tu página, probablemente la empeore.**

Te explico el **POR QUÉ** técnico:
React (como SPA o Single Page Application) fue creado para aplicaciones altamente interactivas (Dashboards, Sistemas de Gestión, Facebook). Tu sitio es una *Landing Page* enfocada en contenido (mostrar el menú, la historia, fotos). Si metemos React puro, obligamos al teléfono del usuario a descargar un "paquete" enorme de Javascript y ejecutarlo antes de poder mostrarle la foto de una simple costilla. Para alguien en la calle con 3G buscando dónde comer un sábado a la noche, esos segundos extra son letales (y te hunden en SEO).

**Conceptos > Código:** Nunca uses un framework enorme si no entendés el problema que resuelve. 

## 3. La Solución Real: Astro (Arquitectura Orientada a Contenido)

Acá es donde entra la verdadera ingeniería web moderna. Te propongo migrar la web a **Astro**.

### ¿Por qué Astro?
1.  **Componentización real (DX - Developer Experience):** Vamos a partir tus 4000 líneas en piezas lógicas separadas: `<Header />`, `<Hero />`, `<Menu />`, `<FormularioLogia />`. Tu `index.astro` va a tener 20 líneas limpias llamando a esos bloques. Mantenibilidad pura.
2.  **Cero Javascript por defecto (UX - User Experience):** Astro compila los componentes y le entrega al navegador HTML puro y ultraliviano. Tu web va a seguir siendo un balazo, pero con un código fuente de nivel Enterprise.
3.  **Arquitectura de Islas (El as bajo la manga):** Si el día de mañana sí o sí necesitás un componente en React (por ejemplo, un carrito de pedidos interactivo), Astro te permite incrustar *solo ese componente de React* en esa sección específica, dejando el resto de la página en HTML puro.

## 4. Plan de Acción (Fases de Migración)

Si me das el OK, el plan de ataque es:
1.  **Setup de Arquitectura:** Inicializar el proyecto con Astro.
2.  **Diseño Atómico:** Extraer tus variables de CSS (tu paleta `--red`, `--black`, etc.) a un sistema global.
3.  **Refactorización:** Mudar el código crudo a componentes (`Header.astro`, `Ritual.astro`, etc.) sin cambiar el diseño, solo la estructura.
4.  **Testing y Build:** Asegurar que los formularios y scripts (como el envío a Sheets y la IP) sigan funcionando en el nuevo ecosistema.
