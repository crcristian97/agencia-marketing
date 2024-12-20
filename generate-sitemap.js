const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://www.wemakeitlab.com' });

  // Agrega tus rutas (puedes automatizar esto según tu proyecto)
  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  sitemap.write({ url: '/about', changefreq: 'weekly', priority: 0.8 });
  sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.6 });

  sitemap.end();

  // Convierte a un archivo XML
  const sitemapOutput = await streamToPromise(sitemap);

  // Escribe el archivo en la carpeta `public`
  createWriteStream('./public/sitemap.xml').write(sitemapOutput);
  console.log('Sitemap generado correctamente en ./public/sitemap.xml');
}

generateSitemap();
