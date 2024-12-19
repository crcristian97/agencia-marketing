import React from "react";

export default function Footer() {
  return (
    <footer className="text-white px-8 py-12 bg-black mt-10">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-3xl font-bold">
            <span className="text-white">We make it </span>
            <span className="text-violet-600">LAB</span>
          </h2>

          <div className="space-y-2 text-gray-300">
            <p>Buenos Aires, Argentina</p>
            <a 
              href="mailto:hola@wemakeitlab.com" 
              className="hover:text-violet-400 transition-colors"
            >
              hola@wemakeitlab.com
            </a>
            <p className="text-lg mt-4">Creamos tu sitio web</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} We make it LAB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
