import React from 'react';
import { ArrowRight, Users, Target, ChartBarBig } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="pt-20 pb-16 sm:pt-24 lg:overflow-hidden lg:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 relative">
          {/* Línea divisoria vertical */}
          
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
            <div className="lg:py-24">
              <h1 className="text-3xl font-bold tracking-tight text-black sm:text-3xl lg:mt-6 xl:text-5xl">
                <span className="block">Soluciones IT</span>
                <span className="block text-violet-600">para aumentar tus ventas</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Impulsamos tu presencia digital con estrategias innovadoras y resultados medibles. Convertimos visitantes en clientes leales.
              </p>
              <div className="mt-10 sm:mt-12">
                <button className="inline-flex items-center rounded-full bg-violet-600 px-6 py-3 text-white hover:bg-violet-700">
                  Mira lo que hacemos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <ChartBarBig className="mx-auto h-8 w-8 text-violet-600" />
                  <p className="mt-2 text-sm text-gray-600">CRM</p>
                </div>
                <div className="text-center">
                  <Users className="mx-auto h-8 w-8 text-violet-600" />
                  <p className="mt-2 text-sm text-gray-600">Social Media</p>
                </div>
                <div className="text-center">
                  <Target className="mx-auto h-8 w-8 text-violet-600" />
                  <p className="mt-2 text-sm text-gray-600">Marketing SEM</p>
                </div>
              </div>
            </div>
          </div>
          
            <div className="mt-32 max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <div className="relative w-64 h-64 mx-auto bg-violet-600 rounded-full flex flex-col items-center justify-center text-black cursor-pointer hover:bg-violet-700 transition-colors">
                <p className="text-4xl font-bold text-center mt-7">Mira nuestros casos</p>
                <ArrowRight className="h-8 w-8 transform rotate-90 text-white" />
              </div>
            </div>
        </div>
      </div>
    </div>
    
  );
}