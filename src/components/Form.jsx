import { motion } from 'framer-motion';
import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    rubro: '',
    mensaje: ''
  });

  const [showThanks, setShowThanks] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    setShowThanks(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        rubro: '',
        mensaje: ''
      });
      setShowThanks(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const inputVariants = {
    focus: { scale: 1.01 }
  };

  const rubros = [
    'Indumentaria',
    'Tecnología', 
    'Productos al por menor',
    'Otro'
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={formVariants}
      className="max-w-2xl mx-auto p-8 bg-gray-100/95 backdrop-blur-md rounded-xl shadow-2xl"
    >
      <h2 className="text-4xl font-bold mb-4 text-gray-800 text-center">Déjanos tus datos</h2>
      <p className="mb-8 text-gray-600 text-center text-lg">Y te contactamos en menos de 24hs</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div variants={inputVariants} whileFocus="focus">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="nombre">
            Nombre
          </label>
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

        <motion.div variants={inputVariants} whileFocus="focus">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
            Mail
          </label>
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

        <motion.div variants={inputVariants} whileFocus="focus">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="telefono">
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
            onChange={handleChange}
            value={formData.telefono}
            placeholder="+54 (11) XXXX-XXXX"
          />
        </motion.div>

        <motion.div variants={inputVariants} whileFocus="focus">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="rubro">
            Rubro
          </label>
          <select
            id="rubro"
            name="rubro"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
            onChange={handleChange}
            value={formData.rubro}
          >
            <option value="">Selecciona un rubro</option>
            {rubros.map((rubro) => (
              <option key={rubro} value={rubro}>
                {rubro}
              </option>
            ))}
          </select>
        </motion.div>

        <motion.div variants={inputVariants} whileFocus="focus">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="mensaje">
            ¿En qué precisás ayuda?
          </label>
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
          className="w-full bg-violet-600 text-white py-4 rounded-lg font-semibold hover:bg-violet-700 transition-all duration-200 text-lg shadow-lg hover:shadow-xl"
          type="submit"
        >
          Enviar
        </motion.button>
      </form>

      {showThanks && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mt-6 p-4 bg-violet-100 rounded-lg"
        >
          <p className="text-center text-violet-700 font-medium">
            ¡Gracias por contactarnos! En menos de 24 horas nos estaremos comunicando con vos.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Form;
