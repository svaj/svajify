import { routes as tracks } from './tracks';
import { routes as entrance } from './entrance';
import { routes as general } from './general';
import { routes as user } from './user';

export const routes = [...tracks, ...entrance, ...general, ...user];
