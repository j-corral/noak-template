// !!! YOU MAY NOT EDIT THIS FILE IN CHILD NOAK-THEME !!!
import { TRoute, TRoutes, createRoute } from './helper';

const home: TRoute = createRoute('menu:page.home', '/');
const legal: TRoute = createRoute('menu:page.legal', '/p/legal', {
  fr: '/mentions-legales',
  en: '/legal-notice',
  es: '/informacion-legal',
});

/**
 * Configures Global Routes
 */
const DefaultRoutes: TRoutes = [home, legal];

export default DefaultRoutes;
