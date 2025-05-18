export interface Work {
  background: string;
  imageUrl: string;
  title: string;
  link: string;
  description: string;
  slug: string;
  hasDetails: boolean;
  markdownContent?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  additionalImages?: {
    url: string;
    alt: string;
    caption?: string;
  }[];
}

export const works: Work[] = [
    {
        background: "bg-gray-200",
        imageUrl: "/images/projects/appstore/dish-appstore.png",
        title: "Dish (En Desarrollo)",
        link: "https://apps.apple.com/us/app/dish-reserv%C3%A1-tu-mesa-f%C3%A1cil/id6745460947",
        description: "Sistema de reservas para restaurantes con panel de administración completo para propietarios, optimizando la gestión de mesas y experiencia del cliente.",
        slug: "dish",
        hasDetails: true,
        markdownContent: `
    # Dish - Gestión Inteligente de Restaurantes
    
    ## Descripción General
    Dish es una solución innovadora para la gestión de reservas en restaurantes, diseñada para optimizar la experiencia tanto de los comensales como de los propietarios de restaurantes.
    
    ## Características Principales
    
    ### 🍽️ Reservas
    - Sistema de reservas en tiempo real
    - Gestión de mesas y capacidad
    - Confirmaciones automáticas
    - Recordatorios personalizados
    
    ### 💼 Dashboard para Restaurantes
    - Panel de control intuitivo
    - Gestión de disponibilidad
    - Análisis de ocupación
    - Reportes de rendimiento
    
    ### 📱 Experiencia del Cliente
    - Interfaz amigable
    - Historial de reservas
    - Preferencias guardadas
    - Sistema de reseñas
    
    ### 📊 Análisis y Estadísticas
    - Métricas de ocupación
    - Tendencias de reservas
    - Análisis de satisfacción
    - Reportes personalizables
    
    ## Tecnologías Utilizadas
    - Frontend: Next.js
    - Backend: Node.js
    - Base de datos: PostgreSQL
    - Notificaciones: Push y Email
    
    ## Estado del Proyecto
    Actualmente en desarrollo activo, con lanzamiento previsto para el próximo trimestre. Implementando nuevas funcionalidades y optimizando la experiencia de usuario.
    `
      },
    {
        background: "bg-gray-200",
        imageUrl: "/images/projects/despierta.png",
        title: "Despierta",
        link: "https://despiertaeducacion.com/",
        description: "Plataforma educativa que permite la gestión y seguimiento de cursos, con capacidad para subir contenido multimedia y documentos PDF.",
        slug: "despierta",
        hasDetails: true,
        markdownContent: `
    # Despierta - Plataforma de Aprendizaje Transformador
    
    ## Descripción General
    Despierta es una plataforma educativa integral que facilita el aprendizaje continuo y el desarrollo personal. Diseñada para crear una experiencia de aprendizaje inmersiva y efectiva.
    
    ## Características Principales
    
    ### 📚 Gestión de Cursos
    - Creación y organización de cursos
    - Carga de contenido multimedia
    - Biblioteca de recursos PDF
    - Sistema de módulos y lecciones
    
    ### 👥 Gestión de Usuarios
    - Perfiles de estudiantes y profesores
    - Seguimiento de progreso
    - Sistema de calificaciones
    - Certificaciones automáticas
    
    ### 📱 Experiencia de Aprendizaje
    - Interfaz intuitiva
    - Contenido adaptativo
    - Marcadores y notas
    - Modo offline
    
    ### 📊 Análisis y Seguimiento
    - Estadísticas de progreso
    - Reportes detallados
    - Evaluaciones automáticas
    - Retroalimentación personalizada
    
    ## Tecnologías Utilizadas
    - Frontend: Next.js
    - Backend: Node.js
    - Base de datos: PostgreSQL
    - Almacenamiento: AWS S3
    
    ## Seguridad y Rendimiento
    - Protección de contenido
    - Acceso controlado
    - Respaldos automáticos
    - Optimización de recursos
    `
      },
    {
        background: "bg-gray-200",
        imageUrl: "/images/projects/appstore/redbluefx-appstore.png",
        title: "RedBlueFX",
        link: "https://apps.apple.com/us/app/redblue-fx/id6742119993",
        description: "Sistema especializado de alertas de trading que proporciona señales precisas y análisis técnico en tiempo real para traders.",
        slug: "redbluefx",
        hasDetails: true,
        markdownContent: `
    # RedBlueFX - Alertas Precisas para Trading
    
    ## Descripción General
    RedBlueFX es una aplicación especializada en proporcionar alertas de trading precisas y oportunas. Diseñada para traders que necesitan información confiable y rápida para tomar decisiones informadas en el mercado.
    
    ## Características Principales
    
    ### 🔔 Sistema de Alertas
    - Alertas en tiempo real
    - Múltiples pares de divisas
    - Indicadores técnicos personalizables
    - Notificaciones push y email
    
    ### 📊 Análisis Técnico
    - Gráficos interactivos
    - Indicadores avanzados
    - Patrones de velas
    - Niveles de soporte y resistencia
    
    ### ⚙️ Personalización
    - Configuración de parámetros
    - Filtros por tipo de señal
    - Gestión de riesgo integrada
    - Preferencias de notificación
    
    ## Tecnologías Utilizadas
    - Frontend: React Native
    - Backend: Node.js
    - Base de datos: PostgreSQL
    - APIs de mercado en tiempo real
    
    ## Seguridad y Rendimiento
    - Procesamiento de señales optimizado
    - Sistema de verificación de alertas
    - Backup de configuraciones
    - Monitoreo 24/7
    `
      },
    {
        background: "bg-gray-200",
        imageUrl: "/images/projects/1mglobal.png",
        title: "One Movement Global",
        link: "https://1mglobal.net/",
        description: "Plataforma integral de trading que combina educación, streaming en vivo, sistema de alertas y gestión avanzada de usuarios para traders profesionales.",
        slug: "one-movement",
        hasDetails: true,
        markdownContent: `
    # One Movement Global - Tu Plataforma Integral de Trading
    
    ## Descripción General
    One Movement Global es una plataforma completa diseñada para traders que buscan elevar su nivel de trading. Combinamos educación, análisis en tiempo real y herramientas profesionales en una única solución integral.
    
    ## Características Principales
    
    ### 📊 Trading en Vivo
    - Streaming de sesiones de trading en tiempo real
    - Análisis de mercado en directo
    - Interacción con traders expertos
    - Grabaciones de sesiones anteriores
    
    ### 📱 Sistema de Alertas
    - Notificaciones personalizadas de trading
    - Alertas de precio y volumen
    - Señales técnicas automatizadas
    - Configuración de estrategias personalizadas
    
    ### 📚 Plataforma Educativa
    - Cursos estructurados por nivel
    - Webinars semanales
    - Recursos descargables
    - Seguimiento de progreso
    
    ### 👥 Gestión de Usuarios
    - Perfiles personalizados
    - Sistema de suscripciones
    - Comunidad privada
    - Métricas de rendimiento
    
    ## Tecnologías Utilizadas
    - Frontend: Next.js
    - Backend: Node.js
    - Streaming: WebRTC
    - Base de datos: PostgreSQL
    - Websockets para datos en tiempo real
    
    ## Seguridad y Rendimiento
    - Encriptación end-to-end
    - Autenticación de dos factores
    - Backups automáticos
    - Monitoreo constante del sistema
    `
      },
    {
        background: "bg-gray-200",
        imageUrl: "/images/projects/appstore/rcf-appstore.png",
        title: "RCF App",
        link: "https://apps.apple.com/us/app/rcf-app/id6739646376",
        description: "Sistema integral para la gestión y reserva de canchas de fútbol, facilitando la administración para propietarios y la experiencia de reserva para usuarios.",
        slug: "rcfapp",
        hasDetails: true,
        markdownContent: `
    # RCF App - Gestión Inteligente de Canchas de Fútbol
    
    ## Descripción General
    RCF App es una solución completa que revoluciona la manera en que se gestionan y reservan canchas de fútbol. Diseñada tanto para propietarios como para jugadores, nuestra plataforma ofrece una experiencia fluida y eficiente para todos los usuarios.
    
    ## Características Principales
    
    ### ⚽ Para Jugadores
    - Búsqueda y reserva de canchas en tiempo real
    - Filtros por ubicación, tipo de cancha y disponibilidad
    - Sistema de pagos integrado
    - Historial de reservas y preferencias
    - Notificaciones de confirmación y recordatorios
    
    ### 🎮 Panel de Administración
    - Dashboard completo para propietarios
    - Gestión de múltiples canchas y horarios
    - Sistema de calendario intuitivo
    - Reportes financieros y estadísticas
    - Control de disponibilidad en tiempo real
    
    ### 💼 Gestión de Negocios
    - Múltiples métodos de pago
    - Sistema de facturación automática
    - Gestión de promociones y descuentos
    - Análisis de ocupación y tendencias
    - Reportes personalizables
    
    ## Tecnologías Utilizadas
    - Frontend: Next.js con TypeScript
    - Backend: Node.js y Express
    - Base de datos: PostgreSQL
    - Autenticación: JWT y OAuth
    - Pagos: Integración con múltiples gateways
    
    ## Seguridad y Rendimiento
    - Encriptación de datos sensibles
    - Backups automáticos
    - Sistema de roles y permisos
    - Monitoreo de transacciones en tiempo real
    `
      },
  {
    background: "bg-gray-200",
    imageUrl: "/images/projects/rating-app.png",
    title: "Rating App",
    link: "https://www.ratingapp.com.ar",
    description: "Una aplicación multiplataforma disponible en web y móvil que ofrece una experiencia completa de entretenimiento con canales de TV en vivo, radio y streaming.",
    slug: "rating-app",
    hasDetails: true,
    playStoreUrl: "https://play.google.com/store/apps/details?id=ar.com.ratingapp.ratingmediaplayer.rating_media_player&hl=es_AR",
    additionalImages: [],
    markdownContent: `
# Rating App - Tu Plataforma de Entretenimiento Todo en Uno

## Descripción General
Rating App es una innovadora plataforma de entretenimiento que revoluciona la manera en que accedemos al contenido multimedia. Desarrollada con las últimas tecnologías web y móviles, nuestra aplicación ofrece una experiencia única que combina televisión en vivo, radio y servicios de streaming en una sola interfaz intuitiva.

## Características Principales

### 📺 Televisión en Vivo
- Acceso a más de 100 canales de televisión en vivo
- Programación internacional y local
- Guía de programación interactiva
- Calidad HD y compatibilidad con múltiples dispositivos

### 📻 Radio Streaming
- Amplia selección de estaciones de radio nacionales e internacionales
- Categorías por género musical y tipo de contenido
- Función de grabación y reproducción posterior
- Programación de alarmas y recordatorios

### 🎬 Servicios de Streaming
- Integración con múltiples proveedores de contenido IPTV
- Biblioteca de contenido bajo demanda
- Recomendaciones personalizadas
- Sistema de favoritos y listas de reproducción

### 📱 Experiencia Multiplataforma
- Aplicación web responsive
- Apps nativas para iOS y Android
- Sincronización entre dispositivos
- Interfaz adaptativa según el dispositivo

## Tecnologías Utilizadas
- Frontend Web: Next.js
- App Móvil: Flutter
- Streaming: Protocolos HLS y IPTV optimizados
- Base de datos: PostgreSQL para gestión de usuarios y contenido

## Seguridad y Rendimiento
- Transmisión segura con encriptación de extremo a extremo
- Sistema de caché inteligente para reproducción fluida
- Balanceo de carga automático
- Monitoreo en tiempo real de la calidad del servicio

### 📲 Descarga La App
<a href="https://play.google.com/store/apps/details?id=ar.com.ratingapp.ratingmediaplayer.rating_media_player&hl=es_AR">
  <img alt="Disponible en Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/es_badge_web_generic.png" width="180px"/>
</a>
`
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/projects/copa-de-reyes.png",
    title: "Copa de Reyes",
    link: "https://www.blackrhinoygp.com/copadereyes",
    description: "A comprehensive tournament management platform for organizing and tracking sports competitions. Features include team registration, match scheduling, and real-time score updates.",
    slug: "copa-de-reyes",
    hasDetails: false
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/projects/risingshakti.png",
    title: "Rising Shakti",
    link: "https://www.risingshakti.com",
    description: "A wellness and spiritual growth platform offering online courses, meditation guides, and community features.",
    slug: "rising-shakti",
    hasDetails: false
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/projects/novoturismo.png",
    title: "Novoturismo",
    link: "https://www.novoturismo.com.uy",
    description: "A tourism platform showcasing the best destinations and experiences in Uruguay, with booking capabilities and travel guides.",
    slug: "novoturismo",
    hasDetails: false
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/projects/green.png",
    title: "Envases green",
    link: "https://www.envasesgreen.com.ar",
    description: "An eco-friendly packaging solutions provider, offering sustainable alternatives for businesses committed to environmental responsibility.",
    slug: "envases-green",
    hasDetails: false
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/projects/as1pe.png",
    title: "AS1",
    link: "https://www.as1.pe",
    description: "A digital solutions company providing innovative technology services and consulting for businesses in Peru.",
    slug: "as1",
    hasDetails: false
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/projects/seshat.png",
    title: "Seshat",
    link: "https://seshatdistribuidora.com/",
    description: "A distribution company platform managing inventory, orders, and delivery logistics efficiently.",
    slug: "seshat",
    hasDetails: false
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/projects/congreso-de-punta.png",
    title: "Congreso de Punta",
    link: "https://www.congresodepunta.com",
    description: "A conference management platform for organizing and hosting professional events and congresses.",
    slug: "congreso-de-punta",
    hasDetails: false
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/projects/palacio.png",
    title: "Palacio Propiedades",
    link: "https://www.franciscopalacios.com.ar",
    description: "A real estate platform showcasing property listings with detailed information and contact options.",
    slug: "palacio-propiedades",
    hasDetails: false
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/projects/donapupa.png",
    title: "Dona pupa",
    link: "https://www.donapupa.com",
    description: "An artisanal food brand's website featuring their product catalog and online ordering system.",
    slug: "dona-pupa",
    hasDetails: false
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/projects/blackrhino.png",
    title: "Black Rhino YGP",
    link: "https://www.blackrhinoygp.com",
    description: "A youth development program platform focusing on sports training and personal growth.",
    slug: "black-rhino",
    hasDetails: false
  },
]; 