import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords = [], 
  image = "https://res.cloudinary.com/db5ipg1so/image/upload/f_auto,q_auto,w_1200/v1771373563/LOGO_zwramf.png",
  url = "https://gicela-lozano-portfolio.vercel.app",
  type = "website"
}) => {
  const siteTitle = "Gicela Lozano - Desarrolladora Frontend";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  
  const defaultDescription = "Portafolio profesional de Gicela Lozano, desarrolladora frontend especializada en React, JavaScript y diseño web moderno. Descubre mis proyectos y experiencia.";
  const metaDescription = description || defaultDescription;
  
  const defaultKeywords = ["desarrolladora frontend", "React", "JavaScript", "portafolio", "desarrollo web", "UI/UX", "Gicela Lozano"];
  const metaKeywords = [...defaultKeywords, ...keywords];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords.join(', ')} />
      <meta name="author" content="Gicela Lozano" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@gicela_lozano" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#cd708a" />
      <meta name="msapplication-TileColor" content="#cd708a" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data for different page types */}
      {type === 'website' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Gicela Lozano",
            "jobTitle": "Desarrolladora Frontend",
            "description": metaDescription,
            "url": url,
            "sameAs": [
              "https://www.linkedin.com/in/gicela-lozano",
              "https://github.com/gicela-28"
            ],
            "knowsAbout": ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Frontend Development"],
            "offers": {
              "@type": "Service",
              "serviceType": "Desarrollo Web Frontend",
              "description": "Servicios de desarrollo frontend con React y tecnologías modernas"
            }
          })}
        </script>
      )}
      
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://res.cloudinary.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <link rel="apple-touch-icon" href="/vite.svg" />
    </Helmet>
  );
};

export default SEO;
