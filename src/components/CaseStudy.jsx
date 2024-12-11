export default function CaseStudy( { title, subtitle, description, rubro } ) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-[2fr,1fr] gap-12">
        {/* Main Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <p className="text-sm text-gray-600 uppercase tracking-wider">
              {title}
            </p>
            
            <h1 className="text-4xl font-bold">
              {subtitle}
            </h1>
            
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
  
        {/* Sidebar */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-sm text-gray-600 uppercase tracking-wider">Cliente:</h2>
            <p>{subtitle}</p>
          </div>
  
          <div className="space-y-2">
            <h2 className="text-sm text-gray-600 uppercase tracking-wider">Rubro:</h2>
            <p>{rubro}</p>
          </div>
  
          <div className="space-y-2">
            <h2 className="text-sm text-gray-600 uppercase tracking-wider">Servicios:</h2>
            <p className="text-gray-600 leading-relaxed">
              Diseño de Landing Page + Desarrollo Responsive + Optimización de contenidos para Publicidad + Mobile First + Publicidad Online + Google AdWords + Google Analytics + UX + Diseño web + Presencia Online + Publicidad en Google + Publicidad Digital + Google Ads + SEO + Posicionamiento Online + Google Analytics + Estrategia Online + Marketing Digital
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  