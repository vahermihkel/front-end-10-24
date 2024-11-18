import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "sort-header": "Sort: ",
      "sort-az": "Sort A-Z",
      "sort-za": "Sort Z-A",
      "gift-card": "Buy our gift cards",
      "cart": "Cart",
      "maintain-products": "Maintain products",
      "maintain": "Maintain",
    }
  },
  et: {
    translation: {
      "sort-header": "Sorteeri: ",
      "sort-az": "Sorteeri A-Z",
      "sort-za": "Sorteeri Z-A",
      "gift-card": "Osta meie kinkekaarte",
      "cart": "Ostukorv",
      "maintain-products": "Halda tooteid",
      "maintain": "Halda",
    }
  }
};
// i    18tähte       n
// internationalization
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;