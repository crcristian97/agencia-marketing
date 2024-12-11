import { Globe } from 'lucide-react';

const FAQSection = () => {
  return (
    <section className="bg-gray-100 py-32">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <div className="flex flex-col items-center mb-8">
          <Globe className="text-5xl mb-4 text-violet-600" />
          <h2 className="text-4xl font-bold text-center sm:text-5xl text-black tracking-tight">
            Preguntas frecuentes
          </h2>
        </div>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-200">
          <details>
            <summary className="py-3 outline-none cursor-pointer focus:text-violet-600 text-lg font-medium">
            ¿Qué tipo de proyectos manejamos?
            </summary>
            <div className="px-4 pb-4">
              <p className="text-gray-600">
              Nos especializadamos en el desarrollo de soluciones a medida, incluyendo aplicaciones web, móviles y sistemas empresariales internos.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-3 outline-none cursor-pointer focus:text-violet-600 text-lg font-medium">
            ¿Cuáles son las etapas del proceso de desarrollo?
            </summary>
            <div className="px-4 pb-4">
              <p className="text-gray-600">
              Nuestro proceso incluye una fase de análisis y requisitos, diseño, desarrollo ágil, pruebas de calidad, implementación y soporte post-lanzamiento. Nos aseguramos de que cada etapa esté alineada con los objetivos de negocio del cliente.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-3 outline-none cursor-pointer focus:text-violet-600 text-lg font-medium">
            ¿Cómo manejan la seguridad de los datos en el software que desarrollan?
            </summary>
            <div className="px-4 pb-4">
              <p className="text-gray-600">
              La seguridad es nuestra prioridad. Utilizamos prácticas de codificación seguras y cumplimos con las normativas más estrictas en cuanto a protección de datos y privacidad, como el cumplimiento de la GDPR, para asegurar que los datos de nuestros clientes estén protegidos.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-3 outline-none cursor-pointer focus:text-violet-600 text-lg font-medium">
            ¿Cuál es el costo de desarrollar una aplicación personalizada?
            </summary>
            <div className="px-4 pb-4">
              <p className="text-gray-600">
              El costo varía según la complejidad del proyecto. Después de una evaluación inicial de los requisitos, proporcionamos un presupuesto detallado que incluye todas las fases del proyecto.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-3 outline-none cursor-pointer focus:text-violet-600 text-lg font-medium">
            ¿Ofrecen soporte y mantenimiento después de lanzar el software?
            </summary>
            <div className="px-4 pb-4">
              <p className="text-gray-600">
              Sí, ofrecemos soporte y mantenimiento continuos para asegurarnos de que su software se mantenga actualizado, seguro y funcione sin problemas a lo largo del tiempo.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-3 outline-none cursor-pointer focus:text-violet-600 text-lg font-medium">
            ¿Qué sucede si quiero hacer cambios en el proyecto después de que ya ha comenzado?
            </summary>
            <div className="px-4 pb-4">
              <p className="text-gray-600">
              Gracias a nuestra metodología ágil, podemos adaptarnos a cambios durante el desarrollo. Cualquier modificación será evaluada en términos de alcance, tiempo y costos adicionales, y trabajaremos de cerca con usted para implementarlos.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-3 outline-none cursor-pointer focus:text-violet-600 text-lg font-medium">
            ¿Puedo integrar su software con otras aplicaciones o sistemas que ya utilizo?
            </summary>
            <div className="px-4 pb-4">
              <p className="text-gray-600">
              Sí, nuestro equipo tiene experiencia en integrar aplicaciones con sistemas existentes, ya sea mediante APIs o soluciones personalizadas. Nos aseguramos de que el software se comunique perfectamente con sus otras herramientas o sistemas.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-3 outline-none cursor-pointer focus:text-violet-600 text-lg font-medium">
            ¿Ofrecen alguna garantía sobre el software desarrollado?
            </summary>
            <div className="px-4 pb-4">
              <p className="text-gray-600">
              Ofrecemos una garantía para corregir cualquier error que surja después de la entrega del proyecto. Nuestro equipo de soporte está disponible para resolver cualquier problema que pueda ocurrir tras el lanzamiento del sistema.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-3 outline-none cursor-pointer focus:text-violet-600 text-lg font-medium">
            ¿Cómo me mantendré informado sobre el progreso de mi proyecto?
            </summary>
            <div className="px-4 pb-4">
              <p className="text-gray-600">
              Proporcionamos actualizaciones regulares a través de reuniones semanales, donde revisamos el progreso, las tareas completadas y los próximos pasos. También puede acceder a herramientas de gestión de proyectos para ver el avance en tiempo real.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
