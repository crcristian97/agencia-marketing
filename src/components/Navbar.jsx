import React from 'react';
import { Link  } from 'react-router-dom'
import { Menu, X } from 'lucide-react';
import { redirectToGoogleCalendar } from '../utils/redirectToGoogleCalendar';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold">
              <span className="text-black">We make it </span>
              <span className="text-violet-600">LAB</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="text-gray-900 hover:text-violet-600">Home</Link>
              <a href="#servicios" className="text-gray-900 hover:text-violet-600">Servicios</a>
              <a href="#casoexito" className="text-gray-900 hover:text-violet-600">Casos de éxito</a>
              <a href="#contacto" className="text-gray-900 hover:text-violet-600">Contacto</a>
              <button className="bg-violet-600 text-white px-6 py-2 rounded-full hover:bg-violet-700" onClick={redirectToGoogleCalendar}>
                Agendar Reunión
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#servicios" className="block px-3 py-2 text-gray-900 hover:text-violet-600">Servicios</a>
            <a href="#portfolio" className="block px-3 py-2 text-gray-900 hover:text-violet-600">Portfolio</a>
            <a href="#contacto" className="block px-3 py-2 text-gray-900 hover:text-violet-600">Contacto</a>
            <button className="w-full mt-2 bg-violet-600 text-white px-6 py-2 rounded-full hover:bg-violet-700">
              Empezar Ahora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}