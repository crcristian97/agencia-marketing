import React from "react";
import { motion } from "framer-motion";

const Timeline = () => {
  const timelineItems = [
    {
      title: "Análisis y Estrategia",
      date: "Fase 1",
      description:
        "Desarrollamos un plan estratégico personalizado para tu negocio digital.",
    },
    {
      title: "Diseño y Desarrollo", 
      date: "Fase 2",
      description:
        "Creamos soluciones digitales innovadoras y atractivas que conectan con tu audiencia.",
    },
    {
      title: "Lanzamiento y Optimización",
      date: "Fase 3", 
      description:
        "Implementamos, monitoreamos y optimizamos continuamente para maximizar resultados.",
    },
  ];

  return (
    <motion.div 
      className="py-24 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >      
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold mb-16 px-4 sm:px-8 lg:px-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Nuestro <span className="text-violet-600">Proceso</span>
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 px-4">
          {timelineItems.map(({ title, date, description }, index) => (
            <motion.div 
              key={index} 
              className="flex-1 relative"
              initial={{ opacity: 0, rotateY: -180 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.5,
                delay: index * 0.2,
                type: "spring",
                stiffness: 60
              }}
            >
              {index < timelineItems.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-violet-200" />
              )}
              <div className="p-6 bg-white rounded-lg border border-violet-200 shadow-sm h-full">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-violet-100 rounded-full mr-3">
                    <svg
                      className="w-3 h-3 text-violet-800"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <time className="text-lg font-semibold text-black">
                    {date}
                  </time>
                </div>
                <h3 className="text-2xl font-bold text-[#4AD4B9] mb-3">
                  {title}
                </h3>
                <p className="text-lg text-black">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Timeline;
