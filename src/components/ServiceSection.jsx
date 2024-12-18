import React from "react";
import { motion } from "framer-motion";
import { Globe, Rocket, Users } from "lucide-react";

const ServiceSection = () => {
  return (
    <section className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <motion.div
            className="bg-black border border-violet-600 p-8 rounded-xl hover:shadow-lg hover:shadow-violet-500/20 transition-shadow"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Globe className="w-12 h-12 text-violet-600 mb-6" />
            <h3 className="text-violet-500 text-2xl font-bold mb-4">Activá</h3>
            <p className="text-violet-300">
              tu <span className="text-violet-100 font-semibold">presencia digital</span> en buscadores de forma orgánica. Daremos
              dinamismo a tus contenidos para que tu negocio se <span className="text-violet-100 font-semibold">posicione mejor
              en los resultados de búsqueda</span>.
            </p>
          </motion.div>

          <motion.div
            className="bg-black border border-violet-600 p-8 rounded-xl hover:shadow-lg hover:shadow-violet-500/20 transition-shadow"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Rocket className="w-12 h-12 text-violet-600 mb-6" />
            <h3 className="text-violet-500 text-2xl font-bold mb-4">Impulsá</h3>
            <p className="text-violet-300">
              Tu marca con una página simple de aterrizaje para recibir visitas
              reales de clientes potenciales.
            </p>
            
          </motion.div>

          <motion.div
            className="bg-black border border-violet-600 p-8 rounded-xl hover:shadow-lg hover:shadow-violet-500/20 transition-shadow"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Users className="w-12 h-12 text-violet-600 mb-6" />
            <h3 className="text-violet-500 text-2xl font-bold mb-4">Conectá</h3>
            <p className="text-violet-300">
              tu negocio al mundo digital con herramientas de recolección de
              datos y conversión de interesados en clientes.
            </p>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <a 
            href="#contact"
            className="inline-block mt-6 px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
            title="Solicitar servicio de impulso digital"
            rel="nofollow"
            aria-label="Solicitar información sobre servicios digitales"
          >
            ¡Lo quiero!
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;