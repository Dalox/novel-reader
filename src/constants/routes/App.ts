import HomeLayout from '../../pages/Home/home';
import RouteChild from '../types/routes';

/**
 * Rutas Principales de la aplicación.
 */

const appPathStart: string = '/';
const appRoutes: RouteChild[] = [
  {
    path: `${appPathStart}home`,
    component: HomeLayout,
  },
  { redirect: true, to: `${appPathStart}home` },
];

export default appRoutes;
export { appPathStart, appRoutes };
