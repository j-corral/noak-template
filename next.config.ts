// !!! YOU MAY NOT EDIT THIS FILE IN CHILD NOAK-THEME !!!
import DefaultNextConf from './config/next/default/conf.lock';
import CustomNextConf from './config/next/override/conf';

const nextTranslate = require('next-translate');

// Override default config with custom config
const NextConfig = {
  ...DefaultNextConf,
  ...CustomNextConf,
};

/** @type {import('next').NextConfig} */
module.exports = nextTranslate(NextConfig);
