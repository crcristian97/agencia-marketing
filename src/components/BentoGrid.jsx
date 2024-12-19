import { LineChart, Brain, Search, Palette, Globe, Smartphone, BarChart3, Star, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BentoGrid() {
  return (
    <motion.div 
      className="hidden xl:px-48 lg:grid grid-cols-1 grid-rows-12 lg:grid-cols-4 lg:grid-rows-6 bg-gray-50 p-8 gap-4 py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="servicios"
    >
      {/* Bloque principal con visión */}
      <motion.div
        className="relative col-span-1 row-span-4 rounded-xl bg-blue-100 shadow-md p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <LineChart className="w-8 h-8 text-blue-600 mb-3" />
        <h1 className="font-bold text-2xl mb-4 text-black">
          Transformando Ideas en Realidad Digital
        </h1>
        <p className="text-gray-700">
          Expertos en crear experiencias digitales únicas que conectan con tu audiencia y potencian tu negocio.
        </p>
      </motion.div>

      {/* Cuadrícula de servicios */}
      <motion.div
        className="grid grid-rows-1 grid-cols-4 col-span-2 row-span-1 border border-white/50 rounded-xl shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="bg-red-100 rounded-bl-xl rounded-tl-xl flex flex-col items-center justify-center p-2">
          <Search className="w-4 h-4 mb-1" />
          <span className="text-xs font-bold">SEO</span>
        </div>
        <div className="bg-yellow-200 flex flex-col items-center justify-center p-2">
          <Palette className="w-4 h-4 mb-1" />
          <span className="text-xs font-bold">UI/UX</span>
        </div>
        <div className="bg-blue-600 flex flex-col items-center justify-center p-2">
          <Globe className="w-4 h-4 mb-1 text-white" />
          <span className="text-xs font-bold text-white">WEB</span>
        </div>
        <div className="bg-green-500 rounded-tr-xl rounded-br-xl flex flex-col items-center justify-center p-2">
          <Smartphone className="w-4 h-4 mb-1 text-white" />
          <span className="text-xs font-bold text-white">APP</span>
        </div>
      </motion.div>

      {/* Bloque con estadísticas */}
      <motion.div
        className="relative bg-blue-500 col-span-1 row-span-2 rounded-xl shadow-md p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <BarChart3 className="w-8 h-8 text-white mb-3" />
        <h1 className="text-6xl text-white font-bold mb-4">
          30+
        </h1>
        <p className="text-white text-sm">
          Clientes satisfechos que han transformado su presencia digital con nosotros
        </p>
      </motion.div>

      {/* Bloque central con IA */}
      <motion.div
        className="relative bg-gradient-to-br from-green-100 via-yellow-100 to-pink-100 col-span-2 row-span-3 rounded-xl shadow-lg p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Brain className="w-12 h-12 text-violet-600 mb-4" />
        <h1 className="text-5xl font-thin text-dark leading-tight tracking-tighter mb-4">
          Potencia tu Negocio con <br />
          <span className="font-medium bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Inteligencia Artificial
          </span>
        </h1>
        <p className="text-gray-700">
          Implementamos soluciones de IA que optimizan tus procesos y mejoran la experiencia de tus usuarios
        </p>
        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span className="text-xs text-black/60">Innovación Activa</span>
        </div>
      </motion.div>

      {/* Bloque de análisis */}
      <motion.div
        className="relative col-span-1 row-span-4 bg-blue-100 rounded-xl shadow-md p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <LineChart className="w-8 h-8 text-blue-600 mb-3" />
        <h2 className="text-xl font-bold text-black mb-4">
          Análisis Avanzado
        </h2>
        <p className="text-gray-700 text-sm">
          Datos precisos y métricas en tiempo real para tomar decisiones informadas
        </p>
        <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-300">
          Ver Métricas
        </button>
      </motion.div>

      {/* Bloque de satisfacción */}
      <motion.div
        className="relative col-span-1 row-span-2 bg-blue-500 rounded-xl shadow-md p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Star className="w-8 h-8 text-white mb-3" />
        <div className="text-white">
          <span className="text-4xl font-bold">4.8</span>
          <p className="text-sm mt-2">Calificación promedio de satisfacción del cliente</p>
        </div>
      </motion.div>

      {/* Bloque de resultados */}
      <motion.div
        className="relative col-span-2 row-span-2 bg-green-400 rounded-xl shadow-md p-6 text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <TrendingUp className="w-8 h-8 text-white mb-3" />
        <h2 className="text-2xl font-bold mb-2">Resultados Comprobados</h2>
        <p>Incremento promedio del 150% en engagement digital para nuestros clientes</p>
      </motion.div>
    </motion.div>
  );
}
