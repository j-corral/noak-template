import { TDObject } from '@hoomies/fuel.types.object';

export type TRoute = {
  label: string;
  path: string;
  lang?: TDObject;
  icon?: string;
};

export type TRoutes = TDObject[];

/**
 * Create route object
 * @param {string} label
 * @param {string} path
 * @param {Object} lang
 * @param {string} icon
 * @returns TRoute
 */
export function createRoute(label: TRoute['label'], path: TRoute['path'], lang: TDObject = {}, icon: string = '') {
  return {
    label,
    path,
    lang,
    icon,
  };
}
