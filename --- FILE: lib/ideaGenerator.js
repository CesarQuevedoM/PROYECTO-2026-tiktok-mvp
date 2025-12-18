/**
 * Generador de ideas de TikTok
 * Esta es una versión mock. Puedes reemplazarla con una llamada a API real (OpenAI, Claude, etc)
 */

export async function generateIdea(formData) {
  const { businessType, goal, city } = formData;
  
  // Simulación de delay de API
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Pool de ideas predefinidas que se personalizan según el input
  const ideas = [
    {
      hook: "POV: Entras a nuestro local y...",
      content: `Muestra el momento exacto cuando un cliente entra por primera vez. Usa transición rápida para mostrar su reacción al ver ${businessType.toLowerCase()}. Audio trending + texto en pantalla con tu ubicación en ${city}.

Tips de grabación:
- Graba en vertical (9:16)
- Primer plano de la puerta abriéndose
- Corte rápido a la cara del cliente (reacción genuina)
- Panorámica del local en 2-3 segundos
- Cierra con tu logo o producto destacado

Duración ideal: 7-12 segundos`,
      cta: `Visítanos en ${city} - Link en bio 📍`,
      why: "Los POV generan curiosidad y los clientes potenciales se identifican con la experiencia. Este formato tiene +40% más engagement que videos tradicionales."
    },
    {
      hook: `3 razones por las que nos eligen en ${city}`,
      content: `1) [Tu diferenciador único - ej: "Único ${businessType.toLowerCase()} con X"]
2) [Precio o promoción - ej: "Precios desde S/ X"]
3) [Experiencia - ej: "Más de X clientes satisfechos"]

Tips de grabación:
- Muestra cada razón con clips de 2-3 seg
- Usa texto GRANDE (tamaño 100+)
- Música energética de fondo
- Incluye prueba social (reseñas, clientes)

Hashtags sugeridos: #${city.toLowerCase()} #${businessType.toLowerCase().replace(/\//g, '')} #emprendimiento`,
      cta: "Escríbenos al WhatsApp en bio 💬",
      why: "Las listas numeradas tienen 2.5x más engagement. Son fáciles de consumir y comunican valor rápidamente sin saturar al espectador."
    },
    {
      hook: "Esto es lo que pasa cuando...",
      content: `Graba el proceso detrás de "${goal.toLowerCase()}" en tu negocio.

Ejemplos según tu objetivo:
- Preparación de producto/servicio
- Transformación antes/después
- Un día típico en tu negocio
- Reacción de clientes al resultado

Tips:
- Hazlo en 7-15 segundos máximo
- Usa timelapses o cortes rápidos
- Música trending (busca en "descubre")
- Añade subtítulos para engagement

Variables a incluir:
- Mostrar el "backstage"
- Humanizar tu marca
- Destacar calidad/esfuerzo`,
      cta: "Link en bio para reservar/comprar 🔗",
      why: "Behind-the-scenes genera confianza (72% de consumidores lo valoran) y muestra autenticidad. Reduce objeciones de compra al mostrar tu proceso."
    },
    {
      hook: `El error #1 que cometen en ${city} con ${businessType.toLowerCase()}`,
      content: `Estructura del video:
1. Hook fuerte (0-3 seg): "❌ NO hagas esto..."
2. Muestra el error común (3-7 seg)
3. Tu solución (7-12 seg)
4. Resultado/beneficio (12-15 seg)

Ejemplo de guión:
"La mayoría en ${city} [hace X mal]... pero nosotros [hacemos Y bien] y por eso [beneficio claro]."

Tips avanzados:
- Usa emojis en pantalla (❌ ✅)
- Contraste visual (error vs solución)
- Termina con testimonio breve si tienes`,
      cta: `Evita este error - Visítanos en ${city}`,
      why: "Los videos educativos tienen 3x más shares. Posicionas tu negocio como experto y creas urgencia sin vender directamente."
    },
    {
      hook: `Te enseño cómo conseguir ${goal.toLowerCase()} en ${city}`,
      content: `Video tutorial corto relacionado a tu servicio:

Estructura:
- Paso 1: [Acción simple]
- Paso 2: [Acción intermedia]  
- Paso 3: [Tu servicio como solución]

Ejemplo para restaurante:
"Quieres más pedidos delivery? 
1. Foto profesional del plato
2. Descripción que venda
3. Nosotros lo hacemos por ti"

Tips de edición:
- Usa transiciones cada 3 segundos
- Text overlay con cada paso
- Cierra con "¿Ya lo probaste?"`,
      cta: "Te ayudamos - Escríbenos 💪",
      why: "Los tutoriales generan valor sin pedir nada a cambio. Tasa de conversión 60% mayor que videos promocionales directos."
    }
  ];
  
  // Selecciona una idea aleatoria
  const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
  
  // Retorna la idea personalizada con los datos del formulario
  return {
    ...randomIdea,
    businessType,
    goal,
    city,
    timestamp: new Date().toISOString()
  };
}
