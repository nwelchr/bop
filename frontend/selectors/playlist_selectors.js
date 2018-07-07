import { createSelector } from 'reselect';

const getPlaylists = state => state.entities.playlists;
const getCurrentUser = state => state.session.currentUser;

export const makeGetUserPlaylists = () =>
  createSelector([getPlaylists, getCurrentUser], (playlists, currentUser) => {
    const userPlaylists = Object.values(playlists);
    return userPlaylists.length > 0
      ? userPlaylists.filter(
          playlist => playlist.creatorName === currentUser.username
        )
      : null;
  });

export const makeGetNewPlaylists = () =>
  createSelector([getPlaylists, getCurrentUser], (playlists, currentUser) => {
    const userPlaylists = Object.values(playlists);
    return userPlaylists.length > 0
      ? userPlaylists.filter(
          playlist => playlist.creatorName !== currentUser.username
        )
      : null;
  });
