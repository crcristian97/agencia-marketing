import React from "react";

export default function Footer() {
  return (
    <footer className="text-white px-8 py-6 bg-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Sección 1 */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Software Factory</h3>
          <p className="mb-2">CABALLITO | Bs. As. - Argentina</p>
          <p className="mb-2">Hidalgo 140</p>
          <p className="mb-2">
            <a href="tel:+1514890000" className="hover:text-yellow-400">
              BS. AS. (+54) 351 752-8830
            </a>
          </p>
          <p> 
              Software de gestión
          </p>
        </div>

        {/* Sección 2 */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Software Digital</h3>
          <ul>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Servicios
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Contacto
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Help
              </a>
            </li>
            
          </ul>
        </div>

        {/* Sección 3 */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Example</h3>
          <ul>
            <li>
              <a href="#" className="hover:text-yellow-400">
                My Personal Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                My Addresses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                My Orders
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                My Favorites
              </a>
            </li>
          </ul>
        </div>

        {/* Sección 4 */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="mb-4">
            <li>
              <a href="tel:+1514890000" className="hover:text-yellow-400">
                1-514-890-0000
              </a>
            </li>
            <li>
              <a
                href="mailto:calinscompagnies@calins.com"
                className="hover:text-yellow-400"
              >
                Send mail
              </a>
            </li>
          </ul>
          <div className="mt-4 icons">
            <a href="#" className="mr-2">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#" className="mr-2">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="mailto:calinscompagnies@calins.com">
              <i className="far fa-envelope fa-2x"></i>
            </a>
          </div>
        </div>
      </div>

      <p className="text-center mt-8">&copy; 2024 - All rights reserved.</p>
    </footer>
  );
}
