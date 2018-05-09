import { Entry } from './views';

export const routes = [
  {
    path: '/login',
    component: Entry,
    authenticatedRequired: false,
    props: {
      showLoginRegisterbtn: true
    }
  }
];
