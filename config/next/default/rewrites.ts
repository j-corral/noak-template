import { cwd } from 'process';
import Routes from '../../routes/index';

export type TRewrite = {
  source: string;
  destination: string;
  locale?: boolean | undefined;
};

export type TRewrites = Array<TRewrite>;

function autoRewriteRoutes() {
  const path = require('path');
  const i18nPath = path.join(cwd(), 'i18n.js');
  const i18n = require(i18nPath);

  console.log('Rewriting routes...');

  const defaultLocale = i18n.defaultLocale ?? 'fr';
  let rewrites: TRewrites = [];
  Routes.forEach((route) => {
    if (route?.lang !== undefined) {
      Object.keys(route.lang).forEach((key) => {
        const srcRoute = route?.lang[key].replace(/\//g, '');
        const dstRoute = route.path.replace(/(\/?)(.*)/, '$2');
        const prefix = key !== defaultLocale ? `/${key}` : '';
        const rewrite: TRewrite = {
          source: `${prefix}/${srcRoute}`,
          destination: `${prefix}/${dstRoute}`,
          locale: prefix.length > 0 ? false : undefined,
        };
        rewrites.push(rewrite);
      });
    }
  });

  return rewrites;
}

// https://nextjs.org/docs/api-reference/next.config.js/rewrites
const NextRewrites = {
  beforeFiles: [...autoRewriteRoutes()],
  fallback: [
    {
      source: '/:page',
      destination: '/p/:page',
    },
  ],
};

export default NextRewrites;
