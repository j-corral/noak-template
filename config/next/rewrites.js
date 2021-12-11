// https://nextjs.org/docs/api-reference/next.config.js/rewrites
const NextRewrites = [
    {
        source: '/mentions-legales',
        destination: '/legal',
    },
    {
        source: '/es/notas-legales',
        destination: '/es/legal',
        locale: false
    },
];

module.exports = NextRewrites;