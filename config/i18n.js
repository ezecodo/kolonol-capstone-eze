import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      de: {
        translation: {
          saludo: "Hallo",
          subtitleHeader: "Köln auf Spanisch",
          welcome: "Willkomen in Köln",
          insertUser: "Bitte gib deinen Namen ein:",
          latinFood: "Lateinisches Essen",
          latinMusic: "Latin Musik",
          languageExchange: "Sprach Tandem",
          embassies: "Botschaften",
          noFavorites: "Noch keine Favoriten",
        },
      },
      es: {
        translation: {
          saludo: "Hola",
          subtitleHeader: "Köln en español",
          welcome: "Bienvenide a Colonia",
          insertUser: "Ingresa tu Nombre:",
          latinFood: "Comida Latina",
          latinMusic: "Musica Latina",
          languageExchange: "Intercambio de Idioma",
          embassies: "Embajadas",
          noFavorites: "Todavía no tienes favoritos",
        },
      },
    },
    fallbackLng: "es",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export { i18n };
