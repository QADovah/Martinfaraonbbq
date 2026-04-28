# 🍖 Roadmap de Mejoras: Martín Faraón BBQ

Este documento detalla el plan de evolución para el sitio web, priorizando la experiencia del usuario (UX), la conversión de clientes y la fidelidad de la marca.

## 🎯 Visión General
Transformar la landing page actual en una herramienta de venta dinámica que refleje la calidad artesanal de los ahumados y facilite el pedido directo de los "guerreros".

---

## ✅ Fase 1: Quick Wins & Conversión (COMPLETADO)
*Enfoque: Mejorar la velocidad y facilitar que el cliente haga el pedido.*

- [x] **WhatsApp Direct Link**: Botón flotante con mensaje pre-armado y tooltip.
- [x] **Optimización WebP**: Imágenes del menú y locales convertidas (reducción de peso del ~70%).
- [x] **Lazy Loading**: Atributo `loading="lazy"` aplicado para carga eficiente.
- [x] **SEO Local**: JSON-LD implementado con horarios, ubicación y acciones de pedido.

## ✅ Fase 2: Experiencia Inmersiva (COMPLETADO)
*Enfoque: "Wappear" al usuario con animaciones que acompañen el estilo industrial.*

- [x] **Scroll Reveal (Intersection Observer)**: Elementos que aparecen suavemente al scrollear.
- [x] **Hero Parallax**: Efecto de profundidad en la portada (Desktop).
- [x] **Modal de Platos**: Galería para ver fotos y descripciones detalladas de los ahumados.
- [x] **Micro-interacciones**: Hovers orgánicos y transiciones en tarjetas de menú.
- [x] **Refinamiento del Ritual**: Animación de "pulso de brasa" secuencial en los pasos de cocción.

## ✅ Fase 3: Mantenimiento & Fidelización (COMPLETADO)
*Enfoque: Automatización y captura de datos.*

- [x] **Data-Driven Menu**: Menú centralizado en `MENU_DATA` (JavaScript) para ediciones rápidas.
- [x] **Horarios Dinámicos**: Banner de "ABIERTO / CERRADO" automático según hora local.
- [x] **Integración de "La Logia"**: Captura de leads (Nombre, Email, Ubicación, Teléfono) enviada directamente a Google Sheets.
- [x] **Testimonios en Carrusel**: Implementar scroll horizontal suave y diseño de cartas destacadas.
- [x] **Página de Éxito / Feedback Logia**: Animación de "sello de lacre" o ticket rústico al unirse.
- [x] **Filtros de Menú**: Agregar categorías (Carnes, Sándwiches, Entradas) con animaciones de filtrado.
- [ ] **Auto Dark/Light Mode**: Refinar transiciones según la hora del día (opcional).

---

## 🚀 Fase 4: Opcionales (UX & Branding)
- [ ] **Auto Dark/Light Mode**: Refinar transiciones según la hora del día (opcional).
- [ ] **Secret Menu (Easter Egg)**: Combinación de clics en la web que desvele un plato secreto solo para conocedores.

---

## 📈 Fase 5: Marketing & Comunidad (Expansión Logia)
*Enfoque: Fidelizar clientes, generar boca a boca y aumentar el LTV (Life Time Value) a través de "La Logia".*

### 1. Programa "Traé un Guerrero"
- **Idea**: Sistema de referidos donde un miembro de La Logia le pasa un link o código a un amigo. Si el amigo compra, ambos ligan un premio (ej: Extremos quemados gratis, o un upgrade de acompañamiento).
- **Impacto**: Crecimiento orgánico de la base de datos apalancado en los clientes más fieles.

### 2. Gota de Fuego (Flash Sales VIP)
- **Idea**: Aprovechar el Excel de La Logia para mandar un WhatsApp/Email masivo: *"Salieron 5 kilos de brisket especial. Los primeros 10 en responder se lo llevan"*.
- **Impacto**: Genera FOMO (Fear Of Missing Out), exclusividad y vacía el stock en minutos.

### 3. El Pasaporte del Humo (Gamificación)
- **Idea**: Un tracker de fidelidad. Ya sea físico (cartoncito con sellos) o digital (vinculado a su mail/teléfono). Al 5to pedido, un chori-bondi gratis; al 10mo, remera o delantal oficial de Faraón.
- **Impacto**: Fomenta la recurrencia extrema y transforma clientes en embajadores de marca con merchandising.

### 4. Muro de los Elegidos
- **Idea**: Una sección en la web que se auto-alimente del Instagram. Subir fotos de clientes comiendo o retirando pedido y etiquetándolos en la web.
- **Impacto**: Puro "Social Proof". La gente ama verse reflejada en la web de su local favorito.

### 5. Reseñas con Recompensa
- **Idea**: 24 horas después del pedido, enviar un mail automático: *"¿Qué te pareció el humo de ayer? Dejanos 5 estrellas en Google Maps y tu próximo envío es gratis."*
- **Impacto**: Subir el ranking SEO local en Google Business de forma masiva.

---
*Última actualización: Abril 2026*
