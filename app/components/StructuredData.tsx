export default function StructuredData() {
  const gymStructuredData = {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    "name": "Physique Fitness",
    "description": "理想の身体を科学的にデザインする。フィジークレベルのボディメイクをサポートするパーソナルトレーニングジム",
    "image": "https://physique-fitness.com/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "渋谷区",
      "addressRegion": "東京都",
      "postalCode": "000-0000",
      "streetAddress": "○○○1-2-3"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.6580",
      "longitude": "139.7016"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "22:00"
      }
    ],
    "telephone": "+81-00-0000-0000",
    "priceRange": "¥5,000-¥58,000",
    "url": "https://physique-fitness.com",
    "sameAs": [
      "https://www.instagram.com/physique_fitness",
      "https://twitter.com/physique_fitness",
      "https://www.youtube.com/@physique_fitness"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "50"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "トレーニングプラン",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "週1プラン",
            "description": "週1回 × 60分 / 月4回"
          },
          "price": "32000",
          "priceCurrency": "JPY"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "週2プラン",
            "description": "週2回 × 60分 / 月8回"
          },
          "price": "58000",
          "priceCurrency": "JPY"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "オンラインプラン",
            "description": "オンライン × 週1回 / 月4回"
          },
          "price": "15000",
          "priceCurrency": "JPY"
        }
      ]
    }
  };

  const trainerStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "五十嵐 脩平",
    "jobTitle": "パーソナルトレーナー",
    "description": "JBBFメンズフィジーク選手。年間50名以上のボディメイクをサポート。",
    "worksFor": {
      "@type": "ExerciseGym",
      "name": "Physique Fitness"
    },
    "knowsAbout": [
      "パーソナルトレーニング",
      "フィジーク",
      "ボディメイク",
      "栄養管理"
    ],
    "award": "JBBFメンズフィジーク選手権 出場"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gymStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trainerStructuredData) }}
      />
    </>
  );
}

