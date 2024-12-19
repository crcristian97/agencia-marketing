import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Target, ChartBarBig } from 'lucide-react';
import imgHomeSeccion from '../img/imgHomeCTA.webp'

export default function HeroSection() {
  return (
    <section className="pt-20 pb-16 sm:pt-24 lg:overflow-hidden lg:pt-32" aria-label="Sección principal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 relative">
          
          <motion.div
            className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="lg:py-24">
              <h1 className="text-2xl font-bold tracking-tight text-black sm:text-3xl lg:mt-6 xl:text-5xl">
                <span className="block">Tus clientes buscan lo que necesitan.</span>
                <span className="block text-[#2B7EB6]">Te encuentran online y te contactan</span>
              </h1>
              
              <div className="mt-3 space-y-2">
                <p className="text-base text-black sm:text-xl lg:text-lg xl:text-xl">
                  ¿Cómo?
                </p>
                <p className="text-base text-black sm:text-xl lg:text-lg xl:text-xl">
                  Nosotros lo hacemos posible.
                </p>
              </div>

              <div className="mt-10 sm:mt-12">
                <a 
                  href="#serviciosSection" 
                  className="inline-flex items-center rounded-full bg-[#4AD4B9] px-6 py-3 text-sm font-bold text-black hover:bg-[#4AD4B9] focus:outline-none focus:ring-2 focus:ring-[#4AD4B9] focus:ring-offset-2 transition-colors duration-200"
                  aria-label="Solicitar más información"
                >
                  Quiero saber más
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </a>
              </div>
              
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Users className="mx-auto h-8 w-8 text-[#4AD4B9]" aria-hidden="true" />
                  <p className="mt-2 text-sm text-gray-600 font-medium">Desarrollo de Landing Page</p>
                </div>
                <div className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <ChartBarBig className="mx-auto h-8 w-8 text-[#4AD4B9]" aria-hidden="true" />
                  <p className="mt-2 text-sm text-gray-600 font-medium">Soluciones CRM Personalizadas</p>
                </div>
                <div className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Target className="mx-auto h-8 w-8 text-[#4AD4B9]" aria-hidden="true" />
                  <p className="mt-2 text-sm text-gray-600 font-medium">Ecommerce</p>
                  <p className="mt-1 text-sm text-gray-600 font-medium">Tienda online</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-12 lg:mt-32 max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src={imgHomeSeccion}
              alt="Casos de éxito en desarrollo web y marketing digital - We Make It Lab"
              title="Casos de éxito We Make It Lab"
              width={500}
              height={500}
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-lg object-cover hover:shadow-xl transition-shadow duration-300"
              decoding="async"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}