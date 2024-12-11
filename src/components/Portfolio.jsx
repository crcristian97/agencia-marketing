import React from 'react';
import { items } from '../data/data.js';
import { Link } from 'react-router-dom';

const MarketingPortfolio = () => {
  return (
    <div className="bg-gray-100">
      <header className="py-20 bg-black text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-violet-600 mb-4 tracking-tight">
            Nuestros últimos trabajos de Marketing Digital Integral
          </h1>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {items.map(({ id, category, title, image, backgroundColor }) => (
              <div
                key={id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Link to={`/portfolio/${title.replace(/\s+/g, '-').toLowerCase()}`} className="w-full h-64 relative">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                    style={{
                      backgroundColor: backgroundColor,
                    }}
                  />
                </Link>
                <div className="p-6">
                  <span className="text-sm text-violet-600 font-medium">
                    {category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 text-gray-900">
                    {title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>      
    </div>
  );
};

export default MarketingPortfolio;
