import React from 'react';
import { motion } from 'framer-motion';

const MessageAlert = ({ type, message, solution, reason }) => {
  const alertStyles = {
    success: {
      bg: 'bg-green-100',
      text: 'text-green-700',
      border: 'border-green-500'
    },
    error: {
      bg: 'bg-red-100', 
      text: 'text-red-700',
      border: 'border-red-500'
    },
    warning: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-700', 
      border: 'border-yellow-500'
    }
  };

  const style = alertStyles[type] || alertStyles.error;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`p-4 ${style.bg} border-l-4 ${style.border} rounded-lg my-4`}
    >
      <div className={`font-medium ${style.text}`}>
        <p className="text-lg font-bold mb-1">{message}</p>
        
        <p className="text-sm mb-2">
          No te preocupes, esto es algo que podemos solucionar.
        </p>
        
        {reason && (
          <p className="text-sm mb-2">
            Esto ocurrió porque: {reason}
          </p>
        )}
        
        <p className="text-sm mb-2">
          Estamos aquí para ayudarte a resolver esto de la mejor manera posible.
        </p>
        
        {solution && (
          <div className="mt-3">
            <p className="text-sm font-semibold">Solución recomendada:</p>
            <p className="text-sm">{solution}</p>
          </div>
        )}
        
        <p className="text-sm mt-3">
          Si necesitas ayuda adicional, no dudes en contactar a nuestro equipo de soporte.
        </p>
      </div>
    </motion.div>
  );
};

export default MessageAlert;
