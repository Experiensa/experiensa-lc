import i18next from 'i18next';

i18next
  .init({
    interpolation: {
      // React already does escaping
      escapeValue: false,
    },
    lng: experiensa_vars.site_lang || 'en',
    // Using simple hardcoded resources for simple example
    resources: {
      en: {
        translation: {
          days: { label: 'Days' },
          nights: { label: 'Nights' },
          country: { label: 'Country' },
          themes: { label: 'Themes' },
          duration: { label: 'Duration' },
          excerpt: { label: 'Excerpt' },
          places: { label: 'Places' },
          includes: { label: 'Includes' },
          excludes: { label: 'Excludes' },
          price: { label: 'Price' },
          load_more: { label: 'Load More' },
          regions: { label: 'Regions' },
          not_available: { label: 'Not Available' },
          information: { label: 'Information' },
          page_not_found: { label: 'Page Not Found' },
          contact_us: { label: 'Contact us' },
          flyer: { label: 'Flyer' },
          download: { label: 'Download' },
          tour_operator: { label: 'Tour Operator' },
          loading: { label: 'Loading'},
        },
      },
      es: {
        translation: {
          days: { label: 'Días' },
          nights: { label: 'Noches' },
          country: { label: 'Países' },
          themes: { label: 'Temas' },
          duration: { label: 'Duración' },
          excerpt: { label: 'Extracto' },
          places: { label: 'Lugares' },
          includes: { label: 'Incluidos' },
          excludes: { label: 'Excluye' },
          price: { label: 'Precio' },
          load_more: { label: 'Cargas más' },
          regions: { label: 'Regiones' },
          not_available: { label: 'No Disponible' },
          information: { label: 'Información' },
          page_not_found: { label: 'Página no encontrada' },
          contact_us: { label: 'Contáctenos' },
          flyer: { label: 'Folleto' },
          download: { label: 'Descargar' },
          tour_operator: { label: 'Operador Turístico' },
          loading: { label: 'Cargando'},
        },
      },
      fr: {
        translation: {
          days: { label: 'Journées' },
          nights: { label: 'Nuits' },
          country: { label: 'Pays' },
          themes: { label: 'Thèmes' },
          duration: { label: 'Durée' },
          excerpt: { label: 'Extrait' },
          places: { label: 'Lieux' },
          includes: { label: 'Inclus' },
          excludes: { label: 'Exclus' },
          price: { label: 'Prix' },
          load_more: { label: 'Charger plus' },
          regions: { label: ' Les régions' },
          not_available: { label: 'Non disponible' },
          information: { label: 'Information' },
          page_not_found: { label: 'Un instant svp' },
          contact_us: { label: 'Nous contacter' },
          flyer: { label: 'Prospectus' },
          download: { label: 'Télécharger' },
          tour_operator: { label: 'Voyagiste' },
          loading: { label: 'Chargement'},
        },
      }
    },
  })

export default i18next;
