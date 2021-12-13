function autoRewriteRoutes() {
    const routes = require('../routes');
    const i18n = require('../../i18n.js');

    console.log('Rewriting routes...');
    
    const defaultLocale = i18n.defaultLocale ?? 'fr';
    let rewrites = [];
    routes.forEach(route => {
        if(route?.lang !== undefined) {
            Object.keys(route.lang).forEach(key => {
                const srcRoute = route.lang[key].replace(/\//g, '');
                const dstRoute = route.path.replace(/(\/?)(.*)/, '$2');
                const prefix = (key !== defaultLocale ? `/${key}` : '');
                const rewrite = {
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
    beforeFiles: [
        ...autoRewriteRoutes(),
    ],
    fallback: [
        {
            source: '/:page',
            destination: '/p/:page',
        },
    ],
};

module.exports = NextRewrites;