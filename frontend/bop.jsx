import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { fetchPlaylists } from './actions/playlist_actions';

import { saveSongToPlaylist } from './actions/song_actions';

import { fetchSearchResults } from './actions/search_actions';

import { fetchSong } from './actions/song_actions';
import { playSong } from './actions/audio_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  // for testing
  window.fetchSearchResults = fetchSearchResults;
  window.saveSongToPlaylist = saveSongToPlaylist;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchSong = fetchSong;
  window.playSong = playSong;
  //

window.fetchPlaylists = fetchPlaylists;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
