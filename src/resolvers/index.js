import merge from 'lodash.merge';
import { resolvers as spotifyTracks } from './spotifyTracks';

export const resolvers = merge(spotifyTracks);
