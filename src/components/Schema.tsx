import Script from "next/script";

export function Schema() {
  // Using generic information as discussed, which can be modified later in production
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Clínica Estética Premium",
    "image": "https://seusite.com.br/og-image.jpg",
    "url": "https://seusite.com.br",
    "telephone": "+5511999999999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Exemplo, 100",
      "addressLocality": "Sua Região",
      "addressRegion": "SP",
      "postalCode": "00000-000",
      "addressCountry": "BR"
    },
    "description": "Clínica estética avançada focada em resultados naturais e excelência em tratamentos faciais e corporais.",
    "priceRange": "$$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ]
  };

  return (
    <Script id="schema-org" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(schemaData)}
    </Script>
  );
}
