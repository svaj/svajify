import { TrackList } from './views';

export const routes = [
  {
    path: '/tracks',
    exact: true,
    component: TrackList,
    authenticatedRequired: true
  }
];
