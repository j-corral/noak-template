const defaultRoutes = require("./default.lock.js");
const customRoutes = require("./custom.js");

module.exports = [...defaultRoutes, ...customRoutes];