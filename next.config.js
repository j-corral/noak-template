// !!! YOU MAY NOT EDIT THIS FILE IN CHILD NOAK-THEME !!!
const DefaultNextConf = require("./config/next/conf.default.lock.js");
const CustomNextConf = require("./config/next/conf.custom.js");

const NextConfig = {...DefaultNextConf, ...CustomNextConf};

/** @type {import('next').NextConfig} */
module.exports = NextConfig;
