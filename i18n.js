// !!! YOU MAY NOT EDIT THIS FILE IN CHILD NOAK-THEME !!!
const CustomI18nPages = require("./config/i18n/pages.custom.js");

const DefaultI18nPages = {
    "*": ["common", "menu", "msg", "cookies", "theme"],
    "/legal": ["legal"],
    "/terms": ["terms"],
}  ;

const pages = {...DefaultI18nPages, ...CustomI18nPages};

module.exports = {
  locales: ["fr", "en", "es"],
  defaultLocale: "fr",
  pages,
  interpolation: {
    prefix: "${",
    suffix: "}",
  },
  loadLocaleFrom: (locale, namespace) => import(`./public/locales/${locale}/${namespace}`).then((m) => m.default),
};
