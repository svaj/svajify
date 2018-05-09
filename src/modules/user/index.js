import { Settings } from './views';

export const routes = [
  {
    path: '/settings',
    exact: true,
    component: Settings,
    authenticatedRequired: true
  }
];
