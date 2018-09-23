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
          days: { label: 'Days', },
          nights: { label: 'Nights', },
          country: { label: 'Country'},
          themes: { label: 'Themes'},
          duration: { label: 'Duration'},
          excerpt: { label: 'Excerpt', },
          places: { label: 'Places', },
          includes: { label: 'Includes', },
          excludes: { label: 'Excludes', },
          price: { label: 'Pice', },
          load_more: { label: 'Load More', },
          regions: { label: 'Regions', },
          not_available: { label: 'Not Available', },
          information: { label: 'Information', },
        },
      },
      es: {
        translation: {
          days: { label: 'Días', },
          nights: { label: 'Noches', },
          country: { label: 'Países', },
          themes: { label: 'Temas', },
          duration: { label: 'Duración', },
          excerpt: { label: 'Extracto', },
          places: { label: 'Lugares', },
          includes: { label: 'Incluidos', },
          excludes: { label: 'Excluye', },
          price: { label: 'Precio', },
          load_more: { label: 'Cargas más', },
          regions: { label: 'Regiones', },
          not_available: { label: 'No Disponible', },
          information: { label: 'Información', },
        },
      },
      fr: {
        translation: {
          days: { label: 'Journées', },
          nights: { label: 'Nuits', },
          country: { label: 'Pays'},
          themes: { label: 'Thèmes'},
          duration: { label: 'Durée'},
          excerpt: { label: 'Extrait', },
          places: { label: 'Lieux', },
          includes: { label: 'Inclut', },
          excludes: { label: 'Exclut', },
          price: { label: 'Prix', },
          load_more: { label: 'Charger plus', },
          regions: { label: ' Les régions', },
          not_available: { label: 'Non disponible', },
          information: { label: 'Information', },
        },
      }
    },
  })

export default i18next;
