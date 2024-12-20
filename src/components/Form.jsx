import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { handleSubmitEmail } from '../apis/sendEmail';
import Spinner from './Spinner';
import MessageAlert from './MessageAlert';
const Form = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    rubro: '',
    mensaje: ''
  });

  const [showThanks, setShowThanks] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await handleSubmitEmail(form.current);
      setShowThanks(true);
      setError(null);
      setTimeout(() => {
        setFormData({
          nombre: '',
          email: '',
          rubro: '',
          mensaje: ''
        });
      }, 7000);
    } catch (err) {
      MessageAlert('error', 'Error al enviar el correo. Inténtalo de nuevo.', 'Por favor, verifica los datos ingresados y intenta nuevamente.', 'Asegúrate de que los datos sean correctos y que tu conexión a internet sea estable.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-2xl mx-auto p-8 bg-gray-100/95 backdrop-blur-md rounded-xl shadow-2xl mt-10"
      id="contacto"
    >
      <h1 className="text-3xl font-bold text-[#2B7EB6] mb-4 text-center">Dejanos tus datos</h1>
      <p className="mb-8 text-gray-600 text-center text-lg">y te contactamos en <span className="font-bold">menos de 24hs</span></p>

      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        <motion.div>
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
            onChange={handleChange}
            value={formData.nombre}
            placeholder="Tu nombre completo"
          />
        </motion.div>

        <motion.div>
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">Mail</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
            onChange={handleChange}
            value={formData.email}
            placeholder="ejemplo@mail.com"
          />
        </motion.div>

        <motion.div>
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="rubro">Rubro</label>
          <select
            id="rubro"
            name="rubro"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
            onChange={handleChange}
            value={formData.rubro}
          >
            <option value="">Selecciona un rubro</option>
            <option value="Indumentaria">Indumentaria</option>
            <option value="Tecnología">Tecnología</option>
            <option value="Productos al por menor">Productos al por menor</option>
            <option value="Otro">Otro</option>
          </select>
        </motion.div>

        <motion.div>
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="mensaje">¿En qué precisás ayuda?</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="4"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
            onChange={handleChange}
            value={formData.mensaje}
            placeholder="Cuéntanos sobre tu proyecto..."
          />
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[#4AD4B9] text-black py-4 rounded-lg font-semibold hover:bg-[#4AD4B9] transition-all duration-200 text-lg shadow-lg hover:shadow-xl"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? <Spinner /> : 'Enviar'}
        </motion.button>
      </form>

      {showThanks && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mt-6 p-4 bg-violet-100 rounded-lg"
        >
          <p className="text-center text-violet-700 font-medium">¡Gracias por contactarnos! En menos de 24 horas nos estaremos comunicando con vos.</p>
        </motion.div>
      )}

      {error && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mt-6 p-4 bg-red-100 rounded-lg"
        >
          <p className="text-center text-red-700 font-medium">{error}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Form;
