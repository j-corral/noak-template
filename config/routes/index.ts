import { TRoute, TRoutes } from './helper';
import DefaultRoutes from './default.lock';
import CustomRoutes from './custom';

/**
 * Get all routes (default and custom)
 *
 */
export function getAllRoutes() {
  return [...DefaultRoutes, ...CustomRoutes];
}

/**
 * Get routes by path
 * @param paths - Array of paths
 * @returns TRoutes
 */
export function getRoutes(paths: Array<string>) {
  let selectedRoutes: TRoutes = [];
  paths.forEach((path) => {
    const route = getRoute(path);
    if (route && Object.keys(route).length > 0) {
      selectedRoutes.push(route);
    }
  });

  return selectedRoutes;
}
/**
 * Get route by path
 *
 * @param {string} path
 * @returns TRoute
 */
export function getRoute(path: TRoute['path']) {
  return Routes.find((route) => route.path === path) ?? {};
}

const Routes: TRoutes = getAllRoutes();
export default Routes;
