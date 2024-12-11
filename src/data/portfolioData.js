import homeAcademiaDigital from '../img/homeAcademiaDigital.jpg';
import academiaDigitalTelefono from '../img/academiaDigitalTelefono.png';
import academiaDigitalComputadora from '../img/academiaDigitalComputadora.png';
import academiaDigitalTablet from '../img/academiaDigitalTablet.png';
import academiaDigitalTarjeta from '../img/academiaDigitalTarjeta.png';
import crmArgentino from '../img/crmArgentino.png';

export const portfolioItems = {
  'academia-digital': {
    heroBannerProps: {
      title: "Landing Page + Creacion Marca Personal + Publicidad Instagram",
      src: homeAcademiaDigital
    },
    caseStudyProps: {
      title: "Landing Page + Creacion Marca Personal + Publicidad Instagram",
      subtitle: "TechAcademyCourses",
      description: "TechAcademyCourses es una academia de cursos de programación online, donde se imparten cursos de programación web, challanger de empresas, blogs y todo orientado que la comunidad de programadores pueda aprender y desarrollarse profesionalmente.",
      rubro: "Servicio digital",
      services: "Diseño de Landing Page + Desarrollo Responsive + Optimización de contenidos para Publicidad + Mobile First + UX + Diseño web + Presencia Online + Publicidad Digital + Google Ads + SEO + Posicionamiento Online + Estrategia Online + Marketing Digital"
    },
    gridItems: {
      imgTablet: academiaDigitalTablet,
      imgComputadora: academiaDigitalComputadora,
      imgTelefono: academiaDigitalTelefono,
      imgTarjeta: academiaDigitalTarjeta
    },
    steps: [
      {
        number: '01',
        title: 'Objetivos a cumplir',
        description: 'Creacion de branding y logo.Aumentar la visibilidad de la marca personal en el mercado digital. Llegar a más gente a través del posicionamiento orgánico y generar una comunidad activa de programadores. Medir las visitas y el engagement mediante Google Analytics. Ser reconocido como un referente en la enseñanza de programación.',
      },
      {
        number: '02',
        title: 'Nuestra Propuesta',
        description: 'Diseñar una Landing Page atractiva y optimizada para Publicidad. Que sea fácilmente navegable desde cualquier dispositivo, optimizada para SEO, con las secciones de Blog, Cursos, Contacto, Sobre mi, etc. Se creo de 0 las redes sociales usando la paleta de colores y tipografía junto con el branding.',
      },
      {
        number: '03',
        title: 'Resultados',
        description: 'Se creo una comunidad de desarrolladores de alrededor de 1000 personas. Optimizamos la Landing Page con keywords (palabras clave) relacionadas a la programación web, y así ser un resultado relevante en los anuncios de Google AdWords y de Posicionamiento orgánico SEO. Actualmente la academia tiene un alcance en LATAM, EEUU y Europa.',
      },
    ]
  },
  // Puedes agregar más proyectos aquí siguiendo la misma estructura
  'control-interno-de-ventas': {
    heroBannerProps: {
      title: "Sistema CRM",
      src: "ruta-a-tu-imagen"
    },
    caseStudyProps: {
      title: "Título del Otro Proyecto",
      subtitle: "Subtítulo",
      description: "Descripción del proyecto...",
      rubro: "Tipo de servicio",
      services: "Lista de servicios..."
    },
    gridItems: {
      imgTablet: crmArgentino,
      imgComputadora: crmArgentino,
      imgTelefono: crmArgentino,
      imgTarjeta: crmArgentino
    },
    steps: [
      // ... pasos del proyecto
    ]
  }
};