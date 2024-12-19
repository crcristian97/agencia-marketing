import React from "react";
import { motion } from "framer-motion";
import { Globe, Rocket, Users } from "lucide-react";

const ServiceSection = () => {
  return (
    <section className="bg-black py-32" id="serviciosSection">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <motion.div
            className="bg-black border border border-[#2B7EB6] p-8 rounded-xl hover:shadow-lg hover:shadow-violet-500/20 transition-shadow"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Globe className="w-12 h-12 text-[#4AD4B9] mb-6" />
            <h1 className="text-[#2B7EB6] text-2xl font-bold mb-4">Activá</h1>
            <p className="text-white">
              tu <span className="font-bold">presencia digital</span> en buscadores de manera orgánica. Haremos que tu negocio tenga cada día un mejor <span className="text-white font-bold">posicionamiento en los resultados de búsqueda</span>.
            </p>
          </motion.div>

          <motion.div
            className="bg-black border border-[#2B7EB6] p-8 rounded-xl hover:shadow-lg hover:shadow-violet-500/20 transition-shadow"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Rocket className="w-12 h-12 text-[#4AD4B9] mb-6" />
            <h1 className="text-[#2B7EB6] text-2xl font-bold mb-4">Impulsá</h1>
            <p className="text-white">
              tu marca con una <span className="font-bold">landing page</span> que recibirá los visitantes de tu sitio y los convertirá en clientes.
            </p>
          </motion.div>

          <motion.div
            className="bg-black border border-[#2B7EB6] p-8 rounded-xl hover:shadow-lg hover:shadow-violet-500/20 transition-shadow"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Users className="w-12 h-12 text-[#4AD4B9] mb-6" />
            <h1 className="text-[#2B7EB6] text-2xl font-bold mb-4">Conectá</h1>
            <p className="text-white">
              tu negocio al mundo digital con herramientas de analítica y recolección de datos. Esto permitirá la <span className="font-bold">conversión de clientes potenciales a clientes que realizan</span>.
            </p>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <a 
            href="#contacto"
            className="inline-block mt-6 px-6 py-3 bg-[#4AD4B9] text-black rounded-lg hover:bg-[#4AD4B9] transition-colors font-bold"
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