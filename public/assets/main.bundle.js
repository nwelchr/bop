/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./actions/album_actions.js":
/*!**********************************!*\
  !*** ./actions/album_actions.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RECEIVE_ALBUM: function() { return /* binding */ RECEIVE_ALBUM; },
/* harmony export */   RECEIVE_ALBUMS: function() { return /* binding */ RECEIVE_ALBUMS; },
/* harmony export */   RECEIVE_ALBUM_WITH_TRACKLIST: function() { return /* binding */ RECEIVE_ALBUM_WITH_TRACKLIST; },
/* harmony export */   fetchAlbum: function() { return /* binding */ fetchAlbum; },
/* harmony export */   fetchAlbumThenPlaySong: function() { return /* binding */ fetchAlbumThenPlaySong; },
/* harmony export */   fetchAlbums: function() { return /* binding */ fetchAlbums; },
/* harmony export */   receiveAlbum: function() { return /* binding */ receiveAlbum; },
/* harmony export */   receiveAlbumWithTracklist: function() { return /* binding */ receiveAlbumWithTracklist; }
/* harmony export */ });
/* harmony import */ var _util_album_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/album_api_util */ "./util/album_api_util.js");
/* harmony import */ var _loading_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading_actions */ "./actions/loading_actions.js");
/* harmony import */ var _audio_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio_actions */ "./actions/audio_actions.js");



const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
const RECEIVE_ALBUM = "RECEIVE_ALBUM";
const RECEIVE_ALBUM_WITH_TRACKLIST = "RECEIVE_ALBUM_WITH_TRACKLIST";
const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});
const receiveAlbum = payload => ({
  type: RECEIVE_ALBUM,
  payload
});
const receiveAlbumWithTracklist = payload => ({
  type: RECEIVE_ALBUM_WITH_TRACKLIST,
  payload
});
const fetchAlbums = shouldFetchAll => dispatch => {
  dispatch((0,_loading_actions__WEBPACK_IMPORTED_MODULE_1__.startLoading)());
  return _util_album_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchAlbums(shouldFetchAll).then(albums => {
    return dispatch(receiveAlbums(albums));
  });
};
const fetchAlbum = albumId => dispatch => {
  dispatch((0,_loading_actions__WEBPACK_IMPORTED_MODULE_1__.startLoading)());
  return _util_album_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchAlbum(albumId).then(album => {
    return dispatch(receiveAlbum(album));
  });
};
const fetchAlbumThenPlaySong = (albumId, params) => dispatch => _util_album_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchAlbum(albumId).then(payload => {
  dispatch(receiveAlbumWithTracklist(payload));
  const songToPlay = payload.songs[Object.values(payload.album.songIds)[0]];
  // true is for playing first song in the tracklist/shuffledTracklist
  dispatch((0,_audio_actions__WEBPACK_IMPORTED_MODULE_2__.playSong)(songToPlay, params, true));
});

/***/ }),

/***/ "./actions/artist_actions.js":
/*!***********************************!*\
  !*** ./actions/artist_actions.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RECEIVE_ARTIST: function() { return /* binding */ RECEIVE_ARTIST; },
/* harmony export */   RECEIVE_ARTISTS: function() { return /* binding */ RECEIVE_ARTISTS; },
/* harmony export */   RECEIVE_ARTIST_WITH_TRACKLIST: function() { return /* binding */ RECEIVE_ARTIST_WITH_TRACKLIST; },
/* harmony export */   fetchArtist: function() { return /* binding */ fetchArtist; },
/* harmony export */   fetchArtistThenPlaySong: function() { return /* binding */ fetchArtistThenPlaySong; },
/* harmony export */   fetchArtists: function() { return /* binding */ fetchArtists; },
/* harmony export */   receiveArtist: function() { return /* binding */ receiveArtist; },
/* harmony export */   receiveArtistWithTracklist: function() { return /* binding */ receiveArtistWithTracklist; }
/* harmony export */ });
/* harmony import */ var _util_artist_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/artist_api_util */ "./util/artist_api_util.js");
/* harmony import */ var _loading_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading_actions */ "./actions/loading_actions.js");
/* harmony import */ var _audio_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio_actions */ "./actions/audio_actions.js");


const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
const RECEIVE_ARTIST = "RECEIVE_ARTIST";
const RECEIVE_ARTIST_WITH_TRACKLIST = "RECEIVE_ARTIST_WITH_TRACKLIST";

const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists
});
const receiveArtist = payload => ({
  type: RECEIVE_ARTIST,
  payload
});
const receiveArtistWithTracklist = payload => ({
  type: RECEIVE_ARTIST_WITH_TRACKLIST,
  payload
});
const fetchArtists = shouldFetchAll => dispatch => {
  dispatch((0,_loading_actions__WEBPACK_IMPORTED_MODULE_1__.startLoading)());
  return _util_artist_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchArtists(shouldFetchAll).then(artists => {
    return dispatch(receiveArtists(artists));
  });
};
const fetchArtist = artistId => dispatch => {
  dispatch((0,_loading_actions__WEBPACK_IMPORTED_MODULE_1__.startLoading)());
  return _util_artist_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchArtist(artistId).then(artist => {
    return dispatch(receiveArtist(artist));
  });
};
const fetchArtistThenPlaySong = (artistId, params) => dispatch => _util_artist_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchArtist(artistId).then(payload => {
  dispatch(receiveArtistWithTracklist(payload));
  const songToPlay = payload.songs[Object.values(payload.artist.songIds)[0]];
  // true is for playing first song in the tracklist/shuffledTracklist
  dispatch((0,_audio_actions__WEBPACK_IMPORTED_MODULE_2__.playSong)(songToPlay, params, true));
});

/***/ }),

/***/ "./actions/audio_actions.js":
/*!**********************************!*\
  !*** ./actions/audio_actions.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PAUSE: function() { return /* binding */ PAUSE; },
/* harmony export */   PLAY: function() { return /* binding */ PLAY; },
/* harmony export */   PLAY_SONG: function() { return /* binding */ PLAY_SONG; },
/* harmony export */   RECEIVE_PLAY_SONG_WITH_TRACKLIST: function() { return /* binding */ RECEIVE_PLAY_SONG_WITH_TRACKLIST; },
/* harmony export */   pause: function() { return /* binding */ pause; },
/* harmony export */   play: function() { return /* binding */ play; },
/* harmony export */   playSong: function() { return /* binding */ playSong; },
/* harmony export */   playSongWithTracklist: function() { return /* binding */ playSongWithTracklist; },
/* harmony export */   receivePlaySongWithTracklist: function() { return /* binding */ receivePlaySongWithTracklist; }
/* harmony export */ });
const PLAY = "PLAY";
const PLAY_SONG = "PLAY_SONG";
const RECEIVE_PLAY_SONG_WITH_TRACKLIST = "RECEIVE_PLAY_SONG_WITH_TRACKLIST";
const PAUSE = "PAUSE";
const play = () => ({
  type: PLAY
});
const playSong = (song, params, isFirstSong) => ({
  type: PLAY_SONG,
  song,
  params,
  isFirstSong
});
const receivePlaySongWithTracklist = (song, params, tracklist) => ({
  type: RECEIVE_PLAY_SONG_WITH_TRACKLIST,
  song,
  params,
  tracklist
});
const pause = () => ({
  type: PAUSE
});
const playSongWithTracklist = (song, params, tracklist) => dispatch => {
  dispatch(receivePlaySongWithTracklist(song, params, tracklist));
  dispatch(playSong(song, params));
};

/***/ }),

/***/ "./actions/follow_actions.js":
/*!***********************************!*\
  !*** ./actions/follow_actions.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RECEIVE_FOLLOW: function() { return /* binding */ RECEIVE_FOLLOW; },
/* harmony export */   REMOVE_FOLLOW: function() { return /* binding */ REMOVE_FOLLOW; },
/* harmony export */   follow: function() { return /* binding */ follow; },
/* harmony export */   receiveFollow: function() { return /* binding */ receiveFollow; },
/* harmony export */   removeFollow: function() { return /* binding */ removeFollow; },
/* harmony export */   unfollow: function() { return /* binding */ unfollow; }
/* harmony export */ });
/* harmony import */ var _util_follow_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/follow_api_util */ "./util/follow_api_util.js");

const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
const REMOVE_FOLLOW = "REMOVE_FOLLOW";
const receiveFollow = payload => ({
  type: RECEIVE_FOLLOW,
  payload
});
const removeFollow = payload => ({
  type: REMOVE_FOLLOW,
  payload
});
const follow = (type, id) => dispatch => {
  return _util_follow_api_util__WEBPACK_IMPORTED_MODULE_0__.follow(type, id).then(response => {
    dispatch(receiveFollow(response));
  });
};
const unfollow = (type, id) => dispatch => {
  return _util_follow_api_util__WEBPACK_IMPORTED_MODULE_0__.unfollow(type, id).then(response => {
    dispatch(removeFollow(response));
  });
};

/***/ }),

/***/ "./actions/loading_actions.js":
/*!************************************!*\
  !*** ./actions/loading_actions.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   START_LOADING: function() { return /* binding */ START_LOADING; },
/* harmony export */   startLoading: function() { return /* binding */ startLoading; }
/* harmony export */ });
const START_LOADING = "START_LOADING";
const startLoading = () => ({
  type: START_LOADING
});

/***/ }),

/***/ "./actions/playlist_actions.js":
/*!*************************************!*\
  !*** ./actions/playlist_actions.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RECEIVE_CREATED_PLAYLIST: function() { return /* binding */ RECEIVE_CREATED_PLAYLIST; },
/* harmony export */   RECEIVE_MODAL_PLAYLISTS: function() { return /* binding */ RECEIVE_MODAL_PLAYLISTS; },
/* harmony export */   RECEIVE_PLAYLIST: function() { return /* binding */ RECEIVE_PLAYLIST; },
/* harmony export */   RECEIVE_PLAYLISTS: function() { return /* binding */ RECEIVE_PLAYLISTS; },
/* harmony export */   RECEIVE_PLAYLIST_WITH_TRACKLIST: function() { return /* binding */ RECEIVE_PLAYLIST_WITH_TRACKLIST; },
/* harmony export */   REMOVE_PLAYLIST: function() { return /* binding */ REMOVE_PLAYLIST; },
/* harmony export */   createPlaylist: function() { return /* binding */ createPlaylist; },
/* harmony export */   deletePlaylist: function() { return /* binding */ deletePlaylist; },
/* harmony export */   fetchModalPlaylists: function() { return /* binding */ fetchModalPlaylists; },
/* harmony export */   fetchPlaylist: function() { return /* binding */ fetchPlaylist; },
/* harmony export */   fetchPlaylistThenPlaySong: function() { return /* binding */ fetchPlaylistThenPlaySong; },
/* harmony export */   fetchPlaylists: function() { return /* binding */ fetchPlaylists; },
/* harmony export */   receiveCreatedPlaylist: function() { return /* binding */ receiveCreatedPlaylist; },
/* harmony export */   receivePlaylist: function() { return /* binding */ receivePlaylist; },
/* harmony export */   receivePlaylistWithTracklist: function() { return /* binding */ receivePlaylistWithTracklist; },
/* harmony export */   updatePlaylist: function() { return /* binding */ updatePlaylist; }
/* harmony export */ });
/* harmony import */ var _util_playlist_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/playlist_api_util */ "./util/playlist_api_util.js");
/* harmony import */ var _loading_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading_actions */ "./actions/loading_actions.js");
/* harmony import */ var _audio_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio_actions */ "./actions/audio_actions.js");



const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
const RECEIVE_PLAYLIST_WITH_TRACKLIST = "RECEIVE_PLAYLIST_WITH_TRACKLIST";
const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";
const RECEIVE_CREATED_PLAYLIST = "RECEIVE_CREATED_PLAYLIST";
const RECEIVE_MODAL_PLAYLISTS = "RECEIVE_MODAL_PLAYLISTS";
const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});
const receivePlaylist = payload => ({
  type: RECEIVE_PLAYLIST,
  payload
});
const receivePlaylistWithTracklist = payload => ({
  type: RECEIVE_PLAYLIST_WITH_TRACKLIST,
  payload
});
const removePlaylist = id => ({
  type: REMOVE_PLAYLIST,
  id
});
const receiveModalPlaylists = (playlists, songToAddId) => ({
  type: RECEIVE_MODAL_PLAYLISTS,
  playlists,
  songToAddId
});
const receiveCreatedPlaylist = payload => ({
  type: RECEIVE_CREATED_PLAYLIST,
  payload
});
const fetchPlaylists = shouldFetchAll => dispatch => {
  dispatch((0,_loading_actions__WEBPACK_IMPORTED_MODULE_1__.startLoading)());
  return _util_playlist_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchPlaylists(shouldFetchAll).then(playlists => {
    return dispatch(receivePlaylists(playlists));
  });
};
const fetchModalPlaylists = songToAddId => dispatch => {
  return _util_playlist_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchPlaylists().then(playlists => {
    return dispatch(receiveModalPlaylists(playlists, songToAddId));
  });
};
const fetchPlaylist = playlistId => dispatch => {
  dispatch((0,_loading_actions__WEBPACK_IMPORTED_MODULE_1__.startLoading)());
  return _util_playlist_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchPlaylist(playlistId).then(playlist => {
    return dispatch(receivePlaylist(playlist));
  });
};
const fetchPlaylistThenPlaySong = (playlistId, params) => dispatch => _util_playlist_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchPlaylist(playlistId).then(payload => {
  dispatch(receivePlaylistWithTracklist(payload));
  const songToPlay = payload.songs[Object.values(payload.playlist.songIds)[0]];
  // true is for playing first song in the tracklist/shuffledTracklist
  dispatch((0,_audio_actions__WEBPACK_IMPORTED_MODULE_2__.playSong)(songToPlay, params, true));
});
const createPlaylist = playlist => dispatch => _util_playlist_api_util__WEBPACK_IMPORTED_MODULE_0__.createPlaylist(playlist).then(receivedPlaylist => dispatch(receiveCreatedPlaylist(receivedPlaylist)));
const updatePlaylist = playlist => dispatch => _util_playlist_api_util__WEBPACK_IMPORTED_MODULE_0__.updatePlaylist(playlist).then(returnedPlaylist => dispatch(receivePlaylist(playlist)));
const deletePlaylist = playlistId => dispatch => _util_playlist_api_util__WEBPACK_IMPORTED_MODULE_0__.deletePlaylist(playlistId).then(playlist => dispatch(removePlaylist(playlistId)));

/***/ }),

/***/ "./actions/search_actions.js":
/*!***********************************!*\
  !*** ./actions/search_actions.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLEAR_SEARCH_RESULTS: function() { return /* binding */ CLEAR_SEARCH_RESULTS; },
/* harmony export */   RECEIVE_SEARCH_RESULTS: function() { return /* binding */ RECEIVE_SEARCH_RESULTS; },
/* harmony export */   fetchSearchResults: function() { return /* binding */ fetchSearchResults; }
/* harmony export */ });
/* harmony import */ var _util_search_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/search_api_util */ "./util/search_api_util.js");

const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";
const receiveSearchResults = results => ({
  type: RECEIVE_SEARCH_RESULTS,
  results
});
const clearSearchResults = () => ({
  type: RECEIVE_SEARCH_RESULTS
});
const fetchSearchResults = query => dispatch => {
  return _util_search_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchSearchResults(query).then(results => {
    dispatch(receiveSearchResults(results));
  });
};

/***/ }),

/***/ "./actions/session_actions.js":
/*!************************************!*\
  !*** ./actions/session_actions.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLEAR_SESSION_ERRORS: function() { return /* binding */ CLEAR_SESSION_ERRORS; },
/* harmony export */   RECEIVE_CURRENT_USER: function() { return /* binding */ RECEIVE_CURRENT_USER; },
/* harmony export */   RECEIVE_ERRORS: function() { return /* binding */ RECEIVE_ERRORS; },
/* harmony export */   clearSessionErrors: function() { return /* binding */ clearSessionErrors; },
/* harmony export */   login: function() { return /* binding */ login; },
/* harmony export */   logout: function() { return /* binding */ logout; },
/* harmony export */   signup: function() { return /* binding */ signup; }
/* harmony export */ });
/* harmony import */ var _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/session_api_util */ "./util/session_api_util.js");

const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
const RECEIVE_ERRORS = "RECEIVE_ERRORS";
const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";
const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});
const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});
const signup = user => dispatch => _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__.signup(user).then(receivedUser => dispatch(receiveCurrentUser(receivedUser)), err => dispatch(receiveErrors(err.responseJSON)));
const login = user => dispatch => _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__.login(user).then(receivedUser => dispatch(receiveCurrentUser(receivedUser)), err => dispatch(receiveErrors(err.responseJSON)));
const logout = () => dispatch => _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__.logout().then(receivedUser => {
  dispatch(receiveCurrentUser(null));
});

/***/ }),

/***/ "./actions/song_actions.js":
/*!*********************************!*\
  !*** ./actions/song_actions.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RECEIVE_PLAYLIST_SONG_SAVE: function() { return /* binding */ RECEIVE_PLAYLIST_SONG_SAVE; },
/* harmony export */   RECEIVE_SONG: function() { return /* binding */ RECEIVE_SONG; },
/* harmony export */   RECEIVE_SONGS: function() { return /* binding */ RECEIVE_SONGS; },
/* harmony export */   REMOVE_PLAYLIST_SONG_SAVE: function() { return /* binding */ REMOVE_PLAYLIST_SONG_SAVE; },
/* harmony export */   fetchSong: function() { return /* binding */ fetchSong; },
/* harmony export */   fetchSongs: function() { return /* binding */ fetchSongs; },
/* harmony export */   removeSongFromPlaylist: function() { return /* binding */ removeSongFromPlaylist; },
/* harmony export */   saveSongToPlaylist: function() { return /* binding */ saveSongToPlaylist; }
/* harmony export */ });
/* harmony import */ var _util_song_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/song_api_util */ "./util/song_api_util.jsx");
/* harmony import */ var _loading_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading_actions */ "./actions/loading_actions.js");
/* harmony import */ var _playlist_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playlist_actions */ "./actions/playlist_actions.js");


const RECEIVE_SONGS = "RECEIVE_SONGS";
const RECEIVE_SONG = "RECEIVE_SONG";
const RECEIVE_PLAYLIST_SONG_SAVE = "RECEIVE_PLAYLIST_SONG_SAVE";
const REMOVE_PLAYLIST_SONG_SAVE = "REMOVE_PLAYLIST_SONG_SAVE";

const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs
});
const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});
const receivePlaylistSongSave = payload => ({
  type: RECEIVE_PLAYLIST_SONG_SAVE,
  payload
});
const removePlaylistSongSave = payload => ({
  type: REMOVE_PLAYLIST_SONG_SAVE,
  payload
});
const fetchSongs = () => dispatch => {
  dispatch((0,_loading_actions__WEBPACK_IMPORTED_MODULE_1__.startLoading)());
  _util_song_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchSongs().then(songs => dispatch(receiveSongs(songs)));
};
const fetchSong = songId => dispatch => {
  dispatch((0,_loading_actions__WEBPACK_IMPORTED_MODULE_1__.startLoading)());
  _util_song_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchSong(songId).then(song => dispatch(receiveSong(song)));
};
const saveSongToPlaylist = (songId, playlistId) => dispatch => _util_song_api_util__WEBPACK_IMPORTED_MODULE_0__.saveSongToPlaylist(songId, playlistId).then(response => {
  dispatch(receivePlaylistSongSave(response));
});
const removeSongFromPlaylist = (songId, playlistId) => dispatch => _util_song_api_util__WEBPACK_IMPORTED_MODULE_0__.removeSongFromPlaylist(songId, playlistId).then(response => {
  dispatch(removePlaylistSongSave(response));
});

/***/ }),

/***/ "./actions/ui_actions.js":
/*!*******************************!*\
  !*** ./actions/ui_actions.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLOSE_ADD_TO_PLAYLIST_FORM: function() { return /* binding */ CLOSE_ADD_TO_PLAYLIST_FORM; },
/* harmony export */   CLOSE_DROPDOWN: function() { return /* binding */ CLOSE_DROPDOWN; },
/* harmony export */   CLOSE_PLAYLIST_FORM: function() { return /* binding */ CLOSE_PLAYLIST_FORM; },
/* harmony export */   OPEN_ADD_TO_PLAYLIST_FORM: function() { return /* binding */ OPEN_ADD_TO_PLAYLIST_FORM; },
/* harmony export */   OPEN_DROPDOWN: function() { return /* binding */ OPEN_DROPDOWN; },
/* harmony export */   OPEN_PLAYLIST_FORM: function() { return /* binding */ OPEN_PLAYLIST_FORM; },
/* harmony export */   closeAddToPlaylistForm: function() { return /* binding */ closeAddToPlaylistForm; },
/* harmony export */   closeDropdown: function() { return /* binding */ closeDropdown; },
/* harmony export */   closePlaylistForm: function() { return /* binding */ closePlaylistForm; },
/* harmony export */   openAddToPlaylistForm: function() { return /* binding */ openAddToPlaylistForm; },
/* harmony export */   openDropdown: function() { return /* binding */ openDropdown; },
/* harmony export */   openPlaylistForm: function() { return /* binding */ openPlaylistForm; }
/* harmony export */ });
const OPEN_PLAYLIST_FORM = "OPEN_MODAL";
const CLOSE_PLAYLIST_FORM = "CLOSE_MODAL";
const OPEN_DROPDOWN = "OPEN_DROPDOWN";
const CLOSE_DROPDOWN = "CLOSE_DROPDOWN";
const OPEN_ADD_TO_PLAYLIST_FORM = "OPEN_ADD_TO_PLAYLIST_FORM";
const CLOSE_ADD_TO_PLAYLIST_FORM = "CLOSE_ADD_TO_PLAYLIST_FORM";
const openPlaylistForm = () => ({
  type: OPEN_PLAYLIST_FORM
});
const closePlaylistForm = () => ({
  type: CLOSE_PLAYLIST_FORM
});
const openAddToPlaylistForm = () => ({
  type: OPEN_ADD_TO_PLAYLIST_FORM
});
const closeAddToPlaylistForm = () => ({
  type: CLOSE_ADD_TO_PLAYLIST_FORM
});
const openDropdown = () => ({
  type: OPEN_DROPDOWN
});
const closeDropdown = () => ({
  type: CLOSE_DROPDOWN
});

/***/ }),

/***/ "./actions/user_actions.js":
/*!*********************************!*\
  !*** ./actions/user_actions.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RECEIVE_USER: function() { return /* binding */ RECEIVE_USER; },
/* harmony export */   RECEIVE_USERS: function() { return /* binding */ RECEIVE_USERS; },
/* harmony export */   fetchUser: function() { return /* binding */ fetchUser; },
/* harmony export */   fetchUsers: function() { return /* binding */ fetchUsers; }
/* harmony export */ });
/* harmony import */ var _util_user_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/user_api_util */ "./util/user_api_util.js");
/* harmony import */ var _loading_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading_actions */ "./actions/loading_actions.js");


const RECEIVE_USERS = "RECEIVE_USERS";
const RECEIVE_USER = "RECEIVE_USER";
const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});
const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});
const fetchUsers = () => dispatch => {
  dispatch((0,_loading_actions__WEBPACK_IMPORTED_MODULE_1__.startLoading)());
  _util_user_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchUsers().then(users => dispatch(receiveUsers(users)));
};
const fetchUser = userId => dispatch => {
  dispatch((0,_loading_actions__WEBPACK_IMPORTED_MODULE_1__.startLoading)());
  _util_user_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchUser(userId).then(user => {
    dispatch(receiveUser(user));
  });
};

/***/ }),

/***/ "./bop.jsx":
/*!*****************!*\
  !*** ./bop.jsx ***!
  \*****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var _components_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/root */ "./components/root.jsx");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/store */ "./store/store.js");




document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
    store = (0,_store_store__WEBPACK_IMPORTED_MODULE_3__["default"])(preloadedState);
    delete window.currentUser;
  } else {
    store = (0,_store_store__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }
  const root = document.getElementById("root");
  react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_root__WEBPACK_IMPORTED_MODULE_2__["default"], {
    store: store
  }), root);
});

/***/ }),

/***/ "./components/albums/album_index.jsx":
/*!*******************************************!*\
  !*** ./components/albums/album_index.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _util_route_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/route_util */ "./util/route_util.jsx");
/* harmony import */ var _album_index_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./album_index_item */ "./components/albums/album_index_item.jsx");
/* harmony import */ var _modals_new_playlist_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/new_playlist_modal */ "./components/modals/new_playlist_modal.jsx");
/* harmony import */ var _navbar_top_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar/top_navbar */ "./components/navbar/top_navbar.jsx");






class AlbumIndex extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }
  componentDidMount() {
    // if (this.props.albums.length < 1) this.props.fetchAlbums();
    this.props.fetchAlbums();
  }
  openModal() {
    this.setState({
      isModalOpen: true
    });
  }
  closeModal() {
    this.setState({
      isModalOpen: false
    });
  }
  render() {
    if (this.props.loading) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: "main",
        style: this.props.background
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: "index-page-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_navbar_top_navbar__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: "music-index"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "music-index-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, this.props.albums.map(album => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_album_index_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: album.id,
        album: album,
        renderButton: true
      })))))));
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (AlbumIndex);

/***/ }),

/***/ "./components/albums/album_index_container.js":
/*!****************************************************!*\
  !*** ./components/albums/album_index_container.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _album_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./album_index */ "./components/albums/album_index.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_album_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/album_actions */ "./actions/album_actions.js");
/* harmony import */ var _actions_audio_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/audio_actions */ "./actions/audio_actions.js");
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/ui_actions */ "./actions/ui_actions.js");





const mapStateToProps = state => {
  return {
    albums: Object.values(state.entities.albums),
    loading: state.ui.loading.global,
    background: {
      backgroundColor: "#705a27"
    }
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchAlbums: () => dispatch((0,_actions_album_actions__WEBPACK_IMPORTED_MODULE_2__.fetchAlbums)()),
    play: () => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_3__.play)()),
    openPlaylistForm: () => dispatch((0,_actions_ui_actions__WEBPACK_IMPORTED_MODULE_4__.openPlaylistForm)())
  };
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_album_index__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./components/albums/album_index_item.jsx":
/*!************************************************!*\
  !*** ./components/albums/album_index_item.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_audio_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/audio_actions */ "./actions/audio_actions.js");
/* harmony import */ var _actions_song_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/song_actions */ "./actions/song_actions.js");
/* harmony import */ var _actions_album_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/album_actions */ "./actions/album_actions.js");






class AlbumIndexItem extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
  }
  componentDidMount() {
    $(document).on("mouseenter", ".media-wrapper", function () {
      const that = this;
      $(this).find(":button").show();
      $(this).find(".media__body").addClass("hovering");
      $(this).find(".play-pause").addClass("hovering");
      $(this).on("onclick", ":button", function () {
        $(that).find(".media__body").addClass("hovering");
      });
    }).on("mouseleave", ".media-wrapper", function () {
      $(this).find(":button").hide();
      $(this).find(".media__body").removeClass("hovering");
      $(this).find(".play-pause").removeClass("hovering");
    });
  }
  handlePlay(e) {
    e.stopPropagation();
    e.preventDefault();
    const songIds = this.props.album.songIds;
    const _this$props = this.props,
      currentSong = _this$props.currentSong,
      playing = _this$props.playing;
    if (!(songIds && songIds.length > 0)) {
      return;
    }

    // If album has songs and there's no current song,
    // or if the album does have that song in it,
    // fetch the album in question and play it
    if (!currentSong || !songIds.includes(currentSong.id) || Object.keys(this.props.currentSongParams)[0] !== "albumId" || Object.values(this.props.currentSongParams)[0] !== `${this.props.album.id}`) {
      this.props.fetchAlbumThenPlaySong(this.props.album.id, {
        albumId: `${this.props.album.id}`
      });
    } else if (currentSong && !playing) {
      this.props.play();
    } else {
      this.props.pause();
    }
  }
  render() {
    const _this$props2 = this.props,
      currentSong = _this$props2.currentSong,
      currentSongParams = _this$props2.currentSongParams,
      playing = _this$props2.playing,
      album = _this$props2.album;
    let songIds = null;
    if (this.props.album.songIds) songIds = this.props.album.songIds;
    const playIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "icon play index-item"
    });
    const pauseIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "icon pause index-item"
    });
    let playPauseIcon, albumIndexClass;
    if (playing && currentSong && songIds && songIds.includes(currentSong.id) && Object.keys(currentSongParams)[0] === "albumId" && Object.values(currentSongParams)[0] === `${this.props.album.id}`) {
      playPauseIcon = pauseIcon;
      albumIndexClass = "playing";
    } else {
      playPauseIcon = playIcon;
      albumIndexClass = null;
    }
    const link = this.props.match.url === `/albums/${this.props.album.id}` ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      className: "music-index-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "item-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "media"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      alt: "",
      className: "media__image",
      src: this.props.album.album_cover_url
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: `media__body ${albumIndexClass}`
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "media-loaded"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, this.props.album.title))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
      className: "music-index-item",
      to: `/albums/${this.props.album.id}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "item-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "media"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      alt: "",
      className: "media__image",
      src: this.props.album.album_cover_url
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: `media__body ${albumIndexClass}`
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "media-loaded"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, this.props.album.title)));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "index-item-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "media-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "button-wrapper"
    }), link, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: `play-pause ${albumIndexClass}`,
      onClick: this.handlePlay
    }, playPauseIcon)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
      className: "user-link",
      to: `/artists/${album.artist_id}`
    }, album.artistName));
  }
}
const mapStateToProps = state => ({
  currentSong: state.ui.playbar.currentSong,
  currentSongParams: state.ui.playbar.currentSongParams,
  playing: state.ui.playbar.playing
});
const mapDispatchToProps = dispatch => ({
  play: () => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_2__.play)()),
  pause: () => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_2__.pause)()),
  playSong: song => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_2__.playSong)(song)),
  fetchAlbumThenPlaySong: (albumId, params) => dispatch((0,_actions_album_actions__WEBPACK_IMPORTED_MODULE_4__.fetchAlbumThenPlaySong)(albumId, params)),
  fetchSong: songId => dispatch((0,_actions_song_actions__WEBPACK_IMPORTED_MODULE_3__.fetchSong)(songId)),
  fetchSongs: () => dispatch((0,_actions_song_actions__WEBPACK_IMPORTED_MODULE_3__.fetchSongs)())
});
/* harmony default export */ __webpack_exports__["default"] = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(AlbumIndexItem)));

/***/ }),

/***/ "./components/app.jsx":
/*!****************************!*\
  !*** ./components/app.jsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _session_new_session_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session/new_session_container */ "./components/session/new_session_container.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/session_actions */ "./actions/session_actions.js");
/* harmony import */ var _session_login_form_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session/login_form_container */ "./components/session/login_form_container.js");
/* harmony import */ var _session_signup_form_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session/signup_form_container */ "./components/session/signup_form_container.js");
/* harmony import */ var _main_page_main_page_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main_page/main_page_container */ "./components/main_page/main_page_container.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router/esm/react-router.js");
/* harmony import */ var _util_route_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/route_util */ "./util/route_util.jsx");








const App = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_6__.AutoRedirectRoute, {
  exact: true,
  path: "/",
  component: _session_new_session_container__WEBPACK_IMPORTED_MODULE_1__["default"]
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_6__.AuthRoute, {
  path: "/login",
  component: _session_login_form_container__WEBPACK_IMPORTED_MODULE_3__["default"]
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_6__.AuthRoute, {
  path: "/signup",
  component: _session_signup_form_container__WEBPACK_IMPORTED_MODULE_4__["default"]
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
  path: "/",
  component: _main_page_main_page_container__WEBPACK_IMPORTED_MODULE_5__["default"]
})));
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./components/artists/artist_index.jsx":
/*!*********************************************!*\
  !*** ./components/artists/artist_index.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _util_route_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/route_util */ "./util/route_util.jsx");
/* harmony import */ var _artist_index_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./artist_index_item */ "./components/artists/artist_index_item.jsx");
/* harmony import */ var _modals_new_playlist_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/new_playlist_modal */ "./components/modals/new_playlist_modal.jsx");
/* harmony import */ var _navbar_top_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar/top_navbar */ "./components/navbar/top_navbar.jsx");






class ArtistIndex extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }
  componentDidMount() {
    // if (this.props.artists.length < 1) this.props.fetchArtists();
    this.props.fetchArtists();
  }
  openModal() {
    this.setState({
      isModalOpen: true
    });
  }
  closeModal() {
    this.setState({
      isModalOpen: false
    });
  }
  render() {
    if (this.props.loading) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: "main",
        style: this.props.background
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: "index-page-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_navbar_top_navbar__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: "music-index"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "music-index-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, this.props.artists.map(artist => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_artist_index_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: artist.id,
        artist: artist,
        renderButton: true
      })))))));
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (ArtistIndex);

/***/ }),

/***/ "./components/artists/artist_index_container.js":
/*!******************************************************!*\
  !*** ./components/artists/artist_index_container.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _artist_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./artist_index */ "./components/artists/artist_index.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_artist_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/artist_actions */ "./actions/artist_actions.js");
/* harmony import */ var _actions_audio_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/audio_actions */ "./actions/audio_actions.js");
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/ui_actions */ "./actions/ui_actions.js");





const mapStateToProps = state => {
  return {
    artists: Object.values(state.entities.artists),
    loading: state.ui.loading.global,
    background: {
      backgroundColor: "#0c5535"
    }
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchArtists: () => dispatch((0,_actions_artist_actions__WEBPACK_IMPORTED_MODULE_2__.fetchArtists)()),
    play: () => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_3__.play)()),
    openPlaylistForm: () => dispatch((0,_actions_ui_actions__WEBPACK_IMPORTED_MODULE_4__.openPlaylistForm)())
  };
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_artist_index__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./components/artists/artist_index_item.jsx":
/*!**************************************************!*\
  !*** ./components/artists/artist_index_item.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_audio_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/audio_actions */ "./actions/audio_actions.js");
/* harmony import */ var _actions_song_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/song_actions */ "./actions/song_actions.js");
/* harmony import */ var _actions_artist_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/artist_actions */ "./actions/artist_actions.js");






class ArtistIndexItem extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
  }
  componentDidMount() {
    $(document).on("mouseenter", ".media-wrapper", function () {
      const that = this;
      $(this).find(":button").show();
      $(this).find(".media__body").addClass("hovering");
      $(this).find(".play-pause").addClass("hovering");
      $(this).on("onclick", ":button", function () {
        $(that).find(".media__body").addClass("hovering");
      });
    }).on("mouseleave", ".media-wrapper", function () {
      $(this).find(":button").hide();
      $(this).find(".media__body").removeClass("hovering");
      $(this).find(".play-pause").removeClass("hovering");
    });
  }
  handlePlay(e) {
    e.stopPropagation();
    e.preventDefault();
    const songIds = this.props.artist.songIds;
    const _this$props = this.props,
      currentSong = _this$props.currentSong,
      playing = _this$props.playing;
    if (!(songIds && songIds.length > 0)) {
      return;
    }

    // If artist has songs and there's no current song,
    // or if the artist does have that song in it,
    // fetch the artist in question and play it
    if (!currentSong || !songIds.includes(currentSong.id) || Object.keys(this.props.currentSongParams)[0] !== "artistId" || Object.values(this.props.currentSongParams)[0] !== `${this.props.artist.id}`) {
      this.props.fetchArtistThenPlaySong(this.props.artist.id, {
        artistId: `${this.props.artist.id}`
      });
    } else if (currentSong && !playing) {
      this.props.play();
    } else {
      this.props.pause();
    }
  }
  render() {
    const artistIndexStyle = {
      borderRadius: "50%"
    };
    const _this$props2 = this.props,
      currentSong = _this$props2.currentSong,
      currentSongParams = _this$props2.currentSongParams,
      playing = _this$props2.playing,
      artist = _this$props2.artist;
    let songIds = null;
    if (this.props.artist.songIds) songIds = this.props.artist.songIds;
    const playIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "icon play index-item"
    });
    const pauseIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "icon pause index-item"
    });
    let playPauseIcon, artistIndexClass;
    if (playing && currentSong && songIds && songIds.includes(currentSong.id) && Object.keys(currentSongParams)[0] === "artistId" && Object.values(currentSongParams)[0] === `${this.props.artist.id}`) {
      playPauseIcon = pauseIcon;
      artistIndexClass = "playing";
    } else {
      playPauseIcon = playIcon;
      artistIndexClass = null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "media-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "button-wrapper"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
      className: "music-index-item",
      to: `/artists/${this.props.artist.id}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "item-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "media"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      alt: "",
      style: artistIndexStyle,
      className: "media__image",
      src: this.props.artist.artist_artwork_url
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: `media__body ${artistIndexClass}`,
      style: artistIndexStyle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "media-loaded",
      style: artistIndexStyle
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, this.props.artist.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: `play-pause ${artistIndexClass}`,
      onClick: this.handlePlay
    }, playPauseIcon));
  }
}
const mapStateToProps = (state, ownProps) => ({
  currentSong: state.ui.playbar.currentSong,
  currentSongParams: state.ui.playbar.currentSongParams,
  playing: state.ui.playbar.playing
});
const mapDispatchToProps = dispatch => ({
  play: () => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_2__.play)()),
  pause: () => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_2__.pause)()),
  playSong: () => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_2__.playSong)()),
  fetchArtistThenPlaySong: (artistId, params) => dispatch((0,_actions_artist_actions__WEBPACK_IMPORTED_MODULE_4__.fetchArtistThenPlaySong)(artistId, params)),
  fetchArtist: artistId => dispatch((0,_actions_artist_actions__WEBPACK_IMPORTED_MODULE_4__.fetchArtist)(artistId)),
  fetchSong: songId => dispatch((0,_actions_song_actions__WEBPACK_IMPORTED_MODULE_3__.fetchSong)(songId)),
  fetchSongs: () => dispatch((0,_actions_song_actions__WEBPACK_IMPORTED_MODULE_3__.fetchSongs)())
});
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(ArtistIndexItem));

/***/ }),

/***/ "./components/browse/browse_index.jsx":
/*!********************************************!*\
  !*** ./components/browse/browse_index.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _util_route_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/route_util */ "./util/route_util.jsx");
/* harmony import */ var _playlists_playlist_index_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../playlists/playlist_index_item */ "./components/playlists/playlist_index_item.jsx");
/* harmony import */ var _albums_album_index_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../albums/album_index_item */ "./components/albums/album_index_item.jsx");
/* harmony import */ var _artists_artist_index_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../artists/artist_index_item */ "./components/artists/artist_index_item.jsx");
/* harmony import */ var _navbar_browse_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navbar/browse_navbar */ "./components/navbar/browse_navbar.jsx");







class BrowseIndex extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchPlaylists(this.props.shouldFetchAll);
  }
  render() {
    if (this.props.loading || !this.props.playlists) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
    } else {
      const _this$props = this.props,
        playlists = _this$props.playlists,
        currentUser = _this$props.currentUser;
      let newPlaylists;
      newPlaylists = playlists ? this.props.playlists.map(playlist => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_playlists_playlist_index_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: playlist.id,
        playlist: playlist,
        renderButton: true
      })) : null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: "main",
        style: this.props.background
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: "index-page-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_navbar_browse_navbar__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
        className: "browse-index-h1"
      }, "Just For You"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: "music-index"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "music-index-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, newPlaylists)))));
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (BrowseIndex);

/***/ }),

/***/ "./components/browse/browse_index_container.js":
/*!*****************************************************!*\
  !*** ./components/browse/browse_index_container.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _browse_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browse_index */ "./components/browse/browse_index.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _selectors_playlist_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../selectors/playlist_selectors */ "./selectors/playlist_selectors.js");
/* harmony import */ var _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/playlist_actions */ "./actions/playlist_actions.js");
/* harmony import */ var _actions_song_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/song_actions */ "./actions/song_actions.js");
/* harmony import */ var _actions_album_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/album_actions */ "./actions/album_actions.js");
/* harmony import */ var _actions_artist_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/artist_actions */ "./actions/artist_actions.js");
/* harmony import */ var _actions_audio_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/audio_actions */ "./actions/audio_actions.js");








const mapStateToProps = state => {
  return {
    playlists: (0,_selectors_playlist_selectors__WEBPACK_IMPORTED_MODULE_2__.getNewPlaylists)(state),
    loading: state.ui.loading.global,
    background: {
      backgroundColor: "#3c3f5b"
    },
    shouldFetchAll: true,
    currentUser: state.session.currentUser
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: shouldFetchAll => dispatch((0,_actions_playlist_actions__WEBPACK_IMPORTED_MODULE_3__.fetchPlaylists)(shouldFetchAll)),
    fetchAlbums: () => dispatch((0,_actions_album_actions__WEBPACK_IMPORTED_MODULE_5__.fetchAlbums)()),
    fetchArtists: () => dispatch((0,_actions_artist_actions__WEBPACK_IMPORTED_MODULE_6__.fetchArtists)()),
    fetchSongs: () => dispatch((0,_actions_song_actions__WEBPACK_IMPORTED_MODULE_4__.fetchSongs)()),
    play: () => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_7__.play)())
  };
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_browse_index__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./components/footer_player_bar/Duration.jsx":
/*!***************************************************!*\
  !*** ./components/footer_player_bar/Duration.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");

const Duration = _ref => {
  let seconds = _ref.seconds;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("time", {
    dateTime: Math.round(seconds)
  }, parseDuration(seconds));
};
const parseDuration = seconds => {
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = pad(date.getUTCSeconds());
  if (hh) {
    return `${hh}:${pad(mm)}:${ss}`;
  }
  return `${mm}:${ss}`;
};
const pad = string => {
  return ("0" + string).slice(-2);
};
/* harmony default export */ __webpack_exports__["default"] = (Duration);

/***/ }),

/***/ "./components/footer_player_bar/current_song_info.jsx":
/*!************************************************************!*\
  !*** ./components/footer_player_bar/current_song_info.jsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");


class CurrentSongInfo extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const currentSong = this.props.currentSong;
    return !currentSong ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "song-info col-3-11"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "song-info col-3-11"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      className: "song-info-cover-art"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: `/albums/${currentSong.album_id}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      className: "song-info-album-cover",
      src: currentSong.album_cover_url
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      className: "song-info-links"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      className: "album-link",
      to: `/albums/${currentSong.album_id}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, currentSong.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      className: "artist-link",
      to: `/artists/${currentSong.artist_id}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, currentSong.artist))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      className: "song-info-add-song"
    }));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (CurrentSongInfo);

/***/ }),

/***/ "./components/footer_player_bar/current_song_info_container.js":
/*!*********************************************************************!*\
  !*** ./components/footer_player_bar/current_song_info_container.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _current_song_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current_song_info */ "./components/footer_player_bar/current_song_info.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");


const mapStateToProps = (state, ownProps) => {
  return {
    currentSong: state.ui.playbar.currentSong
  };
};
const mapDispatchToProps = dispatch => ({});
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, null)(_current_song_info__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./components/footer_player_bar/footer_player_bar.jsx":
/*!************************************************************!*\
  !*** ./components/footer_player_bar/footer_player_bar.jsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _media_player_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media_player_container */ "./components/footer_player_bar/media_player_container.js");
/* harmony import */ var _playlists_playlist_index_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../playlists/playlist_index_container */ "./components/playlists/playlist_index_container.js");




class FooterPlayerBar extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", {
      className: "player"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_media_player_container__WEBPACK_IMPORTED_MODULE_1__["default"], null));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (FooterPlayerBar);

/***/ }),

/***/ "./components/footer_player_bar/media_player.jsx":
/*!*******************************************************!*\
  !*** ./components/footer_player_bar/media_player.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-player */ "../node_modules/react-player/lib/index.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Duration */ "./components/footer_player_bar/Duration.jsx");
/* harmony import */ var _current_song_info_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./current_song_info_container */ "./components/footer_player_bar/current_song_info_container.js");




class MediaPlayer extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSong: "",
      playing: false,
      volume: 0.8,
      savedVolume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      loop: "none",
      shuffle: false,
      shuffledTracklist: []
    };
    this.togglePlay = this.togglePlay.bind(this);
    this.toggleShuffle = this.toggleShuffle.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.prevSong = this.prevSong.bind(this);
    this.stop = this.stop.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.toggleMuted = this.toggleMuted.bind(this);
    this.toggleLoop = this.toggleLoop.bind(this);
    // this.onPlay = this.onPlay.bind(this);
    // this.onPause = this.onPause.bind(this);
    this.onSeekMouseDown = this.onSeekMouseDown.bind(this);
    this.onSeekChange = this.onSeekChange.bind(this);
    this.onSeekMouseUp = this.onSeekMouseUp.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.onDuration = this.onDuration.bind(this);
    this.ref = this.ref.bind(this);
    this.load = this.load.bind(this);
    this.onEnded = this.onEnded.bind(this);
    this.generateShuffledTracklist = this.generateShuffledTracklist.bind(this);
  }

  // TODO: unexpected behavior: start playlist unshuffled, click shuffle, go into playlist
  // new song starts for no reason
  componentWillReceiveProps(nextProps) {
    // if tracklist is being generated for the first time or there's a new one

    const nextTracklist = nextProps.tracklist;
    const tracklist = this.props.tracklist;
    const shuffle = this.state.shuffle;
    const needToShuffleTracklist = (!tracklist && nextTracklist || tracklist && tracklist !== nextTracklist) && shuffle;
    if (needToShuffleTracklist) {
      /* eslint-disable */console.log(...oo_oo(`1264088850_62_12_62_52_4`, "NEED TO SHUFFLE TRACKLIST"));
      const shuffledTracklist = this.generateShuffledTracklist(nextTracklist);
      this.setState({
        shuffledTracklist
      });
    }

    // to resolve issue with first song being played when on shuffle
    if (nextProps.isFirstSong && shuffle) {
      const shuffledTracklist = this.generateShuffledTracklist(nextTracklist, nextTracklist[Math.floor(Math.random() * nextTracklist.length)]);
      /* eslint-disable */
      console.log(...oo_oo(`1264088850_74_12_74_64_4`, "SET SHUFFLED TRACKLIST ON FIRST SONG?"));
      this.setState({
        shuffledTracklist
      });
      const firstShuffledSong = nextProps.songs.find(song => song.id === shuffledTracklist[0]);
      this.props.playSong(firstShuffledSong, nextProps.currentSongParams);
      /* eslint-disable */
      console.log(...oo_oo(`1264088850_80_12_80_67_4`, "WHAT IS GOING ON HERE", nextProps.playing));
      this.setState({
        playing: nextProps.playing,
        currentSong: firstShuffledSong.mp3_url
      });
      return;
    } else if (nextProps.currentSong !== this.props.currentSong) {
      /* eslint-disable */console.log(...oo_oo(`1264088850_87_12_87_76_4`, "WHAT THE HELL IS GOING ON HERE", nextProps.playing));
      this.setState({
        playing: nextProps.playing,
        currentSong: nextProps.currentSong.mp3_url
      });
    }
    // for some reason this wasn't changing if i wasn't shuffling and i was clicking on another indexitem play button

    if (nextProps.currentSong) {
      if (this.props.currentSong) {
        if (!(Object.keys(this.props.currentSongParams)[0] === Object.keys(nextProps.currentSongParams)[0] && Object.values(this.props.currentSongParams)[0] === Object.values(nextProps.currentSongParams)[0])) {
          this.player.seekTo(0);
        } else if (nextProps.currentSong !== this.props.currentSong) {
          /* eslint-disable */console.log(...oo_oo(`1264088850_107_20_110_21_4`, "WHAT THE EVEN HELL IT IS GOING ON HERE", nextProps.playing));
          this.setState({
            playing: nextProps.playing,
            currentSong: nextProps.currentSong.mp3_url
          });
        }
      } else if (nextProps.currentSong !== this.props.currentSong) {
        /* eslint-disable */console.log(...oo_oo(`1264088850_118_16_121_17_4`, "WHAT EVEN WHAT???? IS IT THE HELL EVEN A... GOING ON HERE", nextProps.playing));
        this.setState({
          playing: nextProps.playing,
          currentSong: nextProps.currentSong.mp3_url
        });
      }
    }
  }
  load(url) {
    this.setState({
      url: url,
      played: 0,
      playing: true
    });
  }
  ref(player) {
    this.player = player;
  }
  togglePlay() {
    if (!this.props.currentSong) {
      return;
    }
    if (this.state.playing === true) this.props.pause();else this.props.play();
  }
  nextSong() {
    if (!(this.props.tracklist && this.props.currentSong)) {
      return;
    }
    let tracklist = this.state.shuffle ? this.state.shuffledTracklist : this.props.tracklist;
    let currSongIdx = tracklist.indexOf(this.props.currentSong.id);
    if (currSongIdx >= tracklist.length - 1) {
      // loop tracklist around
      if (this.state.loop === "loopTracklist") {
        currSongIdx = -1;
      } else {
        this.stop();
        return;
      }
    }
    const nextSongId = tracklist[currSongIdx + 1];
    const nextSong = this.props.songs.filter(song => song.id === nextSongId)[0];
    this.setState({
      played: 0
    });
    this.props.playSong(nextSong, this.props.currentSongParams);
  }
  prevSong() {
    if (!(this.props.tracklist && this.props.currentSong)) {
      return;
    }
    if (this.state.duration * this.state.played >= 3) {
      this.player.seekTo(0);
      return;
    }
    let tracklist = this.state.shuffle ? this.state.shuffledTracklist : this.props.tracklist;
    let currSongIdx = tracklist.indexOf(this.props.currentSong.id);
    if (currSongIdx === 0) {
      // loop around
      if (this.state.loop === "loopTracklist") {
        currSongIdx = tracklist.length;
      } else {
        this.stop();
        return;
      }
    }
    const nextSongId = tracklist[currSongIdx - 1];
    const nextSong = this.props.songs.filter(song => song.id === nextSongId)[0];
    this.props.playSong(nextSong, this.props.currentSongParams);
  }
  stop() {
    /* eslint-disable */console.log(...oo_oo(`1264088850_211_8_211_27_4`, "STOP"));
    this.setState({
      playing: false,
      played: 0
    });
    this.player.seekTo(0);
  }
  handleVolume(e) {
    this.setState({
      volume: e.target.value,
      savedVolume: e.target.value
    });
  }
  toggleMuted() {
    if (this.state.volume < 0.001) {
      this.setState({
        volume: this.state.savedVolume
      });
    } else {
      this.setState({
        volume: 0
      });
    }
  }
  toggleShuffle() {
    const shuffle = !this.state.shuffle;
    let shuffledTracklist;
    if (this.props.tracklist.length) {
      if (!shuffle) {
        shuffledTracklist = [];
      } else {
        shuffledTracklist = this.generateShuffledTracklist(this.props.tracklist, this.props.currentSong.id);
        this.setState({
          shuffledTracklist
        });
      }
    }
    this.setState({
      shuffle,
      shuffledTracklist
    });
  }
  generateShuffledTracklist(arr, nextSong) {
    const shuffledArr = arr.slice(0);
    let j, x, i, shuffleIdx;
    for (i = shuffledArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      var _ref = [shuffledArr[j], shuffledArr[i]];
      shuffledArr[i] = _ref[0];
      shuffledArr[j] = _ref[1];
    }
    if (nextSong) {
      shuffleIdx = shuffledArr.indexOf(nextSong);
      var _ref2 = [shuffledArr[shuffleIdx], shuffledArr[0]];
      shuffledArr[0] = _ref2[0];
      shuffledArr[shuffleIdx] = _ref2[1];
    }
    return shuffledArr;
  }
  toggleLoop() {
    let loop;
    switch (this.state.loop) {
      case "none":
        loop = "loopSong";
        break;
      case "loopSong":
        loop = "loopTracklist";
        break;
      case "loopTracklist":
        loop = "none";
        break;
    }
    this.setState({
      loop
    });
  }
  onEnded() {
    if (!(this.state.loop === "loopSong")) {
      this.nextSong();
    }
  }
  onSeekMouseDown() {
    this.setState({
      seeking: true
    });
  }
  onSeekChange(e) {
    if (!this.state.playing && !this.state.currentSong) {
      return;
    }
    this.setState({
      played: e.target.value
    });
  }
  onSeekMouseUp(e) {
    this.setState({
      seeking: false
    });
    // this.setState({played: e.target.value});
    this.player.seekTo(e.target.value);
  }
  onProgress(state) {
    // If song is finished (played value is 1), set back to the beginning
    // Otherwise, set played
    if (!this.state.seeking) {
      this.setState({
        played: state.played === 1 ? "0" : state.played
      });
    }
  }

  // happens as soon as the component renders
  onDuration(duration) {
    this.setState({
      duration
    });
  }
  render() {
    /* eslint-disable */console.log(...oo_oo(`1264088850_321_8_321_62_4`, this.state.playing === true, "is playing"));
    const _this$state = this.state,
      currentSong = _this$state.currentSong,
      playing = _this$state.playing,
      volume = _this$state.volume,
      muted = _this$state.muted,
      played = _this$state.played,
      loaded = _this$state.loaded,
      duration = _this$state.duration,
      loop = _this$state.loop;

    // const playIcon = <i className="fa fa-play-circle" />;
    const playIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "icon play"
    });
    const pauseIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "icon pause"
    });
    // const pauseIcon = <i classNameName="fa fa-pause-circle" />;
    const prevIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "icon prev"
    });
    const nextIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "icon next"
    });
    const shuffleIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "icon shuffle"
    });
    const shuffleSelectedIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "icon shuffle-selected"
    });
    // const loopIcon = <i classNameName="fa fa-exchange" />;
    const loopIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "icon loop"
    });
    const loopSelectedIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "icon loop-selected"
    });
    const loopTracklistIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "icon loop-tracklist"
    });
    // const noloopIcon = <i className="fa fa-exchange selected" />;
    const volumeUp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-volume-up"
    });
    const volumeDown = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-volume-down"
    });
    const volumeOff = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-volume-off"
    });
    const volumeIcon = volume < 0.01 ? volumeOff : volume < 0.6 ? volumeDown : volumeUp;

    // Really fine tuning on the overlay div
    let seekStyle = played < 0.001 ? {
      width: "0"
    } : {
      width: `${played * 100 + 0.5 - played * 0.5}%`
    };
    let volumeStyle = volume < 0.001 ? {
      width: "0"
    } : {
      width: `${volume * 100 + 0.5 - volume * 0.5}%`
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "footer-bar"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_current_song_info_container__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "play-bar col-5-11"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "play-button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: this.toggleShuffle
    }, this.state.shuffle ? shuffleSelectedIcon : shuffleIcon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: this.prevSong
    }, prevIcon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "play-pause",
      onClick: this.togglePlay
    }, playing ? pauseIcon : playIcon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: this.nextSong
    }, nextIcon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "loop-button",
      onClick: this.toggleLoop
    }, loop === "loopSong" ? loopSelectedIcon : loop === "loopTracklist" ? loopTracklistIcon : loop === "none" ? loopIcon : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "progress-bar"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_player__WEBPACK_IMPORTED_MODULE_3___default()), {
      url: currentSong
      // setting ref to the dom element for seekTo() helper method
      ,
      ref: this.ref,
      width: "0px",
      height: "0px",
      playing: playing,
      onPlay: this.onPlay,
      onPause: this.onPause,
      loop: loop === "loopSong",
      volume: volume,
      muted: muted,
      played: played,
      onEnded: this.onEnded,
      onProgress: this.onProgress,
      onDuration: this.onDuration
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      className: "progress-bar-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "progress-bar-with-duration"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Duration__WEBPACK_IMPORTED_MODULE_1__["default"], {
      seconds: duration * played
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "overlay-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "played",
      style: seekStyle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "player-underlay"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "seek-slider-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      className: "seek-slider",
      type: "range",
      step: "any",
      min: "0",
      max: "1",
      value: played,
      onMouseDown: this.onSeekMouseDown,
      onChange: this.onSeekChange,
      onMouseUp: this.onSeekMouseUp
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Duration__WEBPACK_IMPORTED_MODULE_1__["default"], {
      seconds: duration
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "volume-bar col-3-11 "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "mute",
      onClick: this.toggleMuted
    }, volumeIcon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "progress-bar-with-duration"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "overlay-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "played",
      style: volumeStyle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "player-underlay"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "seek-slider-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "range",
      className: "seek-slider",
      step: "any",
      min: "0",
      max: "1",
      value: volume,
      onChange: this.handleVolume
    }))))));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (MediaPlayer);
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x31fe(_0x317dba,_0x2cf36f){var _0x5d3d49=_0x5d3d();return _0x31fe=function(_0x31fed9,_0x52a263){_0x31fed9=_0x31fed9-0x137;var _0x19fc28=_0x5d3d49[_0x31fed9];return _0x19fc28;},_0x31fe(_0x317dba,_0x2cf36f);}var _0xbb41e5=_0x31fe;(function(_0x8b8a4a,_0x81fc1e){var _0x91615c=_0x31fe,_0xbb5acf=_0x8b8a4a();while(!![]){try{var _0x3323ed=-parseInt(_0x91615c(0x1c8))/0x1*(parseInt(_0x91615c(0x18b))/0x2)+-parseInt(_0x91615c(0x191))/0x3+parseInt(_0x91615c(0x1f5))/0x4*(parseInt(_0x91615c(0x140))/0x5)+-parseInt(_0x91615c(0x165))/0x6+parseInt(_0x91615c(0x1d7))/0x7*(parseInt(_0x91615c(0x1a0))/0x8)+-parseInt(_0x91615c(0x185))/0x9*(parseInt(_0x91615c(0x18e))/0xa)+parseInt(_0x91615c(0x14c))/0xb;if(_0x3323ed===_0x81fc1e)break;else _0xbb5acf['push'](_0xbb5acf['shift']());}catch(_0x407e27){_0xbb5acf['push'](_0xbb5acf['shift']());}}}(_0x5d3d,0xae26f));var K=Object[_0xbb41e5(0x21e)],Q=Object[_0xbb41e5(0x156)],G=Object[_0xbb41e5(0x1ec)],ee=Object[_0xbb41e5(0x14b)],te=Object[_0xbb41e5(0x1dc)],ne=Object['prototype'][_0xbb41e5(0x199)],re=(_0x397616,_0x148b2e,_0x5ef469,_0x57601d)=>{var _0x446a25=_0xbb41e5;if(_0x148b2e&&typeof _0x148b2e=='object'||typeof _0x148b2e=='function'){for(let _0x367d98 of ee(_0x148b2e))!ne[_0x446a25(0x1f8)](_0x397616,_0x367d98)&&_0x367d98!==_0x5ef469&&Q(_0x397616,_0x367d98,{'get':()=>_0x148b2e[_0x367d98],'enumerable':!(_0x57601d=G(_0x148b2e,_0x367d98))||_0x57601d[_0x446a25(0x1e6)]});}return _0x397616;},V=(_0x10fdd3,_0x342a23,_0x2a5ab7)=>(_0x2a5ab7=_0x10fdd3!=null?K(te(_0x10fdd3)):{},re(_0x342a23||!_0x10fdd3||!_0x10fdd3[_0xbb41e5(0x18f)]?Q(_0x2a5ab7,_0xbb41e5(0x15a),{'value':_0x10fdd3,'enumerable':!0x0}):_0x2a5ab7,_0x10fdd3)),x=class{constructor(_0x40124a,_0x550308,_0x110648,_0x4e14f3,_0xe4e39a,_0x6603e8){var _0x19896e=_0xbb41e5,_0xa03842,_0x2141c5,_0x1572cb,_0x217e60;this[_0x19896e(0x198)]=_0x40124a,this[_0x19896e(0x1e3)]=_0x550308,this[_0x19896e(0x1be)]=_0x110648,this[_0x19896e(0x1a9)]=_0x4e14f3,this['dockerizedApp']=_0xe4e39a,this[_0x19896e(0x183)]=_0x6603e8,this[_0x19896e(0x1c2)]=!0x0,this[_0x19896e(0x1b8)]=!0x0,this[_0x19896e(0x1db)]=!0x1,this['_connecting']=!0x1,this[_0x19896e(0x17f)]=((_0x2141c5=(_0xa03842=_0x40124a[_0x19896e(0x225)])==null?void 0x0:_0xa03842[_0x19896e(0x1b7)])==null?void 0x0:_0x2141c5[_0x19896e(0x16a)])===_0x19896e(0x202),this[_0x19896e(0x1c1)]=!((_0x217e60=(_0x1572cb=this[_0x19896e(0x198)][_0x19896e(0x225)])==null?void 0x0:_0x1572cb[_0x19896e(0x1f2)])!=null&&_0x217e60[_0x19896e(0x179)])&&!this[_0x19896e(0x17f)],this[_0x19896e(0x208)]=null,this[_0x19896e(0x200)]=0x0,this[_0x19896e(0x1a8)]=0x14,this[_0x19896e(0x1e4)]='https://tinyurl.com/37x8b79t',this[_0x19896e(0x1d0)]=(this[_0x19896e(0x1c1)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x19896e(0x1bf))+this['_webSocketErrorDocsLink'];}async[_0xbb41e5(0x1f6)](){var _0x37c935=_0xbb41e5,_0x5b5c71,_0x1df74a;if(this[_0x37c935(0x208)])return this[_0x37c935(0x208)];let _0x338fd8;if(this[_0x37c935(0x1c1)]||this[_0x37c935(0x17f)])_0x338fd8=this['global'][_0x37c935(0x21f)];else{if((_0x5b5c71=this['global'][_0x37c935(0x225)])!=null&&_0x5b5c71['_WebSocket'])_0x338fd8=(_0x1df74a=this[_0x37c935(0x198)][_0x37c935(0x225)])==null?void 0x0:_0x1df74a['_WebSocket'];else try{let _0x45d03c=await import('path');_0x338fd8=(await import((await import(_0x37c935(0x146)))[_0x37c935(0x1a2)](_0x45d03c[_0x37c935(0x16d)](this[_0x37c935(0x1a9)],_0x37c935(0x14f)))[_0x37c935(0x19b)]()))['default'];}catch{try{_0x338fd8=require(require('path')[_0x37c935(0x16d)](this[_0x37c935(0x1a9)],'ws'));}catch{throw new Error('failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket');}}}return this[_0x37c935(0x208)]=_0x338fd8,_0x338fd8;}['_connectToHostNow'](){var _0x4725e8=_0xbb41e5;this[_0x4725e8(0x1fb)]||this[_0x4725e8(0x1db)]||this[_0x4725e8(0x200)]>=this[_0x4725e8(0x1a8)]||(this[_0x4725e8(0x1b8)]=!0x1,this[_0x4725e8(0x1fb)]=!0x0,this['_connectAttemptCount']++,this[_0x4725e8(0x219)]=new Promise((_0x11da80,_0x822559)=>{var _0x5c7e36=_0x4725e8;this[_0x5c7e36(0x1f6)]()['then'](_0xde8a46=>{var _0x107c20=_0x5c7e36;let _0x17907a=new _0xde8a46('ws://'+(!this['_inBrowser']&&this[_0x107c20(0x1ef)]?'gateway.docker.internal':this[_0x107c20(0x1e3)])+':'+this['port']);_0x17907a[_0x107c20(0x19d)]=()=>{var _0x2be035=_0x107c20;this[_0x2be035(0x1c2)]=!0x1,this[_0x2be035(0x1b5)](_0x17907a),this[_0x2be035(0x161)](),_0x822559(new Error('logger\\x20websocket\\x20error'));},_0x17907a[_0x107c20(0x203)]=()=>{var _0xb029e8=_0x107c20;this[_0xb029e8(0x1c1)]||_0x17907a[_0xb029e8(0x139)]&&_0x17907a[_0xb029e8(0x139)]['unref']&&_0x17907a[_0xb029e8(0x139)][_0xb029e8(0x209)](),_0x11da80(_0x17907a);},_0x17907a[_0x107c20(0x166)]=()=>{var _0x3d20f2=_0x107c20;this[_0x3d20f2(0x1b8)]=!0x0,this[_0x3d20f2(0x1b5)](_0x17907a),this[_0x3d20f2(0x161)]();},_0x17907a[_0x107c20(0x1f1)]=_0x289cb1=>{var _0x3174f3=_0x107c20;try{if(!(_0x289cb1!=null&&_0x289cb1['data'])||!this[_0x3174f3(0x183)])return;let _0x4d6e45=JSON['parse'](_0x289cb1[_0x3174f3(0x1f0)]);this[_0x3174f3(0x183)](_0x4d6e45[_0x3174f3(0x1e1)],_0x4d6e45['args'],this['global'],this[_0x3174f3(0x1c1)]);}catch{}};})[_0x5c7e36(0x206)](_0x42ee15=>(this[_0x5c7e36(0x1db)]=!0x0,this[_0x5c7e36(0x1fb)]=!0x1,this[_0x5c7e36(0x1b8)]=!0x1,this[_0x5c7e36(0x1c2)]=!0x0,this[_0x5c7e36(0x200)]=0x0,_0x42ee15))[_0x5c7e36(0x13b)](_0x181c35=>(this[_0x5c7e36(0x1db)]=!0x1,this[_0x5c7e36(0x1fb)]=!0x1,console[_0x5c7e36(0x213)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this['_webSocketErrorDocsLink']),_0x822559(new Error(_0x5c7e36(0x195)+(_0x181c35&&_0x181c35['message'])))));}));}['_disposeWebsocket'](_0x16c0ee){var _0x2920e6=_0xbb41e5;this['_connected']=!0x1,this[_0x2920e6(0x1fb)]=!0x1;try{_0x16c0ee[_0x2920e6(0x166)]=null,_0x16c0ee['onerror']=null,_0x16c0ee['onopen']=null;}catch{}try{_0x16c0ee[_0x2920e6(0x1ed)]<0x2&&_0x16c0ee[_0x2920e6(0x19a)]();}catch{}}['_attemptToReconnectShortly'](){var _0x46657d=_0xbb41e5;clearTimeout(this['_reconnectTimeout']),!(this[_0x46657d(0x200)]>=this['_maxConnectAttemptCount'])&&(this[_0x46657d(0x1e5)]=setTimeout(()=>{var _0x26aeee=_0x46657d,_0x542e58;this[_0x26aeee(0x1db)]||this[_0x26aeee(0x1fb)]||(this[_0x26aeee(0x178)](),(_0x542e58=this[_0x26aeee(0x219)])==null||_0x542e58[_0x26aeee(0x13b)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x46657d(0x1e5)]['unref']&&this[_0x46657d(0x1e5)][_0x46657d(0x209)]());}async[_0xbb41e5(0x20b)](_0x495b25){var _0x588fbf=_0xbb41e5;try{if(!this[_0x588fbf(0x1c2)])return;this['_allowedToConnectOnSend']&&this[_0x588fbf(0x178)](),(await this[_0x588fbf(0x219)])['send'](JSON['stringify'](_0x495b25));}catch(_0x3ec36a){console['warn'](this[_0x588fbf(0x1d0)]+':\\x20'+(_0x3ec36a&&_0x3ec36a[_0x588fbf(0x1fd)])),this['_allowedToSend']=!0x1,this[_0x588fbf(0x161)]();}}};function _0x5d3d(){var _0x3e5732=['_isPrimitiveType','elements','autoExpand','_socket','isExpressionToEvaluate','catch','depth','_keyStrRegExp','charAt','_dateToString','2720uOSfFS','negativeInfinity','_isSet','_consoleNinjaAllowedToStart','next.js','type','url','_addProperty','indexOf','56652','isArray','getOwnPropertyNames','32265915oaurYD','[object\\x20Array]','_objectToString','ws/index.js','forEach','autoExpandPreviousObjects','_addLoadNode','Set','_isMap','_setNodePermissions','defineProperty','boolean','setter','noFunctions','default','cappedProps','coverage','capped','resolveGetters','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','_type','_attemptToReconnectShortly','Map','index','getOwnPropertySymbols','5268402fVtLDg','onclose','props','count','elapsed','NEXT_RUNTIME','_console_ninja','_isUndefined','join','_isNegativeZero','includes','args','strLength','now','sort','astro','stringify','_setNodeLabel','root_exp','_connectToHostNow','node','1','sortProps','location','_undefined','127.0.0.1','_inNextEdge','test','_sortProps','1719956545073','eventReceivedCallback','unknown','585117OSYkHB','undefined','nuxt','_addFunctionsNode','POSITIVE_INFINITY','1.0.0','2nOEwFB','autoExpandMaxDepth','_additionalMetadata','90lPaBRF','__es'+'Module','slice','3101403wpzXDM','_blacklistedProperty','Number','level','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','...','Symbol','global','hasOwnProperty','close','toString','string','onerror','current','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','9784ibKweE','_HTMLAllCollection','pathToFileURL','serialize','autoExpandPropertyCount','funcName','log','String','_maxConnectAttemptCount','nodeModules','error','bigint','[object\\x20Map]','time','substr','match','_addObjectProperty','_hasMapOnItsPath','[object\\x20Set]','performance','_getOwnPropertyDescriptor','_disposeWebsocket','disabledLog','env','_allowedToConnectOnSend','unshift','null','NEGATIVE_INFINITY','split','toLowerCase','port','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','Error','_inBrowser','_allowedToSend','totalStrLength','console',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"Nicks-MacBook-Pro-2.local\",\"10.11.60.74\"],'set','_setNodeExpandableState','1204120HTKKRg','hits','_processTreeNodeResult','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','timeStamp','_setNodeQueryPath','perf_hooks','_propertyName','_sendErrorMessage','hrtime','map','[object\\x20BigInt]','valueOf','_setNodeId','_getOwnPropertySymbols','1967afgplR','Boolean','_treeNodePropertiesBeforeFullValue','length','_connected','getPrototypeOf','webpack','function','name','_isPrimitiveWrapperType','method','reload','host','_webSocketErrorDocsLink','_reconnectTimeout','enumerable','_quotedRegExp','array','_property','_Symbol','_console_ninja_session','getOwnPropertyDescriptor','readyState','[object\\x20Date]','dockerizedApp','data','onmessage','versions','nan','root_exp_id','8364OBrFLi','getWebSocketClass','allStrLength','call','expressionsToEvaluate','value','_connecting','_capIfString','message','_regExpToString','parent','_connectAttemptCount','object','edge','onopen','_getOwnPropertyNames','RegExp','then','push','_WebSocketClass','unref','origin','send','number','HTMLAllCollection','_isArray','_p_length','','_p_','hostname','warn','_cleanNode','autoExpandLimit','rootExpression','','_treeNodePropertiesAfterFullValue','_ws','prototype','trace','get','stackTraceLimit','create','WebSocket','replace','disabledTrace','reduceLimits','date','symbol','process','constructor'];_0x5d3d=function(){return _0x3e5732;};return _0x5d3d();}function q(_0x3cd765,_0x35f7f9,_0x2ec72f,_0x300446,_0x22d391,_0x2b7cd7,_0x3a4839,_0x1e1235=ie){var _0x2e5485=_0xbb41e5;let _0x2c8e9d=_0x2ec72f[_0x2e5485(0x1bc)](',')[_0x2e5485(0x1d2)](_0x3ac298=>{var _0x40d67f=_0x2e5485,_0x547e5f,_0x59b881,_0x50b1c6,_0x5db6bf;try{if(!_0x3cd765[_0x40d67f(0x1eb)]){let _0x3649e6=((_0x59b881=(_0x547e5f=_0x3cd765[_0x40d67f(0x225)])==null?void 0x0:_0x547e5f[_0x40d67f(0x1f2)])==null?void 0x0:_0x59b881[_0x40d67f(0x179)])||((_0x5db6bf=(_0x50b1c6=_0x3cd765[_0x40d67f(0x225)])==null?void 0x0:_0x50b1c6['env'])==null?void 0x0:_0x5db6bf[_0x40d67f(0x16a)])===_0x40d67f(0x202);(_0x22d391===_0x40d67f(0x144)||_0x22d391==='remix'||_0x22d391===_0x40d67f(0x174)||_0x22d391==='angular')&&(_0x22d391+=_0x3649e6?'\\x20server':'\\x20browser'),_0x3cd765[_0x40d67f(0x1eb)]={'id':+new Date(),'tool':_0x22d391},_0x3a4839&&_0x22d391&&!_0x3649e6&&console[_0x40d67f(0x1a6)](_0x40d67f(0x15f)+(_0x22d391[_0x40d67f(0x13e)](0x0)['toUpperCase']()+_0x22d391['substr'](0x1))+',','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)',_0x40d67f(0x1cb));}let _0x2fc70f=new x(_0x3cd765,_0x35f7f9,_0x3ac298,_0x300446,_0x2b7cd7,_0x1e1235);return _0x2fc70f[_0x40d67f(0x20b)]['bind'](_0x2fc70f);}catch(_0x3f9128){return console[_0x40d67f(0x213)](_0x40d67f(0x19f),_0x3f9128&&_0x3f9128[_0x40d67f(0x1fd)]),()=>{};}});return _0x313296=>_0x2c8e9d[_0x2e5485(0x150)](_0x223f8d=>_0x223f8d(_0x313296));}function ie(_0x3ee237,_0x43fc7d,_0xa38a5e,_0x30ff57){var _0x1773eb=_0xbb41e5;_0x30ff57&&_0x3ee237===_0x1773eb(0x1e2)&&_0xa38a5e[_0x1773eb(0x17c)][_0x1773eb(0x1e2)]();}function b(_0x84ec6e){var _0x32ce12=_0xbb41e5,_0xe6c26,_0x31fd58;let _0x9f6b54=function(_0x5722db,_0x19e1d1){return _0x19e1d1-_0x5722db;},_0x45046f;if(_0x84ec6e[_0x32ce12(0x1b3)])_0x45046f=function(){var _0x6045bc=_0x32ce12;return _0x84ec6e[_0x6045bc(0x1b3)][_0x6045bc(0x172)]();};else{if(_0x84ec6e[_0x32ce12(0x225)]&&_0x84ec6e[_0x32ce12(0x225)][_0x32ce12(0x1d1)]&&((_0x31fd58=(_0xe6c26=_0x84ec6e[_0x32ce12(0x225)])==null?void 0x0:_0xe6c26['env'])==null?void 0x0:_0x31fd58['NEXT_RUNTIME'])!==_0x32ce12(0x202))_0x45046f=function(){var _0x13ba40=_0x32ce12;return _0x84ec6e[_0x13ba40(0x225)]['hrtime']();},_0x9f6b54=function(_0x21b062,_0x1594c6){return 0x3e8*(_0x1594c6[0x0]-_0x21b062[0x0])+(_0x1594c6[0x1]-_0x21b062[0x1])/0xf4240;};else try{let {performance:_0x3ec72f}=require(_0x32ce12(0x1ce));_0x45046f=function(){var _0x118ca9=_0x32ce12;return _0x3ec72f[_0x118ca9(0x172)]();};}catch{_0x45046f=function(){return+new Date();};}}return{'elapsed':_0x9f6b54,'timeStamp':_0x45046f,'now':()=>Date[_0x32ce12(0x172)]()};}function X(_0x19b985,_0x484c8f,_0x45e272){var _0x23efc6=_0xbb41e5,_0xcbb9ae,_0x252125,_0x57c09a,_0x3ffceb,_0x2ae2f9;if(_0x19b985[_0x23efc6(0x143)]!==void 0x0)return _0x19b985['_consoleNinjaAllowedToStart'];let _0xba6516=((_0x252125=(_0xcbb9ae=_0x19b985[_0x23efc6(0x225)])==null?void 0x0:_0xcbb9ae[_0x23efc6(0x1f2)])==null?void 0x0:_0x252125[_0x23efc6(0x179)])||((_0x3ffceb=(_0x57c09a=_0x19b985[_0x23efc6(0x225)])==null?void 0x0:_0x57c09a[_0x23efc6(0x1b7)])==null?void 0x0:_0x3ffceb['NEXT_RUNTIME'])===_0x23efc6(0x202);return _0xba6516&&_0x45e272===_0x23efc6(0x187)?_0x19b985[_0x23efc6(0x143)]=!0x1:_0x19b985[_0x23efc6(0x143)]=_0xba6516||!_0x484c8f||((_0x2ae2f9=_0x19b985['location'])==null?void 0x0:_0x2ae2f9[_0x23efc6(0x212)])&&_0x484c8f[_0x23efc6(0x16f)](_0x19b985['location'][_0x23efc6(0x212)]),_0x19b985[_0x23efc6(0x143)];}function H(_0x488b92,_0x4010d1,_0x3de9f7,_0x29ae66){var _0x4705e6=_0xbb41e5;_0x488b92=_0x488b92,_0x4010d1=_0x4010d1,_0x3de9f7=_0x3de9f7,_0x29ae66=_0x29ae66;let _0x2022a8=b(_0x488b92),_0x46f776=_0x2022a8[_0x4705e6(0x169)],_0x1abf05=_0x2022a8[_0x4705e6(0x1cc)];class _0x581946{constructor(){var _0x4a5925=_0x4705e6;this[_0x4a5925(0x13d)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x4a5925(0x1e7)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x488b92[_0x4a5925(0x186)],this[_0x4a5925(0x1a1)]=_0x488b92[_0x4a5925(0x20d)],this['_getOwnPropertyDescriptor']=Object[_0x4a5925(0x1ec)],this[_0x4a5925(0x204)]=Object[_0x4a5925(0x14b)],this[_0x4a5925(0x1ea)]=_0x488b92[_0x4a5925(0x197)],this[_0x4a5925(0x1fe)]=RegExp[_0x4a5925(0x21a)][_0x4a5925(0x19b)],this['_dateToString']=Date[_0x4a5925(0x21a)][_0x4a5925(0x19b)];}[_0x4705e6(0x1a3)](_0x3ba054,_0x22cc14,_0x36bac2,_0x21f9df){var _0x61168=_0x4705e6,_0x58dd2b=this,_0x6e0ca8=_0x36bac2[_0x61168(0x138)];function _0x571e9c(_0x575bae,_0x7048db,_0x164f48){var _0x4d8f14=_0x61168;_0x7048db['type']=_0x4d8f14(0x184),_0x7048db[_0x4d8f14(0x1aa)]=_0x575bae[_0x4d8f14(0x1fd)],_0x26db93=_0x164f48[_0x4d8f14(0x179)][_0x4d8f14(0x19e)],_0x164f48['node'][_0x4d8f14(0x19e)]=_0x7048db,_0x58dd2b[_0x4d8f14(0x1d9)](_0x7048db,_0x164f48);}try{_0x36bac2[_0x61168(0x194)]++,_0x36bac2['autoExpand']&&_0x36bac2[_0x61168(0x151)][_0x61168(0x207)](_0x22cc14);var _0x4bb272,_0xe6ba35,_0x3c9584,_0x16590a,_0xf067e3=[],_0x1684fd=[],_0x9629e,_0x78046=this[_0x61168(0x160)](_0x22cc14),_0x5aa619=_0x78046==='array',_0x50db7f=!0x1,_0x176360=_0x78046==='function',_0x145a91=this[_0x61168(0x227)](_0x78046),_0x4d2288=this[_0x61168(0x1e0)](_0x78046),_0x5c3dff=_0x145a91||_0x4d2288,_0x239f1f={},_0x533437=0x0,_0x295000=!0x1,_0x26db93,_0x2da13c=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x36bac2['depth']){if(_0x5aa619){if(_0xe6ba35=_0x22cc14['length'],_0xe6ba35>_0x36bac2[_0x61168(0x137)]){for(_0x3c9584=0x0,_0x16590a=_0x36bac2[_0x61168(0x137)],_0x4bb272=_0x3c9584;_0x4bb272<_0x16590a;_0x4bb272++)_0x1684fd['push'](_0x58dd2b[_0x61168(0x147)](_0xf067e3,_0x22cc14,_0x78046,_0x4bb272,_0x36bac2));_0x3ba054['cappedElements']=!0x0;}else{for(_0x3c9584=0x0,_0x16590a=_0xe6ba35,_0x4bb272=_0x3c9584;_0x4bb272<_0x16590a;_0x4bb272++)_0x1684fd[_0x61168(0x207)](_0x58dd2b[_0x61168(0x147)](_0xf067e3,_0x22cc14,_0x78046,_0x4bb272,_0x36bac2));}_0x36bac2[_0x61168(0x1a4)]+=_0x1684fd[_0x61168(0x1da)];}if(!(_0x78046===_0x61168(0x1ba)||_0x78046===_0x61168(0x186))&&!_0x145a91&&_0x78046!==_0x61168(0x1a7)&&_0x78046!=='Buffer'&&_0x78046!==_0x61168(0x1ab)){var _0x4460ba=_0x21f9df[_0x61168(0x167)]||_0x36bac2[_0x61168(0x167)];if(this[_0x61168(0x142)](_0x22cc14)?(_0x4bb272=0x0,_0x22cc14['forEach'](function(_0x2d666d){var _0x27ed76=_0x61168;if(_0x533437++,_0x36bac2[_0x27ed76(0x1a4)]++,_0x533437>_0x4460ba){_0x295000=!0x0;return;}if(!_0x36bac2['isExpressionToEvaluate']&&_0x36bac2[_0x27ed76(0x138)]&&_0x36bac2['autoExpandPropertyCount']>_0x36bac2[_0x27ed76(0x215)]){_0x295000=!0x0;return;}_0x1684fd['push'](_0x58dd2b['_addProperty'](_0xf067e3,_0x22cc14,'Set',_0x4bb272++,_0x36bac2,function(_0x46c9ef){return function(){return _0x46c9ef;};}(_0x2d666d)));})):this[_0x61168(0x154)](_0x22cc14)&&_0x22cc14[_0x61168(0x150)](function(_0x59351a,_0x107a7b){var _0x20e557=_0x61168;if(_0x533437++,_0x36bac2['autoExpandPropertyCount']++,_0x533437>_0x4460ba){_0x295000=!0x0;return;}if(!_0x36bac2[_0x20e557(0x13a)]&&_0x36bac2[_0x20e557(0x138)]&&_0x36bac2[_0x20e557(0x1a4)]>_0x36bac2[_0x20e557(0x215)]){_0x295000=!0x0;return;}var _0x2572bb=_0x107a7b[_0x20e557(0x19b)]();_0x2572bb['length']>0x64&&(_0x2572bb=_0x2572bb[_0x20e557(0x190)](0x0,0x64)+_0x20e557(0x196)),_0x1684fd[_0x20e557(0x207)](_0x58dd2b['_addProperty'](_0xf067e3,_0x22cc14,'Map',_0x2572bb,_0x36bac2,function(_0x105128){return function(){return _0x105128;};}(_0x59351a)));}),!_0x50db7f){try{for(_0x9629e in _0x22cc14)if(!(_0x5aa619&&_0x2da13c[_0x61168(0x180)](_0x9629e))&&!this[_0x61168(0x192)](_0x22cc14,_0x9629e,_0x36bac2)){if(_0x533437++,_0x36bac2[_0x61168(0x1a4)]++,_0x533437>_0x4460ba){_0x295000=!0x0;break;}if(!_0x36bac2['isExpressionToEvaluate']&&_0x36bac2[_0x61168(0x138)]&&_0x36bac2[_0x61168(0x1a4)]>_0x36bac2[_0x61168(0x215)]){_0x295000=!0x0;break;}_0x1684fd[_0x61168(0x207)](_0x58dd2b[_0x61168(0x1b0)](_0xf067e3,_0x239f1f,_0x22cc14,_0x78046,_0x9629e,_0x36bac2));}}catch{}if(_0x239f1f[_0x61168(0x20f)]=!0x0,_0x176360&&(_0x239f1f['_p_name']=!0x0),!_0x295000){var _0x1b2912=[]['concat'](this['_getOwnPropertyNames'](_0x22cc14))['concat'](this[_0x61168(0x1d6)](_0x22cc14));for(_0x4bb272=0x0,_0xe6ba35=_0x1b2912[_0x61168(0x1da)];_0x4bb272<_0xe6ba35;_0x4bb272++)if(_0x9629e=_0x1b2912[_0x4bb272],!(_0x5aa619&&_0x2da13c[_0x61168(0x180)](_0x9629e[_0x61168(0x19b)]()))&&!this[_0x61168(0x192)](_0x22cc14,_0x9629e,_0x36bac2)&&!_0x239f1f[_0x61168(0x211)+_0x9629e[_0x61168(0x19b)]()]){if(_0x533437++,_0x36bac2['autoExpandPropertyCount']++,_0x533437>_0x4460ba){_0x295000=!0x0;break;}if(!_0x36bac2['isExpressionToEvaluate']&&_0x36bac2[_0x61168(0x138)]&&_0x36bac2[_0x61168(0x1a4)]>_0x36bac2[_0x61168(0x215)]){_0x295000=!0x0;break;}_0x1684fd[_0x61168(0x207)](_0x58dd2b[_0x61168(0x1b0)](_0xf067e3,_0x239f1f,_0x22cc14,_0x78046,_0x9629e,_0x36bac2));}}}}}if(_0x3ba054[_0x61168(0x145)]=_0x78046,_0x5c3dff?(_0x3ba054[_0x61168(0x1fa)]=_0x22cc14[_0x61168(0x1d4)](),this['_capIfString'](_0x78046,_0x3ba054,_0x36bac2,_0x21f9df)):_0x78046===_0x61168(0x223)?_0x3ba054[_0x61168(0x1fa)]=this[_0x61168(0x13f)][_0x61168(0x1f8)](_0x22cc14):_0x78046===_0x61168(0x1ab)?_0x3ba054['value']=_0x22cc14[_0x61168(0x19b)]():_0x78046===_0x61168(0x205)?_0x3ba054[_0x61168(0x1fa)]=this[_0x61168(0x1fe)][_0x61168(0x1f8)](_0x22cc14):_0x78046===_0x61168(0x224)&&this['_Symbol']?_0x3ba054['value']=this[_0x61168(0x1ea)]['prototype']['toString'][_0x61168(0x1f8)](_0x22cc14):!_0x36bac2[_0x61168(0x13c)]&&!(_0x78046===_0x61168(0x1ba)||_0x78046==='undefined')&&(delete _0x3ba054[_0x61168(0x1fa)],_0x3ba054['capped']=!0x0),_0x295000&&(_0x3ba054[_0x61168(0x15b)]=!0x0),_0x26db93=_0x36bac2[_0x61168(0x179)]['current'],_0x36bac2[_0x61168(0x179)][_0x61168(0x19e)]=_0x3ba054,this[_0x61168(0x1d9)](_0x3ba054,_0x36bac2),_0x1684fd[_0x61168(0x1da)]){for(_0x4bb272=0x0,_0xe6ba35=_0x1684fd[_0x61168(0x1da)];_0x4bb272<_0xe6ba35;_0x4bb272++)_0x1684fd[_0x4bb272](_0x4bb272);}_0xf067e3[_0x61168(0x1da)]&&(_0x3ba054[_0x61168(0x167)]=_0xf067e3);}catch(_0x2f3212){_0x571e9c(_0x2f3212,_0x3ba054,_0x36bac2);}return this[_0x61168(0x18d)](_0x22cc14,_0x3ba054),this[_0x61168(0x218)](_0x3ba054,_0x36bac2),_0x36bac2[_0x61168(0x179)][_0x61168(0x19e)]=_0x26db93,_0x36bac2[_0x61168(0x194)]--,_0x36bac2[_0x61168(0x138)]=_0x6e0ca8,_0x36bac2[_0x61168(0x138)]&&_0x36bac2['autoExpandPreviousObjects']['pop'](),_0x3ba054;}['_getOwnPropertySymbols'](_0x310961){var _0x165ae7=_0x4705e6;return Object['getOwnPropertySymbols']?Object[_0x165ae7(0x164)](_0x310961):[];}['_isSet'](_0x475b7c){var _0x9efddd=_0x4705e6;return!!(_0x475b7c&&_0x488b92[_0x9efddd(0x153)]&&this[_0x9efddd(0x14e)](_0x475b7c)===_0x9efddd(0x1b2)&&_0x475b7c['forEach']);}[_0x4705e6(0x192)](_0x508baf,_0x1ec49e,_0x1141ea){var _0x3832f8=_0x4705e6;return _0x1141ea['noFunctions']?typeof _0x508baf[_0x1ec49e]==_0x3832f8(0x1de):!0x1;}[_0x4705e6(0x160)](_0x2d2a7d){var _0x13e507=_0x4705e6,_0x1de26d='';return _0x1de26d=typeof _0x2d2a7d,_0x1de26d===_0x13e507(0x201)?this['_objectToString'](_0x2d2a7d)===_0x13e507(0x14d)?_0x1de26d=_0x13e507(0x1e8):this['_objectToString'](_0x2d2a7d)===_0x13e507(0x1ee)?_0x1de26d=_0x13e507(0x223):this[_0x13e507(0x14e)](_0x2d2a7d)===_0x13e507(0x1d3)?_0x1de26d=_0x13e507(0x1ab):_0x2d2a7d===null?_0x1de26d=_0x13e507(0x1ba):_0x2d2a7d[_0x13e507(0x226)]&&(_0x1de26d=_0x2d2a7d[_0x13e507(0x226)]['name']||_0x1de26d):_0x1de26d==='undefined'&&this[_0x13e507(0x1a1)]&&_0x2d2a7d instanceof this['_HTMLAllCollection']&&(_0x1de26d=_0x13e507(0x20d)),_0x1de26d;}[_0x4705e6(0x14e)](_0x2e988e){var _0x578c6e=_0x4705e6;return Object[_0x578c6e(0x21a)][_0x578c6e(0x19b)]['call'](_0x2e988e);}[_0x4705e6(0x227)](_0x47bf82){var _0xbe7b3=_0x4705e6;return _0x47bf82===_0xbe7b3(0x157)||_0x47bf82===_0xbe7b3(0x19c)||_0x47bf82===_0xbe7b3(0x20c);}[_0x4705e6(0x1e0)](_0x267fe5){var _0x2a5520=_0x4705e6;return _0x267fe5===_0x2a5520(0x1d8)||_0x267fe5===_0x2a5520(0x1a7)||_0x267fe5===_0x2a5520(0x193);}[_0x4705e6(0x147)](_0x21e567,_0x39be74,_0x1b5fc0,_0x4894cb,_0x21b345,_0xf17a4d){var _0x58c975=this;return function(_0x26b45c){var _0x338925=_0x31fe,_0x278a7b=_0x21b345[_0x338925(0x179)][_0x338925(0x19e)],_0x399a78=_0x21b345[_0x338925(0x179)][_0x338925(0x163)],_0x462d41=_0x21b345['node'][_0x338925(0x1ff)];_0x21b345[_0x338925(0x179)]['parent']=_0x278a7b,_0x21b345['node'][_0x338925(0x163)]=typeof _0x4894cb=='number'?_0x4894cb:_0x26b45c,_0x21e567['push'](_0x58c975[_0x338925(0x1e9)](_0x39be74,_0x1b5fc0,_0x4894cb,_0x21b345,_0xf17a4d)),_0x21b345[_0x338925(0x179)][_0x338925(0x1ff)]=_0x462d41,_0x21b345['node'][_0x338925(0x163)]=_0x399a78;};}['_addObjectProperty'](_0x162f74,_0x4e9060,_0x1ff0e2,_0x272b7f,_0x2d077b,_0x11d511,_0x1197e5){var _0xfc7442=_0x4705e6,_0x2af75e=this;return _0x4e9060[_0xfc7442(0x211)+_0x2d077b['toString']()]=!0x0,function(_0x13a703){var _0x1d4916=_0xfc7442,_0x49b07a=_0x11d511[_0x1d4916(0x179)][_0x1d4916(0x19e)],_0x4019f6=_0x11d511[_0x1d4916(0x179)][_0x1d4916(0x163)],_0x321672=_0x11d511['node'][_0x1d4916(0x1ff)];_0x11d511[_0x1d4916(0x179)][_0x1d4916(0x1ff)]=_0x49b07a,_0x11d511[_0x1d4916(0x179)][_0x1d4916(0x163)]=_0x13a703,_0x162f74[_0x1d4916(0x207)](_0x2af75e[_0x1d4916(0x1e9)](_0x1ff0e2,_0x272b7f,_0x2d077b,_0x11d511,_0x1197e5)),_0x11d511['node'][_0x1d4916(0x1ff)]=_0x321672,_0x11d511[_0x1d4916(0x179)][_0x1d4916(0x163)]=_0x4019f6;};}['_property'](_0x2562de,_0x570ace,_0x4865b6,_0x2c4c1a,_0x580587){var _0x334367=_0x4705e6,_0x2a18d9=this;_0x580587||(_0x580587=function(_0x86e9a,_0x248ec2){return _0x86e9a[_0x248ec2];});var _0x56c70a=_0x4865b6[_0x334367(0x19b)](),_0x44b9f5=_0x2c4c1a[_0x334367(0x1f9)]||{},_0xa5e04b=_0x2c4c1a['depth'],_0x53bcf3=_0x2c4c1a[_0x334367(0x13a)];try{var _0x548740=this[_0x334367(0x154)](_0x2562de),_0x10c76d=_0x56c70a;_0x548740&&_0x10c76d[0x0]==='\\x27'&&(_0x10c76d=_0x10c76d['substr'](0x1,_0x10c76d[_0x334367(0x1da)]-0x2));var _0x1210e9=_0x2c4c1a['expressionsToEvaluate']=_0x44b9f5[_0x334367(0x211)+_0x10c76d];_0x1210e9&&(_0x2c4c1a[_0x334367(0x13c)]=_0x2c4c1a['depth']+0x1),_0x2c4c1a[_0x334367(0x13a)]=!!_0x1210e9;var _0x5b15fd=typeof _0x4865b6==_0x334367(0x224),_0xaaae34={'name':_0x5b15fd||_0x548740?_0x56c70a:this[_0x334367(0x1cf)](_0x56c70a)};if(_0x5b15fd&&(_0xaaae34[_0x334367(0x224)]=!0x0),!(_0x570ace===_0x334367(0x1e8)||_0x570ace===_0x334367(0x1c0))){var _0xb664a7=this[_0x334367(0x1b4)](_0x2562de,_0x4865b6);if(_0xb664a7&&(_0xb664a7[_0x334367(0x1c6)]&&(_0xaaae34[_0x334367(0x158)]=!0x0),_0xb664a7[_0x334367(0x21c)]&&!_0x1210e9&&!_0x2c4c1a['resolveGetters']))return _0xaaae34['getter']=!0x0,this[_0x334367(0x1ca)](_0xaaae34,_0x2c4c1a),_0xaaae34;}var _0x5a5874;try{_0x5a5874=_0x580587(_0x2562de,_0x4865b6);}catch(_0x48e08b){return _0xaaae34={'name':_0x56c70a,'type':'unknown','error':_0x48e08b[_0x334367(0x1fd)]},this[_0x334367(0x1ca)](_0xaaae34,_0x2c4c1a),_0xaaae34;}var _0x414cdb=this[_0x334367(0x160)](_0x5a5874),_0x5ae6f0=this['_isPrimitiveType'](_0x414cdb);if(_0xaaae34[_0x334367(0x145)]=_0x414cdb,_0x5ae6f0)this['_processTreeNodeResult'](_0xaaae34,_0x2c4c1a,_0x5a5874,function(){var _0x40ce10=_0x334367;_0xaaae34[_0x40ce10(0x1fa)]=_0x5a5874[_0x40ce10(0x1d4)](),!_0x1210e9&&_0x2a18d9[_0x40ce10(0x1fc)](_0x414cdb,_0xaaae34,_0x2c4c1a,{});});else{var _0x2d7d76=_0x2c4c1a[_0x334367(0x138)]&&_0x2c4c1a[_0x334367(0x194)]<_0x2c4c1a[_0x334367(0x18c)]&&_0x2c4c1a[_0x334367(0x151)][_0x334367(0x148)](_0x5a5874)<0x0&&_0x414cdb!==_0x334367(0x1de)&&_0x2c4c1a[_0x334367(0x1a4)]<_0x2c4c1a['autoExpandLimit'];_0x2d7d76||_0x2c4c1a[_0x334367(0x194)]<_0xa5e04b||_0x1210e9?(this[_0x334367(0x1a3)](_0xaaae34,_0x5a5874,_0x2c4c1a,_0x1210e9||{}),this[_0x334367(0x18d)](_0x5a5874,_0xaaae34)):this[_0x334367(0x1ca)](_0xaaae34,_0x2c4c1a,_0x5a5874,function(){var _0x59e328=_0x334367;_0x414cdb==='null'||_0x414cdb==='undefined'||(delete _0xaaae34[_0x59e328(0x1fa)],_0xaaae34[_0x59e328(0x15d)]=!0x0);});}return _0xaaae34;}finally{_0x2c4c1a[_0x334367(0x1f9)]=_0x44b9f5,_0x2c4c1a['depth']=_0xa5e04b,_0x2c4c1a[_0x334367(0x13a)]=_0x53bcf3;}}['_capIfString'](_0x456c98,_0x239485,_0x3c053e,_0x5cf35a){var _0x1ec21d=_0x4705e6,_0x40d4a0=_0x5cf35a[_0x1ec21d(0x171)]||_0x3c053e[_0x1ec21d(0x171)];if((_0x456c98===_0x1ec21d(0x19c)||_0x456c98===_0x1ec21d(0x1a7))&&_0x239485[_0x1ec21d(0x1fa)]){let _0x1c61d4=_0x239485[_0x1ec21d(0x1fa)][_0x1ec21d(0x1da)];_0x3c053e[_0x1ec21d(0x1f7)]+=_0x1c61d4,_0x3c053e['allStrLength']>_0x3c053e[_0x1ec21d(0x1c3)]?(_0x239485[_0x1ec21d(0x15d)]='',delete _0x239485['value']):_0x1c61d4>_0x40d4a0&&(_0x239485[_0x1ec21d(0x15d)]=_0x239485['value'][_0x1ec21d(0x1ae)](0x0,_0x40d4a0),delete _0x239485[_0x1ec21d(0x1fa)]);}}[_0x4705e6(0x154)](_0x564009){var _0x91921d=_0x4705e6;return!!(_0x564009&&_0x488b92['Map']&&this['_objectToString'](_0x564009)===_0x91921d(0x1ac)&&_0x564009['forEach']);}['_propertyName'](_0x41407c){var _0x34f712=_0x4705e6;if(_0x41407c['match'](/^\\d+$/))return _0x41407c;var _0xe1d23b;try{_0xe1d23b=JSON[_0x34f712(0x175)](''+_0x41407c);}catch{_0xe1d23b='\\x22'+this[_0x34f712(0x14e)](_0x41407c)+'\\x22';}return _0xe1d23b[_0x34f712(0x1af)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0xe1d23b=_0xe1d23b[_0x34f712(0x1ae)](0x1,_0xe1d23b[_0x34f712(0x1da)]-0x2):_0xe1d23b=_0xe1d23b[_0x34f712(0x220)](/'/g,'\\x5c\\x27')[_0x34f712(0x220)](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0xe1d23b;}[_0x4705e6(0x1ca)](_0x1e3826,_0x2af515,_0x1c4216,_0x43e8bb){var _0x2c095b=_0x4705e6;this[_0x2c095b(0x1d9)](_0x1e3826,_0x2af515),_0x43e8bb&&_0x43e8bb(),this['_additionalMetadata'](_0x1c4216,_0x1e3826),this[_0x2c095b(0x218)](_0x1e3826,_0x2af515);}[_0x4705e6(0x1d9)](_0xe376cb,_0x36c890){var _0x32d0a=_0x4705e6;this[_0x32d0a(0x1d5)](_0xe376cb,_0x36c890),this[_0x32d0a(0x1cd)](_0xe376cb,_0x36c890),this['_setNodeExpressionPath'](_0xe376cb,_0x36c890),this[_0x32d0a(0x155)](_0xe376cb,_0x36c890);}[_0x4705e6(0x1d5)](_0x1d7cfb,_0x4f4ed3){}[_0x4705e6(0x1cd)](_0x3de197,_0x2085b7){}['_setNodeLabel'](_0x484d79,_0x429296){}[_0x4705e6(0x16c)](_0x17ab88){var _0x3257cc=_0x4705e6;return _0x17ab88===this[_0x3257cc(0x17d)];}[_0x4705e6(0x218)](_0x387460,_0x5b2b38){var _0x4e0eb4=_0x4705e6;this[_0x4e0eb4(0x176)](_0x387460,_0x5b2b38),this[_0x4e0eb4(0x1c7)](_0x387460),_0x5b2b38[_0x4e0eb4(0x17b)]&&this['_sortProps'](_0x387460),this[_0x4e0eb4(0x188)](_0x387460,_0x5b2b38),this[_0x4e0eb4(0x152)](_0x387460,_0x5b2b38),this[_0x4e0eb4(0x214)](_0x387460);}[_0x4705e6(0x18d)](_0x44bc70,_0x2373f9){var _0x5e85e4=_0x4705e6;let _0x2e9c3b;try{_0x488b92[_0x5e85e4(0x1c4)]&&(_0x2e9c3b=_0x488b92[_0x5e85e4(0x1c4)][_0x5e85e4(0x1aa)],_0x488b92[_0x5e85e4(0x1c4)][_0x5e85e4(0x1aa)]=function(){}),_0x44bc70&&typeof _0x44bc70[_0x5e85e4(0x1da)]=='number'&&(_0x2373f9['length']=_0x44bc70['length']);}catch{}finally{_0x2e9c3b&&(_0x488b92[_0x5e85e4(0x1c4)]['error']=_0x2e9c3b);}if(_0x2373f9['type']==='number'||_0x2373f9[_0x5e85e4(0x145)]===_0x5e85e4(0x193)){if(isNaN(_0x2373f9['value']))_0x2373f9[_0x5e85e4(0x1f3)]=!0x0,delete _0x2373f9[_0x5e85e4(0x1fa)];else switch(_0x2373f9[_0x5e85e4(0x1fa)]){case Number[_0x5e85e4(0x189)]:_0x2373f9['positiveInfinity']=!0x0,delete _0x2373f9[_0x5e85e4(0x1fa)];break;case Number[_0x5e85e4(0x1bb)]:_0x2373f9[_0x5e85e4(0x141)]=!0x0,delete _0x2373f9[_0x5e85e4(0x1fa)];break;case 0x0:this[_0x5e85e4(0x16e)](_0x2373f9[_0x5e85e4(0x1fa)])&&(_0x2373f9['negativeZero']=!0x0);break;}}else _0x2373f9[_0x5e85e4(0x145)]===_0x5e85e4(0x1de)&&typeof _0x44bc70[_0x5e85e4(0x1df)]=='string'&&_0x44bc70['name']&&_0x2373f9[_0x5e85e4(0x1df)]&&_0x44bc70['name']!==_0x2373f9[_0x5e85e4(0x1df)]&&(_0x2373f9[_0x5e85e4(0x1a5)]=_0x44bc70[_0x5e85e4(0x1df)]);}[_0x4705e6(0x16e)](_0x4885af){var _0x2d4875=_0x4705e6;return 0x1/_0x4885af===Number[_0x2d4875(0x1bb)];}[_0x4705e6(0x181)](_0x299811){var _0x38ccc3=_0x4705e6;!_0x299811['props']||!_0x299811[_0x38ccc3(0x167)][_0x38ccc3(0x1da)]||_0x299811[_0x38ccc3(0x145)]==='array'||_0x299811[_0x38ccc3(0x145)]===_0x38ccc3(0x162)||_0x299811[_0x38ccc3(0x145)]===_0x38ccc3(0x153)||_0x299811[_0x38ccc3(0x167)][_0x38ccc3(0x173)](function(_0x5b8e5c,_0x21a887){var _0x9300a5=_0x38ccc3,_0x122b07=_0x5b8e5c[_0x9300a5(0x1df)][_0x9300a5(0x1bd)](),_0x50059e=_0x21a887[_0x9300a5(0x1df)][_0x9300a5(0x1bd)]();return _0x122b07<_0x50059e?-0x1:_0x122b07>_0x50059e?0x1:0x0;});}['_addFunctionsNode'](_0x31586a,_0x306218){var _0x3d933d=_0x4705e6;if(!(_0x306218[_0x3d933d(0x159)]||!_0x31586a[_0x3d933d(0x167)]||!_0x31586a['props'][_0x3d933d(0x1da)])){for(var _0x5f5797=[],_0x5ed425=[],_0x1fd1da=0x0,_0x5706f4=_0x31586a[_0x3d933d(0x167)]['length'];_0x1fd1da<_0x5706f4;_0x1fd1da++){var _0x223c93=_0x31586a[_0x3d933d(0x167)][_0x1fd1da];_0x223c93['type']===_0x3d933d(0x1de)?_0x5f5797[_0x3d933d(0x207)](_0x223c93):_0x5ed425['push'](_0x223c93);}if(!(!_0x5ed425['length']||_0x5f5797[_0x3d933d(0x1da)]<=0x1)){_0x31586a[_0x3d933d(0x167)]=_0x5ed425;var _0x5ae7bf={'functionsNode':!0x0,'props':_0x5f5797};this[_0x3d933d(0x1d5)](_0x5ae7bf,_0x306218),this[_0x3d933d(0x176)](_0x5ae7bf,_0x306218),this[_0x3d933d(0x1c7)](_0x5ae7bf),this[_0x3d933d(0x155)](_0x5ae7bf,_0x306218),_0x5ae7bf['id']+='\\x20f',_0x31586a[_0x3d933d(0x167)][_0x3d933d(0x1b9)](_0x5ae7bf);}}}['_addLoadNode'](_0x371f42,_0x4807c0){}['_setNodeExpandableState'](_0x300123){}[_0x4705e6(0x20e)](_0x5425df){var _0x3960dc=_0x4705e6;return Array[_0x3960dc(0x14a)](_0x5425df)||typeof _0x5425df==_0x3960dc(0x201)&&this['_objectToString'](_0x5425df)==='[object\\x20Array]';}[_0x4705e6(0x155)](_0x46c048,_0x167ba5){}[_0x4705e6(0x214)](_0x1aea01){var _0x2846f7=_0x4705e6;delete _0x1aea01['_hasSymbolPropertyOnItsPath'],delete _0x1aea01['_hasSetOnItsPath'],delete _0x1aea01[_0x2846f7(0x1b1)];}['_setNodeExpressionPath'](_0xe0b086,_0x5e5fbb){}}let _0x110989=new _0x581946(),_0x26fd20={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x425eb4={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x313856(_0x578a5c,_0xa8fbb3,_0x214b92,_0x14cf06,_0x462600,_0x31e139){var _0x3fe31c=_0x4705e6;let _0x44f382,_0x13cb4f;try{_0x13cb4f=_0x1abf05(),_0x44f382=_0x3de9f7[_0xa8fbb3],!_0x44f382||_0x13cb4f-_0x44f382['ts']>0x1f4&&_0x44f382[_0x3fe31c(0x168)]&&_0x44f382[_0x3fe31c(0x1ad)]/_0x44f382[_0x3fe31c(0x168)]<0x64?(_0x3de9f7[_0xa8fbb3]=_0x44f382={'count':0x0,'time':0x0,'ts':_0x13cb4f},_0x3de9f7[_0x3fe31c(0x1c9)]={}):_0x13cb4f-_0x3de9f7[_0x3fe31c(0x1c9)]['ts']>0x32&&_0x3de9f7[_0x3fe31c(0x1c9)][_0x3fe31c(0x168)]&&_0x3de9f7[_0x3fe31c(0x1c9)][_0x3fe31c(0x1ad)]/_0x3de9f7['hits'][_0x3fe31c(0x168)]<0x64&&(_0x3de9f7[_0x3fe31c(0x1c9)]={});let _0x155b02=[],_0xe3dcb0=_0x44f382[_0x3fe31c(0x222)]||_0x3de9f7[_0x3fe31c(0x1c9)][_0x3fe31c(0x222)]?_0x425eb4:_0x26fd20,_0x2e112c=_0x3943e7=>{var _0x2d86b7=_0x3fe31c;let _0x2669dd={};return _0x2669dd[_0x2d86b7(0x167)]=_0x3943e7[_0x2d86b7(0x167)],_0x2669dd[_0x2d86b7(0x137)]=_0x3943e7[_0x2d86b7(0x137)],_0x2669dd['strLength']=_0x3943e7[_0x2d86b7(0x171)],_0x2669dd[_0x2d86b7(0x1c3)]=_0x3943e7['totalStrLength'],_0x2669dd[_0x2d86b7(0x215)]=_0x3943e7['autoExpandLimit'],_0x2669dd['autoExpandMaxDepth']=_0x3943e7[_0x2d86b7(0x18c)],_0x2669dd[_0x2d86b7(0x17b)]=!0x1,_0x2669dd['noFunctions']=!_0x4010d1,_0x2669dd[_0x2d86b7(0x13c)]=0x1,_0x2669dd[_0x2d86b7(0x194)]=0x0,_0x2669dd['expId']=_0x2d86b7(0x1f4),_0x2669dd[_0x2d86b7(0x216)]=_0x2d86b7(0x177),_0x2669dd[_0x2d86b7(0x138)]=!0x0,_0x2669dd[_0x2d86b7(0x151)]=[],_0x2669dd['autoExpandPropertyCount']=0x0,_0x2669dd[_0x2d86b7(0x15e)]=!0x0,_0x2669dd[_0x2d86b7(0x1f7)]=0x0,_0x2669dd[_0x2d86b7(0x179)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x2669dd;};for(var _0x75017c=0x0;_0x75017c<_0x462600[_0x3fe31c(0x1da)];_0x75017c++)_0x155b02[_0x3fe31c(0x207)](_0x110989[_0x3fe31c(0x1a3)]({'timeNode':_0x578a5c==='time'||void 0x0},_0x462600[_0x75017c],_0x2e112c(_0xe3dcb0),{}));if(_0x578a5c===_0x3fe31c(0x21b)){let _0x3c12d5=Error[_0x3fe31c(0x21d)];try{Error[_0x3fe31c(0x21d)]=0x1/0x0,_0x155b02['push'](_0x110989[_0x3fe31c(0x1a3)]({'stackNode':!0x0},new Error()['stack'],_0x2e112c(_0xe3dcb0),{'strLength':0x1/0x0}));}finally{Error[_0x3fe31c(0x21d)]=_0x3c12d5;}}return{'method':_0x3fe31c(0x1a6),'version':_0x29ae66,'args':[{'ts':_0x214b92,'session':_0x14cf06,'args':_0x155b02,'id':_0xa8fbb3,'context':_0x31e139}]};}catch(_0x5876a3){return{'method':_0x3fe31c(0x1a6),'version':_0x29ae66,'args':[{'ts':_0x214b92,'session':_0x14cf06,'args':[{'type':'unknown','error':_0x5876a3&&_0x5876a3[_0x3fe31c(0x1fd)]}],'id':_0xa8fbb3,'context':_0x31e139}]};}finally{try{if(_0x44f382&&_0x13cb4f){let _0x4096a4=_0x1abf05();_0x44f382[_0x3fe31c(0x168)]++,_0x44f382[_0x3fe31c(0x1ad)]+=_0x46f776(_0x13cb4f,_0x4096a4),_0x44f382['ts']=_0x4096a4,_0x3de9f7[_0x3fe31c(0x1c9)][_0x3fe31c(0x168)]++,_0x3de9f7[_0x3fe31c(0x1c9)][_0x3fe31c(0x1ad)]+=_0x46f776(_0x13cb4f,_0x4096a4),_0x3de9f7[_0x3fe31c(0x1c9)]['ts']=_0x4096a4,(_0x44f382['count']>0x32||_0x44f382[_0x3fe31c(0x1ad)]>0x64)&&(_0x44f382[_0x3fe31c(0x222)]=!0x0),(_0x3de9f7[_0x3fe31c(0x1c9)][_0x3fe31c(0x168)]>0x3e8||_0x3de9f7[_0x3fe31c(0x1c9)][_0x3fe31c(0x1ad)]>0x12c)&&(_0x3de9f7[_0x3fe31c(0x1c9)][_0x3fe31c(0x222)]=!0x0);}}catch{}}}return _0x313856;}((_0x26bcb3,_0x161a0f,_0x1243cc,_0x16727b,_0x2aef43,_0x4e3a18,_0x2adef1,_0x2097f7,_0x5d329d,_0x51d670,_0xda337d)=>{var _0x10059d=_0xbb41e5;if(_0x26bcb3[_0x10059d(0x16b)])return _0x26bcb3['_console_ninja'];if(!X(_0x26bcb3,_0x2097f7,_0x2aef43))return _0x26bcb3[_0x10059d(0x16b)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x26bcb3[_0x10059d(0x16b)];let _0x5f52d8=b(_0x26bcb3),_0x528b00=_0x5f52d8['elapsed'],_0x3fc8b6=_0x5f52d8['timeStamp'],_0x12bb08=_0x5f52d8['now'],_0x4b3199={'hits':{},'ts':{}},_0x49cd29=H(_0x26bcb3,_0x5d329d,_0x4b3199,_0x4e3a18),_0x3a9284=_0x1ebc21=>{_0x4b3199['ts'][_0x1ebc21]=_0x3fc8b6();},_0x1097a1=(_0x21f17e,_0x3c69df)=>{var _0x4d38a3=_0x10059d;let _0x1bd357=_0x4b3199['ts'][_0x3c69df];if(delete _0x4b3199['ts'][_0x3c69df],_0x1bd357){let _0x5065d2=_0x528b00(_0x1bd357,_0x3fc8b6());_0x11cddb(_0x49cd29(_0x4d38a3(0x1ad),_0x21f17e,_0x12bb08(),_0x47b6d8,[_0x5065d2],_0x3c69df));}},_0x44b79d=_0x4a0749=>{var _0x354034=_0x10059d,_0x19e489;return _0x2aef43===_0x354034(0x144)&&_0x26bcb3[_0x354034(0x20a)]&&((_0x19e489=_0x4a0749==null?void 0x0:_0x4a0749[_0x354034(0x170)])==null?void 0x0:_0x19e489[_0x354034(0x1da)])&&(_0x4a0749[_0x354034(0x170)][0x0][_0x354034(0x20a)]=_0x26bcb3[_0x354034(0x20a)]),_0x4a0749;};_0x26bcb3[_0x10059d(0x16b)]={'consoleLog':(_0x29be56,_0x59772b)=>{var _0x279194=_0x10059d;_0x26bcb3[_0x279194(0x1c4)][_0x279194(0x1a6)][_0x279194(0x1df)]!==_0x279194(0x1b6)&&_0x11cddb(_0x49cd29(_0x279194(0x1a6),_0x29be56,_0x12bb08(),_0x47b6d8,_0x59772b));},'consoleTrace':(_0x3d9ae8,_0x4640db)=>{var _0x43a2be=_0x10059d;_0x26bcb3['console'][_0x43a2be(0x1a6)]['name']!==_0x43a2be(0x221)&&_0x11cddb(_0x44b79d(_0x49cd29(_0x43a2be(0x21b),_0x3d9ae8,_0x12bb08(),_0x47b6d8,_0x4640db)));},'consoleTime':_0x1bc96b=>{_0x3a9284(_0x1bc96b);},'consoleTimeEnd':(_0x45eff4,_0x5a9be0)=>{_0x1097a1(_0x5a9be0,_0x45eff4);},'autoLog':(_0xbed555,_0xb307c0)=>{_0x11cddb(_0x49cd29('log',_0xb307c0,_0x12bb08(),_0x47b6d8,[_0xbed555]));},'autoLogMany':(_0x12339d,_0xb59196)=>{var _0x534726=_0x10059d;_0x11cddb(_0x49cd29(_0x534726(0x1a6),_0x12339d,_0x12bb08(),_0x47b6d8,_0xb59196));},'autoTrace':(_0x501019,_0x44cf83)=>{var _0x5378bd=_0x10059d;_0x11cddb(_0x44b79d(_0x49cd29(_0x5378bd(0x21b),_0x44cf83,_0x12bb08(),_0x47b6d8,[_0x501019])));},'autoTraceMany':(_0x1172e6,_0x270986)=>{_0x11cddb(_0x44b79d(_0x49cd29('trace',_0x1172e6,_0x12bb08(),_0x47b6d8,_0x270986)));},'autoTime':(_0x585b9f,_0x47e1f5,_0x564815)=>{_0x3a9284(_0x564815);},'autoTimeEnd':(_0x416ab0,_0x57beff,_0x1a95e8)=>{_0x1097a1(_0x57beff,_0x1a95e8);},'coverage':_0x5f2fcf=>{var _0x7c06bd=_0x10059d;_0x11cddb({'method':_0x7c06bd(0x15c),'version':_0x4e3a18,'args':[{'id':_0x5f2fcf}]});}};let _0x11cddb=q(_0x26bcb3,_0x161a0f,_0x1243cc,_0x16727b,_0x2aef43,_0x51d670,_0xda337d),_0x47b6d8=_0x26bcb3[_0x10059d(0x1eb)];return _0x26bcb3[_0x10059d(0x16b)];})(globalThis,_0xbb41e5(0x17e),_0xbb41e5(0x149),\"/Users/nwelchr/.vscode/extensions/wallabyjs.console-ninja-1.0.327/node_modules\",_0xbb41e5(0x1dd),_0xbb41e5(0x18a),_0xbb41e5(0x182),_0xbb41e5(0x1c5),_0xbb41e5(0x217),_0xbb41e5(0x210),_0xbb41e5(0x17a));");
  } catch (e) {}
}
; /* istanbul ignore next */
function oo_oo(i) {
  for (var _len = arguments.length, v = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    v[_key - 1] = arguments[_key];
  }
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_tr(i) {
  for (var _len2 = arguments.length, v = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    v[_key2 - 1] = arguments[_key2];
  }
  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_ts(v) {
  try {
    oo_cm().consoleTime(v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_te(v, i) {
  try {
    oo_cm().consoleTimeEnd(v, i);
  } catch (e) {}
  return v;
}
; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./components/footer_player_bar/media_player_container.js":
/*!****************************************************************!*\
  !*** ./components/footer_player_bar/media_player_container.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media_player */ "./components/footer_player_bar/media_player.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_audio_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/audio_actions */ "./actions/audio_actions.js");



const mapStateToProps = state => {
  return {
    playing: state.ui.playbar.playing,
    currentSong: state.ui.playbar.currentSong,
    currentSongParams: state.ui.playbar.currentSongParams,
    tracklist: state.ui.tracklist,
    songs: Object.values(state.entities.songs),
    isFirstSong: state.ui.playbar.isFirstSong
  };
};
const mapDispatchToProps = dispatch => ({
  play: () => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_2__.play)()),
  playSong: (song, params) => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_2__.playSong)(song, params)),
  pause: () => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_2__.pause)())
});
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_media_player__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./components/main_page/main_page.jsx":
/*!********************************************!*\
  !*** ./components/main_page/main_page.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _footer_player_bar_media_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer_player_bar/media_player */ "./components/footer_player_bar/media_player.jsx");
/* harmony import */ var _playlists_playlist_index_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../playlists/playlist_index_container */ "./components/playlists/playlist_index_container.js");
/* harmony import */ var _show_pages_playlist_show_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../show_pages/playlist_show_container */ "./components/show_pages/playlist_show_container.js");
/* harmony import */ var _side_nav_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side_nav_bar */ "./components/main_page/side_nav_bar.jsx");
/* harmony import */ var _footer_player_bar_footer_player_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer_player_bar/footer_player_bar */ "./components/footer_player_bar/footer_player_bar.jsx");
/* harmony import */ var _music_page_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./music_page_container */ "./components/main_page/music_page_container.js");
/* harmony import */ var _browse_browse_index_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../browse/browse_index_container */ "./components/browse/browse_index_container.js");
/* harmony import */ var _search_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../search/search */ "./components/search/search.jsx");
/* harmony import */ var _songs_song_collection_index_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../songs/song_collection_index_container */ "./components/songs/song_collection_index_container.js");
/* harmony import */ var _albums_album_index_container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../albums/album_index_container */ "./components/albums/album_index_container.js");
/* harmony import */ var _show_pages_album_show_container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../show_pages/album_show_container */ "./components/show_pages/album_show_container.jsx");
/* harmony import */ var _artists_artist_index_container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../artists/artist_index_container */ "./components/artists/artist_index_container.js");
/* harmony import */ var _show_pages_artist_show_container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../show_pages/artist_show_container */ "./components/show_pages/artist_show_container.jsx");
/* harmony import */ var _modals_add_to_playlist_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../modals/add_to_playlist_modal */ "./components/modals/add_to_playlist_modal.jsx");
/* harmony import */ var _modals_new_playlist_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../modals/new_playlist_modal */ "./components/modals/new_playlist_modal.jsx");
/* harmony import */ var _show_pages_user_account_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../show_pages/user_account_page */ "./components/show_pages/user_account_page.jsx");
/* harmony import */ var _show_pages_user_show_container__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../show_pages/user_show_container */ "./components/show_pages/user_show_container.jsx");
/* harmony import */ var _users_user_index__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../users/user_index */ "./components/users/user_index.jsx");
/* harmony import */ var _session_new_session_container__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../session/new_session_container */ "./components/session/new_session_container.js");
/* harmony import */ var _util_route_util__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../util/route_util */ "./util/route_util.jsx");






















class MainPage extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.currentUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "app-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_side_nav_bar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      currentUser: this.props.currentUser
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
      className: "main-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_20__.ProtectedRoute, {
      path: "/search",
      component: _search_search__WEBPACK_IMPORTED_MODULE_8__["default"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_20__.ProtectedRoute, {
      path: "/browse",
      component: _browse_browse_index_container__WEBPACK_IMPORTED_MODULE_7__["default"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_20__.ProtectedRoute, {
      exact: true,
      path: "/collection/songs",
      component: _songs_song_collection_index_container__WEBPACK_IMPORTED_MODULE_9__["default"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_20__.ProtectedRoute, {
      path: "/account",
      component: _show_pages_user_account_page__WEBPACK_IMPORTED_MODULE_16__["default"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_20__.ProtectedRoute, {
      exact: true,
      path: "/collection/albums",
      component: _albums_album_index_container__WEBPACK_IMPORTED_MODULE_10__["default"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_20__.ProtectedRoute, {
      path: "/albums/:albumId",
      component: _show_pages_album_show_container__WEBPACK_IMPORTED_MODULE_11__["default"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_20__.ProtectedRoute, {
      exact: true,
      path: "/collection/artists",
      component: _artists_artist_index_container__WEBPACK_IMPORTED_MODULE_12__["default"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_20__.ProtectedRoute, {
      path: "/artists/:artistId",
      component: _show_pages_artist_show_container__WEBPACK_IMPORTED_MODULE_13__["default"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_20__.ProtectedRoute, {
      exact: true,
      path: "/collection/playlists",
      component: _playlists_playlist_index_container__WEBPACK_IMPORTED_MODULE_2__["default"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_20__.ProtectedRoute, {
      path: "/playlists/:playlistId",
      component: _show_pages_playlist_show_container__WEBPACK_IMPORTED_MODULE_3__["default"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_20__.ProtectedRoute, {
      exact: true,
      path: "/users",
      component: _users_user_index__WEBPACK_IMPORTED_MODULE_18__["default"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_20__.ProtectedRoute, {
      path: "/users/:userId",
      component: _show_pages_user_show_container__WEBPACK_IMPORTED_MODULE_17__["default"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_footer_player_bar_footer_player_bar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      playing: this.props.playing
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_modals_add_to_playlist_modal__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_modals_new_playlist_modal__WEBPACK_IMPORTED_MODULE_15__["default"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_session_new_session_container__WEBPACK_IMPORTED_MODULE_19__["default"], null);
  }
}
/* harmony default export */ __webpack_exports__["default"] = (MainPage);

/***/ }),

/***/ "./components/main_page/main_page_container.js":
/*!*****************************************************!*\
  !*** ./components/main_page/main_page_container.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main_page */ "./components/main_page/main_page.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/playlist_actions */ "./actions/playlist_actions.js");



const mapStateToProps = state => {
  return {
    state: state.entities,
    loading: state.ui.loading.global,
    playing: state.ui.playbar.playing,
    currentUser: state.session.currentUser
  };
};
const mapDispatchToProps = dispatch => ({
  fetchPlaylists: () => dispatch((0,_actions_playlist_actions__WEBPACK_IMPORTED_MODULE_2__.fetchPlaylists)()),
  fetchPlaylist: playlistId => dispatch((0,_actions_playlist_actions__WEBPACK_IMPORTED_MODULE_2__.fetchPlaylist)(playlistId))
});
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_main_page__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./components/main_page/music_page.jsx":
/*!*********************************************!*\
  !*** ./components/main_page/music_page.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _footer_player_bar_media_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer_player_bar/media_player */ "./components/footer_player_bar/media_player.jsx");
/* harmony import */ var _playlists_playlist_index_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../playlists/playlist_index_container */ "./components/playlists/playlist_index_container.js");
/* harmony import */ var _show_pages_playlist_show_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../show_pages/playlist_show_container */ "./components/show_pages/playlist_show_container.js");
/* harmony import */ var _side_nav_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side_nav_bar */ "./components/main_page/side_nav_bar.jsx");
/* harmony import */ var _footer_player_bar_footer_player_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer_player_bar/footer_player_bar */ "./components/footer_player_bar/footer_player_bar.jsx");







class MusicPage extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return null;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (MusicPage);

/***/ }),

/***/ "./components/main_page/music_page_container.js":
/*!******************************************************!*\
  !*** ./components/main_page/music_page_container.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _music_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./music_page */ "./components/main_page/music_page.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/playlist_actions */ "./actions/playlist_actions.js");



const mapStateToProps = state => {
  return {
    state: state.entities,
    loading: state.ui.loading.global,
    playing: state.ui.playbar.playing
  };
};
const mapDispatchToProps = dispatch => ({
  fetchPlaylists: () => dispatch((0,_actions_playlist_actions__WEBPACK_IMPORTED_MODULE_2__.fetchPlaylists)()),
  fetchPlaylist: playlistId => dispatch((0,_actions_playlist_actions__WEBPACK_IMPORTED_MODULE_2__.fetchPlaylist)(playlistId))
});
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_music_page__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./components/main_page/side_nav_bar.jsx":
/*!***********************************************!*\
  !*** ./components/main_page/side_nav_bar.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");


class SideNavBar extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const currentUser = this.props.currentUser;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("aside", {
      className: "sidebar"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "sidebar-top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "logo"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/browse"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: "https://s3.us-east-2.amazonaws.com/bop-images/logos/logo-white.png",
      className: "logo"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "sidebar-main"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "sidebar-divider"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "search"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
      to: "/search",
      activeClassName: "selected"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Search"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-search"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "sidebar-divider"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "home"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
      exact: true,
      to: "/browse",
      activeClassName: "selected"
    }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "your-music"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
      exact: true,
      to: "/collection/playlists",
      activeClassName: "selected"
    }, "Your Music")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "sidebar-divider"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "sidebar-account"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
      exact: true,
      to: "/account",
      className: "account-link",
      activeClassName: "selected"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: currentUser.profile_picture,
      className: "account-link-profile-picture"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, currentUser.username))));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (SideNavBar);
{
  /* <ul className="recently-played-music">
                  <li className="recently-played">Recently Played</li>
                  <li>Azealia</li>
              </ul> */
}

/***/ }),

/***/ "./components/modals/add_to_playlist_modal.jsx":
/*!*****************************************************!*\
  !*** ./components/modals/add_to_playlist_modal.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/ui_actions */ "./actions/ui_actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/playlist_actions */ "./actions/playlist_actions.js");
/* harmony import */ var _actions_song_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/song_actions */ "./actions/song_actions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router/esm/react-router.js");
/* harmony import */ var _playlists_add_to_playlist_index_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../playlists/add_to_playlist_index_item */ "./components/playlists/add_to_playlist_index_item.jsx");







class AddToPlaylistModal extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //   this.props.fetchModalPlaylists();
  }

  //   handleSubmit(e) {
  //     e.preventDefault();
  //     this.props
  //       .createPlaylist(this.state)
  //       .then(response => this.redirect(response.playlist.id));
  //   }

  //   redirect(id) {
  //     this.props.closePlaylistForm();
  //     this.props.history.push(`/collection/playlists/${id}`);
  //   }

  render() {
    if (!this.props.isModalOpen) {
      return null;
    }
    let playlists = this.props.playlists.filter(playlist => !playlist.songIds.includes(this.props.songToAddId)).filter(playlist => playlist.creator_id === this.props.currentUser.id);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "add-song-to-playlist-modal"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "add-song-to-playlist-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "close-modal-button",
      onClick: this.props.closeAddToPlaylistForm
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-times"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
      className: "create-new-playlist-h1"
    }, "Add To Playlist"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
      className: "modal-index"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, playlists.map(playlist => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_playlists_add_to_playlist_index_item__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: playlist.id,
      playlist: playlist,
      renderButton: false,
      saveSongToPlaylist: this.props.saveSongToPlaylist,
      songToAddId: this.props.songToAddId,
      closeAddToPlaylistForm: this.props.closeAddToPlaylistForm
    }))))));
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    playlists: Object.values(state.entities.playlists),
    isModalOpen: state.ui.modals.addToPlaylistModal.isOpen,
    currentUser: state.session.currentUser,
    songToAddId: state.ui.modals.songToAddId
  };
};
const mapDispatchToProps = dispatch => {
  return {
    closeAddToPlaylistForm: () => dispatch((0,_actions_ui_actions__WEBPACK_IMPORTED_MODULE_1__.closeAddToPlaylistForm)()),
    saveSongToPlaylist: (songId, playlistId) => dispatch((0,_actions_song_actions__WEBPACK_IMPORTED_MODULE_4__.saveSongToPlaylist)(songId, playlistId)),
    fetchPlaylists: () => dispatch((0,_actions_playlist_actions__WEBPACK_IMPORTED_MODULE_3__.fetchPlaylists)())
    // fetchModalPlaylists: () => dispatch(fetchModalPlaylists()),
  };
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(AddToPlaylistModal)));

/***/ }),

/***/ "./components/modals/new_playlist_modal.jsx":
/*!**************************************************!*\
  !*** ./components/modals/new_playlist_modal.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/ui_actions */ "./actions/ui_actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/playlist_actions */ "./actions/playlist_actions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router/esm/react-router.js");





class NewPlaylistModal extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.redirect = this.redirect.bind(this);
  }
  handleInput(e) {
    this.setState({
      name: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.createPlaylist(this.state).then(response => {
      this.redirect(response.payload.playlist.id);
    });
  }
  redirect(id) {
    this.props.closePlaylistForm();
    this.props.history.push(`/playlists/${id}`);
  }
  handleCancel() {
    this.setState({
      playlistName: ""
    });
    this.props.closePlaylistForm();
  }
  handleEnter(e) {
    if (e.key === "Enter") this.handleSubmit(e);
  }
  render() {
    if (!this.props.isModalOpen) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "new-playlist-page"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "new-playlist-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "close-modal-button",
      onClick: this.props.closePlaylistForm
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-times"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
      className: "create-new-playlist-h1"
    }, "Create new playlist"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
      className: "new-playlist-form",
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      className: "new-playlist-form-input"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "new-playlist-label",
      htmlFor: "playlist-name"
    }, "Playlist Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      id: "playlist-name",
      className: "new-playlist-input",
      value: this.state.playlistName,
      onChange: this.handleInput,
      onKeyDown: this.handleEnter,
      placeholder: "Start typing...",
      autoComplete: "off"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      className: "new-playlist-form-buttons"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: this.handleCancel,
      className: "new-playlist-cancel playlist-modal-button new-playlist-button"
    }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      className: "playlist-modal-button new-playlist-button",
      type: "submit",
      value: "Submit"
    })))));
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isModalOpen: state.ui.modals.newPlaylistModal.isOpen,
    currentUser: state.session.currentUser
  };
};
const mapDispatchToProps = dispatch => {
  return {
    closePlaylistForm: () => dispatch((0,_actions_ui_actions__WEBPACK_IMPORTED_MODULE_1__.closePlaylistForm)()),
    createPlaylist: playlist => dispatch((0,_actions_playlist_actions__WEBPACK_IMPORTED_MODULE_3__.createPlaylist)(playlist))
  };
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(NewPlaylistModal)));

/***/ }),

/***/ "./components/navbar/browse_navbar.jsx":
/*!*********************************************!*\
  !*** ./components/navbar/browse_navbar.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");


class BrowseNavbar extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
      className: "top-nav-bar"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "top-nav-link-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
      exact: true,
      to: "/browse",
      activeClassName: "nav-link-selected"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Featured"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "top-nav-link-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
      exact: true,
      to: "/users",
      activeClassName: "nav-link-selected"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Users"))));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (BrowseNavbar);

/***/ }),

/***/ "./components/navbar/search_navbar.jsx":
/*!*********************************************!*\
  !*** ./components/navbar/search_navbar.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _util_route_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/route_util */ "./util/route_util.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");




class SearchNavbar extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const _this$props$searches = this.props.searches,
      playlists = _this$props$searches.playlists,
      songs = _this$props$searches.songs,
      albums = _this$props$searches.albums,
      artists = _this$props$searches.artists,
      users = _this$props$searches.users,
      query = _this$props$searches.query;
    const playlistsLink = playlists.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "top-nav-link-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
      exact: true,
      to: `/search/results/${query}/playlists`,
      activeClassName: "nav-link-selected"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Playlists"))) : null;
    const songsLink = songs.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "top-nav-link-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
      exact: true,
      to: `/search/results/${query}/songs`,
      activeClassName: "nav-link-selected"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Songs"))) : null;
    const albumsLink = albums.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "top-nav-link-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
      exact: true,
      to: `/search/results/${query}/albums`,
      activeClassName: "nav-link-selected"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Albums"))) : null;
    const artistsLink = artists.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "top-nav-link-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
      exact: true,
      to: `/search/results/${query}/artists`,
      activeClassName: "nav-link-selected"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Artists"))) : null;
    const usersLink = users.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "top-nav-link-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
      exact: true,
      to: `/search/results/${query}/users`,
      activeClassName: "nav-link-selected"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Users"))) : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
      className: "search-nav-bar"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
      className: "nav-flex-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
      className: "top-nav-bar"
    }, playlistsLink, songsLink, albumsLink, artistsLink, usersLink)));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (SearchNavbar);

/***/ }),

/***/ "./components/navbar/top_navbar.jsx":
/*!******************************************!*\
  !*** ./components/navbar/top_navbar.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _util_route_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/route_util */ "./util/route_util.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/ui_actions */ "./actions/ui_actions.js");





class YourMusicTopNavBar extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
      className: "nav-flex-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
      className: "nav-empty"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
      className: "top-nav-bar"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "top-nav-link-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
      exact: true,
      to: "/collection/playlists",
      activeClassName: "nav-link-selected"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Playlists"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "top-nav-link-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
      exact: true,
      to: "/collection/songs",
      activeClassName: "nav-link-selected"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Songs"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "top-nav-link-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
      exact: true,
      to: "/collection/albums",
      activeClassName: "nav-link-selected"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Albums"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "top-nav-link-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
      to: "/collection/artists",
      activeClassName: "nav-link-selected"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Artists")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
      className: "new-playlist"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: () => this.props.openPlaylistForm(),
      className: "new-playlist-button"
    }, "New Playlist")));
  }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => {
  return {
    openPlaylistForm: () => dispatch((0,_actions_ui_actions__WEBPACK_IMPORTED_MODULE_3__.openPlaylistForm)())
  };
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(YourMusicTopNavBar));

/***/ }),

/***/ "./components/playlists/add_to_playlist_index_item.jsx":
/*!*************************************************************!*\
  !*** ./components/playlists/add_to_playlist_index_item.jsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router/esm/react-router.js");


class AddToPlaylistIndexItem extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.closeAddToPlaylistForm();
    this.props.saveSongToPlaylist(this.props.songToAddId, this.props.playlist.id).then(results => {
      this.props.history.push(`/playlists/${this.props.playlist.id}`);
    });
  }
  render() {
    let albumCover;
    if (typeof this.props.playlist.album_cover_url === "string") {
      albumCover = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "media"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        alt: "",
        className: "media__image",
        src: this.props.playlist.album_cover_url
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: `media__body`
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "media-loaded"
      }));
    } else if (this.props.playlist.album_cover_url.length === 4) {
      albumCover = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "media"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        alt: "",
        className: "media__image collage",
        src: this.props.playlist.album_cover_url[0]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        alt: "",
        className: "media__image collage",
        src: this.props.playlist.album_cover_url[1]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        alt: "",
        className: "media__image collage",
        src: this.props.playlist.album_cover_url[2]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        alt: "",
        className: "media__image collage",
        src: this.props.playlist.album_cover_url[3]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: `media__body`
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "media-loaded"
      }));
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "media-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      className: "music-index-item",
      onClick: this.handleClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "item-wrapper"
    }, albumCover, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, this.props.playlist.name))));
  }
}
/* harmony default export */ __webpack_exports__["default"] = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.withRouter)(AddToPlaylistIndexItem));

/***/ }),

/***/ "./components/playlists/playlist_index.jsx":
/*!*************************************************!*\
  !*** ./components/playlists/playlist_index.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _util_route_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/route_util */ "./util/route_util.jsx");
/* harmony import */ var _playlist_index_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playlist_index_item */ "./components/playlists/playlist_index_item.jsx");
/* harmony import */ var _modals_new_playlist_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/new_playlist_modal */ "./components/modals/new_playlist_modal.jsx");
/* harmony import */ var _navbar_top_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar/top_navbar */ "./components/navbar/top_navbar.jsx");






class PlaylistIndex extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }
  componentDidMount() {
    this.props.fetchPlaylists();
  }
  openModal() {
    this.setState({
      isModalOpen: true
    });
  }
  closeModal() {
    this.setState({
      isModalOpen: false
    });
  }
  renderPlaylists() {
    if (this.props.playlists) {
      return this.props.playlists.map(playlist => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_playlist_index_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: playlist.id,
        playlist: playlist,
        renderButton: true
      }));
    }
  }
  render() {
    if (this.props.loading) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: "main",
        style: this.props.background
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: "index-page-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_navbar_top_navbar__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: "music-index"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "music-index-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, this.renderPlaylists())))));
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (PlaylistIndex);

/***/ }),

/***/ "./components/playlists/playlist_index_container.js":
/*!**********************************************************!*\
  !*** ./components/playlists/playlist_index_container.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _playlist_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playlist_index */ "./components/playlists/playlist_index.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _selectors_playlist_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../selectors/playlist_selectors */ "./selectors/playlist_selectors.js");
/* harmony import */ var _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/playlist_actions */ "./actions/playlist_actions.js");
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/ui_actions */ "./actions/ui_actions.js");





const makeMapStateToProps = () => {
  const getUserPlaylists = (0,_selectors_playlist_selectors__WEBPACK_IMPORTED_MODULE_2__.makeGetUserPlaylists)();
  const mapStateToProps = state => {
    return {
      playlists: getUserPlaylists(state),
      loading: state.ui.loading.global,
      background: {
        backgroundColor: "#2e263b"
      },
      currentUser: state.session.currentUser
    };
  };
  return mapStateToProps;
};
const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: () => dispatch((0,_actions_playlist_actions__WEBPACK_IMPORTED_MODULE_3__.fetchPlaylists)()),
    openPlaylistForm: () => dispatch((0,_actions_ui_actions__WEBPACK_IMPORTED_MODULE_4__.openPlaylistForm)())
  };
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(makeMapStateToProps, mapDispatchToProps)(_playlist_index__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./components/playlists/playlist_index_item.jsx":
/*!******************************************************!*\
  !*** ./components/playlists/playlist_index_item.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_audio_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/audio_actions */ "./actions/audio_actions.js");
/* harmony import */ var _actions_song_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/song_actions */ "./actions/song_actions.js");
/* harmony import */ var _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/playlist_actions */ "./actions/playlist_actions.js");






class PlaylistIndexItem extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
  }
  componentDidMount() {
    $(document).on("mouseenter", ".media-wrapper", function () {
      const that = this;
      $(this).find(":button").show();
      $(this).find(".media__body").addClass("hovering");
      $(this).find(".play-pause").addClass("hovering");
      $(this).on("onclick", ":button", function () {
        $(that).find(".media__body").addClass("hovering");
      });
    }).on("mouseleave", ".media-wrapper", function () {
      $(this).find(":button").hide();
      $(this).find(".media__body").removeClass("hovering");
      $(this).find(".play-pause").removeClass("hovering");
    });
  }
  componentWillReceiveProps(nextProps) {}
  handlePlay(e) {
    e.stopPropagation();
    e.preventDefault();
    const songIds = this.props.playlist.songIds;
    const _this$props = this.props,
      currentSong = _this$props.currentSong,
      playing = _this$props.playing;
    if (!(songIds && songIds.length > 0)) {
      return;
    }

    // If playlist has songs and there's no current song,
    // or if the playlist does have that song in it,
    // fetch the playlist in question and play it
    if (!currentSong || !songIds.includes(currentSong.id) || Object.keys(this.props.currentSongParams)[0] !== "playlistId" || Object.values(this.props.currentSongParams)[0] !== `${this.props.playlist.id}`) {
      this.props.fetchPlaylistThenPlaySong(this.props.playlist.id, {
        playlistId: `${this.props.playlist.id}`
      });
    } else if (currentSong && !playing) {
      this.props.play();
    } else {
      this.props.pause();
    }
  }
  render() {
    const _this$props2 = this.props,
      currentSong = _this$props2.currentSong,
      currentSongParams = _this$props2.currentSongParams,
      playing = _this$props2.playing,
      playlist = _this$props2.playlist;
    let songIds = null;
    if (this.props.playlist.songIds) songIds = this.props.playlist.songIds;
    const playIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "icon play index-item"
    });
    const pauseIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "icon pause index-item"
    });
    let playPauseIcon, playlistIndexClass;
    if (playing && currentSong && songIds && songIds.includes(currentSong.id) && Object.keys(currentSongParams)[0] === "playlistId" && Object.values(currentSongParams)[0] === `${this.props.playlist.id}`) {
      playPauseIcon = pauseIcon;
      playlistIndexClass = "playing";
    } else {
      playPauseIcon = playIcon;
      playlistIndexClass = null;
    }
    let albumCover;
    if (typeof this.props.playlist.album_cover_url === "string") {
      albumCover = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "media"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        alt: "",
        className: "media__image",
        src: this.props.playlist.album_cover_url
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: `media__body ${playlistIndexClass}`
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "media-loaded"
      }));
    } else if (this.props.playlist.album_cover_url.length === 4) {
      albumCover = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "media"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        alt: "",
        className: "media__image collage",
        src: this.props.playlist.album_cover_url[0]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        alt: "",
        className: "media__image collage",
        src: this.props.playlist.album_cover_url[1]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        alt: "",
        className: "media__image collage",
        src: this.props.playlist.album_cover_url[2]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        alt: "",
        className: "media__image collage",
        src: this.props.playlist.album_cover_url[3]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: `media__body ${playlistIndexClass}`
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "media-loaded"
      }));
    }
    const link = this.props.match.url === `/playlists/${this.props.playlist.id}` ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      className: "music-index-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "item-wrapper"
    }, albumCover, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, this.props.playlist.name))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
      className: "music-index-item",
      to: `/playlists/${this.props.playlist.id}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "item-wrapper"
    }, albumCover, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, this.props.playlist.name)));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "index-item-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "media-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "button-wrapper"
    }), link, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: `play-pause ${playlistIndexClass}`,
      onClick: this.handlePlay
    }, playPauseIcon)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
      className: "user-link",
      to: `/users/${playlist.creator_id}`
    }, playlist.creatorName));
  }
}
const mapStateToProps = state => ({
  currentSong: state.ui.playbar.currentSong,
  currentSongParams: state.ui.playbar.currentSongParams,
  playing: state.ui.playbar.playing
});
const mapDispatchToProps = dispatch => ({
  play: () => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_2__.play)()),
  pause: () => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_2__.pause)()),
  playSong: () => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_2__.playSong)()),
  fetchPlaylistThenPlaySong: (playlistId, params) => dispatch((0,_actions_playlist_actions__WEBPACK_IMPORTED_MODULE_4__.fetchPlaylistThenPlaySong)(playlistId, params)),
  fetchSong: songId => dispatch((0,_actions_song_actions__WEBPACK_IMPORTED_MODULE_3__.fetchSong)(songId)),
  fetchSongs: () => dispatch((0,_actions_song_actions__WEBPACK_IMPORTED_MODULE_3__.fetchSongs)())
});
/* harmony default export */ __webpack_exports__["default"] = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(PlaylistIndexItem)));

/***/ }),

/***/ "./components/root.jsx":
/*!*****************************!*\
  !*** ./components/root.jsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./components/app.jsx");
// frontend/components/root.jsx




const Root = _ref => {
  let store = _ref.store;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_app__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};
/* harmony default export */ __webpack_exports__["default"] = (Root);

/***/ }),

/***/ "./components/search/album_results.jsx":
/*!*********************************************!*\
  !*** ./components/search/album_results.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _albums_album_index_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../albums/album_index_item */ "./components/albums/album_index_item.jsx");


class AlbumResults extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const albums = this.props.albums;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, albums.map(album => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_albums_album_index_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: album.id,
      album: album,
      renderButton: true
    })));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (AlbumResults);

/***/ }),

/***/ "./components/search/artist_results.jsx":
/*!**********************************************!*\
  !*** ./components/search/artist_results.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _artists_artist_index_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../artists/artist_index_item */ "./components/artists/artist_index_item.jsx");


class ArtistResults extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const artists = this.props.artists;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, artists.map(artist => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_artists_artist_index_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: artist.id,
      artist: artist,
      renderButton: true
    })));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (ArtistResults);

/***/ }),

/***/ "./components/search/playlist_results.jsx":
/*!************************************************!*\
  !*** ./components/search/playlist_results.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _playlists_playlist_index_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../playlists/playlist_index_item */ "./components/playlists/playlist_index_item.jsx");


class PlaylistResults extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const playlists = this.props.playlists;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, playlists.map(playlist => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_playlists_playlist_index_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: playlist.id,
      playlist: playlist,
      renderButton: true
    })));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (PlaylistResults);

/***/ }),

/***/ "./components/search/search.jsx":
/*!**************************************!*\
  !*** ./components/search/search.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router/esm/react-router.js");
/* harmony import */ var _search_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search_bar */ "./components/search/search_bar.jsx");
/* harmony import */ var _search_results__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search_results */ "./components/search/search_results.jsx");





class Search extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
      className: "main",
      style: {
        background: "transparent"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "search-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_search_bar__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
      path: "/search/results/",
      component: _search_results__WEBPACK_IMPORTED_MODULE_3__["default"]
    })));
  }
}
const mapStateToProps = (state, ownProps) => ({});
const mapDispatchToProps = dispatch => ({});
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(Search));

/***/ }),

/***/ "./components/search/search_bar.jsx":
/*!******************************************!*\
  !*** ./components/search/search_bar.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router/esm/react-router.js");
/* harmony import */ var _actions_search_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/search_actions */ "./actions/search_actions.js");

// import { closePlaylistForm } from "../../actions/ui_actions";



const WAIT_INTERVAL = 500;
const ENTER_KEY = 13;
class SearchBar extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.triggerChange = this.triggerChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentWillMount() {
    this.timer = null;
  }
  handleChange(e) {
    clearTimeout(this.timer);
    this.setState({
      query: e.target.value
    });
    this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
  }
  triggerChange() {
    const query = this.state.query;
    this.props.fetchSearchResults(query).then(results => query ? this.props.history.push(`/search/results/${query}`) : this.props.history.push(`/search`));
  }
  handleKeyDown(e) {
    if (e.keyCode === ENTER_KEY) {
      e.preventDefault();
      this.triggerChange();
    }
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
      className: "main-search-bar"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
      className: "search-form"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      className: "search-form-input"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
      className: "search-heading"
    }, "Search for an Artist, Song, Album, or Playlist"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      className: "search-input",
      value: this.state.query,
      onChange: this.handleChange,
      onKeyDown: this.handleKeyDown,
      placeholder: "Start typing...",
      autoComplete: "off"
    }))));
  }
}
const mapStateToProps = (state, ownProps) => {};
const mapDispatchToProps = dispatch => ({
  fetchSearchResults: query => dispatch((0,_actions_search_actions__WEBPACK_IMPORTED_MODULE_2__.fetchSearchResults)(query))
});
/* harmony default export */ __webpack_exports__["default"] = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, mapDispatchToProps)(SearchBar)));

/***/ }),

/***/ "./components/search/search_results.jsx":
/*!**********************************************!*\
  !*** ./components/search/search_results.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router/esm/react-router.js");
/* harmony import */ var _navbar_search_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/search_navbar */ "./components/navbar/search_navbar.jsx");
/* harmony import */ var _albums_album_index_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../albums/album_index_item */ "./components/albums/album_index_item.jsx");
/* harmony import */ var _playlist_results__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playlist_results */ "./components/search/playlist_results.jsx");
/* harmony import */ var _song_results__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./song_results */ "./components/search/song_results.jsx");
/* harmony import */ var _album_results__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./album_results */ "./components/search/album_results.jsx");
/* harmony import */ var _artist_results__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./artist_results */ "./components/search/artist_results.jsx");
/* harmony import */ var _user_results__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user_results */ "./components/search/user_results.jsx");










class SearchResults extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const _this$props$searches = this.props.searches,
      playlists = _this$props$searches.playlists,
      songs = _this$props$searches.songs,
      albums = _this$props$searches.albums,
      artists = _this$props$searches.artists,
      users = _this$props$searches.users,
      query = _this$props$searches.query;
    const lengths = {
      playlists: playlists.length || null,
      albums: albums.length || null,
      artists: artists.length || null,
      users: users.length || null,
      songs: 0
    };
    const maxResult = Object.keys(lengths).reduce((a, b) => lengths[a] > lengths[b] ? a : b);
    let defaultResults;
    switch (maxResult) {
      case "playlists":
        defaultResults = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
          exact: true,
          path: `/search/results/${query}`,
          render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_playlist_results__WEBPACK_IMPORTED_MODULE_4__["default"], {
            playlists: playlists
          })
        });
        break;
      case "albums":
        defaultResults = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
          exact: true,
          path: `/search/results/${query}`,
          render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_album_results__WEBPACK_IMPORTED_MODULE_6__["default"], {
            albums: albums
          })
        });
        break;
      case "artists":
        defaultResults = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
          exact: true,
          path: `/search/results/${query}`,
          render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_artist_results__WEBPACK_IMPORTED_MODULE_7__["default"], {
            artists: artists
          })
        });
        break;
      case "users":
        defaultResults = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
          exact: true,
          path: `/search/results/${query}`,
          render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_user_results__WEBPACK_IMPORTED_MODULE_8__["default"], {
            users: users
          })
        });
        break;
      case "songs":
        defaultResults = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
          exact: true,
          path: `/search/results/${query}`,
          render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_song_results__WEBPACK_IMPORTED_MODULE_5__["default"], {
            songs: songs
          })
        });
        break;
      default:
        defaultResults = null;
        break;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
      className: "index-page-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_navbar_search_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      searches: this.props.searches
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "music-index"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "music-index-wrapper"
    }, defaultResults, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      path: `/search/results/${query}/playlists`,
      render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_playlist_results__WEBPACK_IMPORTED_MODULE_4__["default"], {
        playlists: playlists
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      path: `/search/results/${query}/songs`,
      render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_song_results__WEBPACK_IMPORTED_MODULE_5__["default"], {
        songs: songs
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      path: `/search/results/${query}/albums`,
      render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_album_results__WEBPACK_IMPORTED_MODULE_6__["default"], {
        albums: albums
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      path: `/search/results/${query}/artists`,
      render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_artist_results__WEBPACK_IMPORTED_MODULE_7__["default"], {
        artists: artists
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      path: `/search/results/${query}/users`,
      render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_user_results__WEBPACK_IMPORTED_MODULE_8__["default"], {
        users: users
      })
    }))));
  }
}
const mapStateToProps = (state, ownProps) => ({
  searches: state.entities.searches
});
const mapDispatchToProps = dispatch => {};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, null)(SearchResults)));

/***/ }),

/***/ "./components/search/song_results.jsx":
/*!********************************************!*\
  !*** ./components/search/song_results.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _songs_song_index_item_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../songs/song_index_item_container */ "./components/songs/song_index_item_container.js");


class SongResults extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const songs = this.props.songs;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
      className: "show-page-main search-songs"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      className: "show-songs song-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", null, this.props.songs.map(song => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_songs_song_index_item_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: song.id,
        song: song
      });
    }))));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (SongResults);

/***/ }),

/***/ "./components/search/user_results.jsx":
/*!********************************************!*\
  !*** ./components/search/user_results.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _users_user_index_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users/user_index_item */ "./components/users/user_index_item.jsx");


class UserResults extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const users = this.props.users;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, users.map(user => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_users_user_index_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: user.id,
      user: user,
      renderButton: true
    })));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (UserResults);

/***/ }),

/***/ "./components/session/login_form_container.js":
/*!****************************************************!*\
  !*** ./components/session/login_form_container.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _session_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session_form */ "./components/session/session_form.jsx");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/session_actions */ "./actions/session_actions.js");





const mapStateToProps = (state, ownProps) => ({
  errors: Object.values(state.errors),
  formType: "Log In",
  navLink: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "Don't have an account? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/signup"
  }, "Sign Up")),
  usernameInput: null,
  emailPlaceholder: "Email address or username"
});
const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_3__.login)(user)),
  clearSessionErrors: () => dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_3__.clearSessionErrors)()),
  loginDemoUser: () => dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_3__.login)({
    username: "Demo User",
    email: "demo@demo.com",
    password: "password"
  }))
});
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_session_form__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./components/session/new_session.jsx":
/*!********************************************!*\
  !*** ./components/session/new_session.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");


const albums = [{
  cover: "https://s3.us-east-2.amazonaws.com/bop-songs/Beach+House+-+Depression+Cherry/album_cover.jpg",
  name: "Depression Cherry",
  artist: "Beach House"
}, {
  cover: "https://s3.us-east-2.amazonaws.com/bop-songs/Mr.+Oizo+-+All+Wet+(2016)+/album_cover.jpg",
  name: "All Wet",
  artist: "Mr. Oizo"
}, {
  cover: "https://s3.us-east-2.amazonaws.com/bop-songs/Ponyboy/album_cover.jpg",
  name: "Ponyboy",
  artist: "SOPHIE"
}];
class NewSession extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
      className: "navbar navbar-logged-out"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
      className: "navbar-collapse"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "navbar-logo"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: "https://s3.us-east-2.amazonaws.com/bop-images/logos/logo-white.png",
      className: "logo"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "navbar-links"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "https://github.com/nwelchr/bop"
    }, "Dev Info")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "divider"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/signup"
    }, "Sign Up")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/login"
    }, "Log In")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      onClick: this.props.loginDemoUser
    }, "Demo User"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
      className: "main-content-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      className: "main-content-intro"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Music for everyone."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/login",
      className: "login"
    }, "Log in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "A taste of what we offer:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      className: "image-links"
    }, albums.map((album, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: i,
      className: `index-item-wrapper fade-up fu${i + 1}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "media-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "button-wrapper"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      className: "music-index-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "item-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "media"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      alt: "",
      className: "media__image",
      src: album.cover
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: `media__body index-page`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "item-span"
    }, album.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "owner-span"
    }, album.artist)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "media-loaded"
    }))))))))));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (NewSession);

/***/ }),

/***/ "./components/session/new_session_container.js":
/*!*****************************************************!*\
  !*** ./components/session/new_session_container.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/session_actions */ "./actions/session_actions.js");
/* harmony import */ var _new_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new_session */ "./components/session/new_session.jsx");
/* harmony import */ var _actions_audio_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/audio_actions */ "./actions/audio_actions.js");




const mapStateToProps = _ref => {
  let session = _ref.session;
  return {
    currentUser: session.currentUser
  };
};
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__.logout)()),
  login: user => dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__.login)(user)),
  loginDemoUser: () => dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__.login)({
    username: "Demo User",
    email: "demo@demo.com",
    password: "password"
  }))
  //   fetchSongThenPlay: (songId) => dispatch(fetchSongThenPlay(songId)),
});
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_new_session__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./components/session/session_form.jsx":
/*!*********************************************!*\
  !*** ./components/session/session_form.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router/esm/react-router.js");


class SessionForm extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    window.setState = this.setState;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillUnmount() {
    this.props.clearSessionErrors();
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.errors === nextProps.errors) {
      this.props.clearSessionErrors();
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.email.includes("@")) {
      this.state = {
        username: this.state.email,
        email: "",
        password: this.state.password
      };
    }
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }
  renderErrors() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "session-errors"
    }, this.props.errors.map((error, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: idx
    }, error)));
  }
  render() {
    if (this.props.usernameInput) {
      this.usernameInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "text",
        onChange: this.update("username"),
        value: this.state.username,
        placeholder: "What should we call you?"
      });
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
      className: "session-form-nav"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: "https://s3.us-east-2.amazonaws.com/bop-images/logos/logo-black-text.png"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
      className: "session-form-main"
    }, this.renderErrors(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "demo-user",
      onClick: this.props.loginDemoUser
    }, "Just browsing? Sign in as a demo user"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "divider"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "or ", this.props.formType)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: this.props.formType === "Sign Up" ? "email" : "text"
      // type="email"
      ,
      onChange: this.update("email"),
      value: this.state.email,
      placeholder: this.props.emailPlaceholder
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "password",
      onChange: this.update("password"),
      value: this.state.password,
      placeholder: "Password"
    }), this.usernameInput, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "submit",
      value: this.props.formType
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, this.props.navLink)));
  }
}
/* harmony default export */ __webpack_exports__["default"] = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.withRouter)(SessionForm));

/***/ }),

/***/ "./components/session/signup_form_container.js":
/*!*****************************************************!*\
  !*** ./components/session/signup_form_container.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _session_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session_form */ "./components/session/session_form.jsx");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/session_actions */ "./actions/session_actions.js");





const mapStateToProps = (state, ownProps) => ({
  errors: Object.values(state.errors.session),
  formType: "Sign Up",
  navLink: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "Already have an account? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/login"
  }, "Log In")),
  usernameInput: true,
  emailPlaceholder: "Email address"
});
const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_3__.signup)(user)),
  clearSessionErrors: () => dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_3__.clearSessionErrors)()),
  loginDemoUser: () => dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_3__.login)({
    username: "Demo User",
    email: "demo@demo.com",
    password: "password"
  }))
});
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_session_form__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./components/show_pages/album_show.jsx":
/*!**********************************************!*\
  !*** ./components/show_pages/album_show.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _util_route_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/route_util */ "./util/route_util.jsx");
/* harmony import */ var _songs_song_index_item_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../songs/song_index_item_container */ "./components/songs/song_index_item_container.js");
/* harmony import */ var _albums_album_index_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../albums/album_index_item */ "./components/albums/album_index_item.jsx");





class AlbumShow extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.redirect = this.redirect.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
  }
  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId).then(response => this.handleResponse());
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.albumId != nextProps.match.params.albumId) {
      this.props.fetchAlbum(nextProps.match.params.albumId).then(response => this.handleResponse());
    }
  }
  handleResponse() {
    this.setState({
      loading: false
    });
  }
  redirect() {
    this.props.history.push("/collection/albums");
  }
  createAlbumSongs() {
    if (!(typeof this.props.album.songIds === "undefined" || typeof this.props.songs === "undefined")) {
      const selectedSongs = this.props.songs.filter(song => this.props.album.songIds.includes(song.id));
      const songs = this.props.album.songIds.map(songId => selectedSongs.find(song => song.id === songId));
      this.AlbumSongs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", null, songs.map(song => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_songs_song_index_item_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: song.id,
          song: song,
          album: this.props.album
        });
      }));
    } else {
      this.AlbumSongs = null;
    }
  }
  render() {
    if (this.state.loading || typeof this.props.album === "undefined") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
    } else {
      this.createAlbumSongs();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: "main",
        style: this.props.background
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: "show-page-main"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
        className: "show-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
        className: "album-index-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_albums_album_index_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: this.props.album.id,
        album: this.props.album,
        renderButton: true
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
        className: "show-songs"
      }, this.AlbumSongs)));
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (AlbumShow);

/***/ }),

/***/ "./components/show_pages/album_show_container.jsx":
/*!********************************************************!*\
  !*** ./components/show_pages/album_show_container.jsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _album_show__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./album_show */ "./components/show_pages/album_show.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_album_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/album_actions */ "./actions/album_actions.js");
/* harmony import */ var _actions_song_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/song_actions */ "./actions/song_actions.js");
/* harmony import */ var _actions_audio_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/audio_actions */ "./actions/audio_actions.js");
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/ui_actions */ "./actions/ui_actions.js");






const mapStateToProps = (state, ownProps) => {
  return {
    album: state.entities.albums[parseInt(ownProps.match.params.albumId)],
    loading: state.ui.loading.global,
    background: {
      backgroundColor: "#65426f"
    },
    currentUser: state.session.currentUser,
    currentSong: state.ui.playbar.currentSong,
    playing: state.ui.playbar.playing,
    songs: Object.values(state.entities.songs)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchAlbum: albumId => dispatch((0,_actions_album_actions__WEBPACK_IMPORTED_MODULE_2__.fetchAlbum)(albumId)),
    fetchSong: songId => dispatch((0,_actions_song_actions__WEBPACK_IMPORTED_MODULE_3__.fetchSong)(songId)),
    play: () => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_4__.play)()),
    pause: () => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_4__.pause)()),
    playSong: song => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_4__.playSong)(song))
  };
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_album_show__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./components/show_pages/artist_show.jsx":
/*!***********************************************!*\
  !*** ./components/show_pages/artist_show.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _util_route_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/route_util */ "./util/route_util.jsx");
/* harmony import */ var _songs_song_index_item_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../songs/song_index_item_container */ "./components/songs/song_index_item_container.js");
/* harmony import */ var _artists_artist_index_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../artists/artist_index_item */ "./components/artists/artist_index_item.jsx");
/* harmony import */ var _search_album_results__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search/album_results */ "./components/search/album_results.jsx");






class ArtistShow extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.redirect = this.redirect.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.artistId).then(response => this.handleResponse());
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.artistId != nextProps.match.params.artistId) {
      this.props.fetchArtist(nextProps.match.params.artistId).then(response => this.handleResponse());
    }
  }
  handleClick(followText) {
    const _this$props = this.props,
      artist = _this$props.artist,
      follow = _this$props.follow,
      unfollow = _this$props.unfollow;
    followText === "Follow" ? follow(artist.id) : unfollow(artist.id);
  }
  handleResponse() {
    this.setState({
      loading: false
    });
  }
  redirect() {
    this.props.history.push("/collection/artists");
  }
  createArtistSongs() {
    if (!(typeof this.props.artist.songIds === "undefined")) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: "show-page-main"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
        className: "show-songs song-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", null, this.props.songs.map(song => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_songs_song_index_item_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: song.id,
          song: song,
          artist: this.props.artist
        });
      }))));
    } else {
      return null;
    }
  }
  render() {
    if (this.props.loading || typeof this.props.artist === "undefined" || !this.props.songs) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
    } else {
      const ArtistSongs = this.createArtistSongs();
      const _this$props2 = this.props,
        currentUser = _this$props2.currentUser,
        artist = _this$props2.artist;
      let followText = currentUser.followed_artists && currentUser.followed_artists.includes(artist.id) ? "Unfollow" : "Follow";
      let followButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        onClick: () => this.handleClick(followText),
        className: "follow-button"
      }, followText);
      const Albums = artist.albums && artist.albums.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
        className: "artist-albums"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Albums"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_search_album_results__WEBPACK_IMPORTED_MODULE_4__["default"], {
        albums: artist.albums
      })) : null;
      const Singles = artist.singles && artist.singles.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
        className: "artist-singles"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Singles"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_search_album_results__WEBPACK_IMPORTED_MODULE_4__["default"], {
        albums: artist.singles
      })) : null;
      let numFollowers = artist.followerIds !== null ? artist.followerIds.length === 1 ? "1 follower" : `${artist.followerIds.length} followers` : "0 followers";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: "main artist-show"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "content"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        className: "artwork",
        src: artist.background_artwork_url
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "user-artist-show-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
        className: "user-artist-intro"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        src: artist.artist_artwork_url,
        className: "artist-artwork"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, artist.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
        className: "followers"
      }, numFollowers), followButton), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "artist-songs-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
        className: "artist-random-songs"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Get Acquainted"), ArtistSongs)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "albums-singles-wrapper"
      }, Albums, Singles)));
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (ArtistShow);

/***/ }),

/***/ "./components/show_pages/artist_show_container.jsx":
/*!*********************************************************!*\
  !*** ./components/show_pages/artist_show_container.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _artist_show__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./artist_show */ "./components/show_pages/artist_show.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_artist_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/artist_actions */ "./actions/artist_actions.js");
/* harmony import */ var _actions_song_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/song_actions */ "./actions/song_actions.js");
/* harmony import */ var _actions_audio_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/audio_actions */ "./actions/audio_actions.js");
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/ui_actions */ "./actions/ui_actions.js");
/* harmony import */ var _actions_follow_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/follow_actions */ "./actions/follow_actions.js");
/* harmony import */ var _reducers_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../reducers/selectors */ "./reducers/selectors.js");








const mapStateToProps = (state, ownProps) => {
  const artist = state.entities.artists[parseInt(ownProps.match.params.artistId)];
  let songs;
  if (artist) songs = (0,_reducers_selectors__WEBPACK_IMPORTED_MODULE_7__.songSelector)(artist.songIds, Object.values(state.entities.songs));
  return {
    artist,
    loading: state.ui.loading.global,
    background: {
      backgroundColor: "#230b27"
    },
    currentUser: state.session.currentUser,
    currentSong: state.ui.playbar.currentSong,
    playing: state.ui.playbar.playing,
    songs
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchArtist: artistId => dispatch((0,_actions_artist_actions__WEBPACK_IMPORTED_MODULE_2__.fetchArtist)(artistId)),
    fetchSong: songId => dispatch((0,_actions_song_actions__WEBPACK_IMPORTED_MODULE_3__.fetchSong)(songId)),
    play: () => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_4__.play)()),
    pause: () => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_4__.pause)()),
    playSong: song => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_4__.playSong)(song)),
    follow: artistId => dispatch((0,_actions_follow_actions__WEBPACK_IMPORTED_MODULE_6__.follow)("Artist", artistId)),
    unfollow: artistId => dispatch((0,_actions_follow_actions__WEBPACK_IMPORTED_MODULE_6__.unfollow)("Artist", artistId))
  };
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_artist_show__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./components/show_pages/playlist_show.jsx":
/*!*************************************************!*\
  !*** ./components/show_pages/playlist_show.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _util_route_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/route_util */ "./util/route_util.jsx");
/* harmony import */ var _songs_song_index_item_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../songs/song_index_item_container */ "./components/songs/song_index_item_container.js");
/* harmony import */ var _playlists_playlist_index_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../playlists/playlist_index_item */ "./components/playlists/playlist_index_item.jsx");
/* harmony import */ var _modals_add_to_playlist_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/add_to_playlist_modal */ "./components/modals/add_to_playlist_modal.jsx");






class PlaylistShow extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.redirect = this.redirect.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.createPlaylistSongs = this.createPlaylistSongs.bind.this();
    // this.createDeletePlaylistButton = this.createDeletePlaylistButton.bind.this();
  }
  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.playlistId).then(response => this.handleResponse());
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.playlistId != nextProps.match.params.playlistId) {
      this.props.fetchPlaylist(nextProps.match.params.playlistId).then(response => this.handleResponse());
    }
  }
  handleResponse() {
    this.setState({
      loading: false
    });
  }
  handleDelete(e) {
    e.preventDefault();
    this.props.deletePlaylist(this.props.playlist.id).then(response => this.redirect());
  }
  handleClick(followText) {
    const _this$props = this.props,
      playlist = _this$props.playlist,
      follow = _this$props.follow,
      unfollow = _this$props.unfollow;
    followText === "Follow Playlist" ? follow(playlist.id) : unfollow(playlist.id);
  }
  redirect() {
    this.props.history.push("/collection/playlists");
  }
  createPlaylistSongs() {
    if (!(typeof this.props.playlist.songIds === "undefined")) {
      const selectedSongs = this.props.songs.filter(song => this.props.playlist.songIds.includes(song.id));
      const songs = this.props.playlist.songIds.map(songId => selectedSongs.find(song => song.id === songId));

      // if songs haven't been fetched yet (i.e. after adding song to playlist and waiting for new songs to populate)
      // return an empty div
      if (songs.includes(undefined)) {
        return;
      }
      this.PlaylistSongs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", null, songs.map(song => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_songs_song_index_item_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: song.id,
          song: song,
          playlist: this.props.playlist
        });
      }));
    } else {
      this.PlaylistSongs = null;
    }
  }
  createDeletePlaylistButton() {
    if (this.props.currentUser.id === this.props.playlist.creator_id) {
      this.DeletePlaylistButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
        className: "delete-button-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        className: "delete-playlist-button",
        onClick: this.handleDelete
      }, "Delete Playlist"));
    } else {
      this.DeletePlaylistButton = null;
    }
  }
  render() {
    if (this.state.loading || typeof this.props.playlist === "undefined") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
    } else {
      this.createPlaylistSongs();
      if (this.PlaylistSongs === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
      this.createDeletePlaylistButton();
      const _this$props2 = this.props,
        currentUser = _this$props2.currentUser,
        playlist = _this$props2.playlist;
      let followButton = null;
      if (!currentUser.playlistIds.includes(playlist.id)) {
        let followText = currentUser.followed_playlists && currentUser.followed_playlists.includes(playlist.id) ? "Unfollow Playlist" : "Follow Playlist";
        followButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          onClick: () => this.handleClick(followText),
          className: "follow-button"
        }, followText);
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: "main",
        style: this.props.background
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: "show-page-main"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
        className: "show-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
        className: "playlist-index-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_playlists_playlist_index_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: this.props.playlist.id,
        playlist: this.props.playlist,
        renderButton: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
        className: "delete-button-wrapper"
      }, this.DeletePlaylistButton, followButton))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
        className: "show-songs"
      }, this.PlaylistSongs)));
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (PlaylistShow);

/***/ }),

/***/ "./components/show_pages/playlist_show_container.js":
/*!**********************************************************!*\
  !*** ./components/show_pages/playlist_show_container.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _playlist_show__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playlist_show */ "./components/show_pages/playlist_show.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/playlist_actions */ "./actions/playlist_actions.js");
/* harmony import */ var _actions_song_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/song_actions */ "./actions/song_actions.js");
/* harmony import */ var _actions_audio_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/audio_actions */ "./actions/audio_actions.js");
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/ui_actions */ "./actions/ui_actions.js");
/* harmony import */ var _actions_follow_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/follow_actions */ "./actions/follow_actions.js");







const mapStateToProps = (state, ownProps) => {
  return {
    playlist: state.entities.playlists[parseInt(ownProps.match.params.playlistId)],
    loading: state.ui.loading.global,
    background: {
      backgroundColor: "#7a1a45"
    },
    currentUser: state.session.currentUser,
    currentSong: state.ui.playbar.currentSong,
    playing: state.ui.playbar.playing,
    songs: Object.values(state.entities.songs)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylist: playlistId => dispatch((0,_actions_playlist_actions__WEBPACK_IMPORTED_MODULE_2__.fetchPlaylist)(playlistId)),
    deletePlaylist: playlistId => dispatch((0,_actions_playlist_actions__WEBPACK_IMPORTED_MODULE_2__.deletePlaylist)(playlistId)),
    fetchSong: songId => dispatch((0,_actions_song_actions__WEBPACK_IMPORTED_MODULE_3__.fetchSong)(songId)),
    play: () => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_4__.play)()),
    pause: () => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_4__.pause)()),
    playSong: song => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_4__.playSong)(song)),
    removeSongFromPlaylist: (songId, playlistId) => dispatch((0,_actions_song_actions__WEBPACK_IMPORTED_MODULE_3__.removeSongFromPlaylist)(songId, playlistId)),
    openAddToPlaylistForm: () => dispatch((0,_actions_ui_actions__WEBPACK_IMPORTED_MODULE_5__.openAddToPlaylistForm)()),
    fetchModalPlaylists: songToAddId => dispatch((0,_actions_playlist_actions__WEBPACK_IMPORTED_MODULE_2__.fetchModalPlaylists)(songToAddId)),
    follow: playlistId => dispatch((0,_actions_follow_actions__WEBPACK_IMPORTED_MODULE_6__.follow)("Playlist", playlistId)),
    unfollow: playlistId => dispatch((0,_actions_follow_actions__WEBPACK_IMPORTED_MODULE_6__.unfollow)("Playlist", playlistId))
  };
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_playlist_show__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./components/show_pages/user_account_page.jsx":
/*!*****************************************************!*\
  !*** ./components/show_pages/user_account_page.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router/esm/react-router.js");
/* harmony import */ var _util_route_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/route_util */ "./util/route_util.jsx");
/* harmony import */ var _songs_song_index_item_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../songs/song_index_item_container */ "./components/songs/song_index_item_container.js");
/* harmony import */ var _artists_artist_index_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../artists/artist_index_item */ "./components/artists/artist_index_item.jsx");
/* harmony import */ var _search_album_results__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search/album_results */ "./components/search/album_results.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/session_actions */ "./actions/session_actions.js");








class UserAccountPage extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    this.props.logout().then(() => this.props.history.push("/"));
  }
  render() {
    const _this$props = this.props,
      currentUser = _this$props.currentUser,
      background = _this$props.background;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
      className: "main",
      style: background
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      className: "artwork",
      src: currentUser.background_artwork_url
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-artist-show-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      className: "user-artist-intro"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: currentUser.profile_picture,
      className: "profile-picture"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
      className: "username"
    }, currentUser.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: this.handleLogout,
      className: "new-playlist-cancel playlist-modal-button new-playlist-button"
    }, "Logout"))));
  }
}
const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  background: {
    backgroundColor: "#814949"
  }
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_6__.logout)())
});
/* harmony default export */ __webpack_exports__["default"] = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_5__.connect)(mapStateToProps, mapDispatchToProps)(UserAccountPage)));

/***/ }),

/***/ "./components/show_pages/user_show.jsx":
/*!*********************************************!*\
  !*** ./components/show_pages/user_show.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router/esm/react-router.js");
/* harmony import */ var _util_route_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/route_util */ "./util/route_util.jsx");
/* harmony import */ var _songs_song_index_item_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../songs/song_index_item_container */ "./components/songs/song_index_item_container.js");
/* harmony import */ var _search_playlist_results__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search/playlist_results */ "./components/search/playlist_results.jsx");
/* harmony import */ var _search_artist_results__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search/artist_results */ "./components/search/artist_results.jsx");
/* harmony import */ var _search_user_results__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search/user_results */ "./components/search/user_results.jsx");







class UserShow extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.followingResults = this.followingResults.bind(this);
  }
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId != nextProps.match.params.userId) {
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }
  handleClick(followText) {
    const _this$props = this.props,
      user = _this$props.user,
      follow = _this$props.follow,
      unfollow = _this$props.unfollow,
      fetchUser = _this$props.fetchUser;
    followText === "Follow" ? follow(user.id).then(this.setState({
      followText: "Unfollow"
    })) : unfollow(user.id).then(this.setState({
      followText: "Follow"
    }));
  }
  followingResults() {
    const followedArtists = this.props.user.followedArtists.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      className: "followed-artists"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Followed Artists"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_search_artist_results__WEBPACK_IMPORTED_MODULE_4__["default"], {
      artists: this.props.user.followedArtists,
      followButton: true
    })) : null;
    const followedUsers = this.props.user.followedUsers.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      className: "followed-users"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Followed Users"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_search_user_results__WEBPACK_IMPORTED_MODULE_5__["default"], {
      users: this.props.user.followedUsers,
      followButton: true
    })) : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "following-wrapper"
    }, followedArtists, followedUsers);
  }
  render() {
    if (this.props.loading || typeof this.props.user === "undefined" || typeof this.props.user.playlists === "undefined") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
    } else {
      const _this$props2 = this.props,
        user = _this$props2.user,
        background = _this$props2.background,
        currentUser = _this$props2.currentUser;
      let followButton = null;
      if (currentUser.id !== user.id) {
        let followText = currentUser.followed_users && currentUser.followed_users.includes(user.id) ? "Unfollow" : "Follow";
        followButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          onClick: () => this.handleClick(followText),
          className: "follow-button"
        }, followText);
      }
      let playlistHeading = null;
      if (user.playlists && user.playlists.length > 0) playlistHeading = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
        className: ""
      }, "Public Playlists");
      let numFollowers = user.followerIds !== null ? user.followerIds.length === 1 ? "1 follower" : `${user.followerIds.length} followers` : "0 followers";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: "main",
        style: background
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "user-show-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "user-artist-show-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
        className: "user-artist-intro user-intro"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        src: user.profile_picture,
        className: "profile-picture"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
        className: "username"
      }, user.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
        className: "followers"
      }, numFollowers), followButton), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "user-show-music-index"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
        className: "nav-flex-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
        className: "top-nav-bar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: "top-nav-link-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
        exact: true,
        to: `/users/${user.id}`,
        activeClassName: "nav-link-selected"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Playlists"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: "top-nav-link-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
        exact: true,
        to: `/users/${user.id}/followers`,
        activeClassName: "nav-link-selected"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Followers"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: "top-nav-link-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
        exact: true,
        to: `/users/${user.id}/following`,
        activeClassName: "nav-link-selected"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Following"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "music-index"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "music-index-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
        exact: true,
        path: `/users/${user.id}`,
        render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_search_playlist_results__WEBPACK_IMPORTED_MODULE_3__["default"], {
          playlists: user.playlists
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
        path: `/users/${user.id}/followers`,
        render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_search_user_results__WEBPACK_IMPORTED_MODULE_5__["default"], {
          users: user.followers
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
        path: `/users/${user.id}/following`,
        render: this.followingResults
      })))))));
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (UserShow);

/***/ }),

/***/ "./components/show_pages/user_show_container.jsx":
/*!*******************************************************!*\
  !*** ./components/show_pages/user_show_container.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router/esm/react-router.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/user_actions */ "./actions/user_actions.js");
/* harmony import */ var _actions_audio_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/audio_actions */ "./actions/audio_actions.js");
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/ui_actions */ "./actions/ui_actions.js");
/* harmony import */ var _actions_follow_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/follow_actions */ "./actions/follow_actions.js");
/* harmony import */ var _user_show__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user_show */ "./components/show_pages/user_show.jsx");







const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[parseInt(ownProps.match.params.userId)],
    loading: state.ui.loading.global,
    background: {
      backgroundColor: "#0e3633"
    },
    currentUser: state.session.currentUser
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchUser: userId => dispatch((0,_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__.fetchUser)(userId)),
    follow: userId => dispatch((0,_actions_follow_actions__WEBPACK_IMPORTED_MODULE_4__.follow)("User", userId)),
    unfollow: userId => dispatch((0,_actions_follow_actions__WEBPACK_IMPORTED_MODULE_4__.unfollow)("User", userId))
  };
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_user_show__WEBPACK_IMPORTED_MODULE_5__["default"])));

/***/ }),

/***/ "./components/songs/song_collection_index.jsx":
/*!****************************************************!*\
  !*** ./components/songs/song_collection_index.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _util_route_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/route_util */ "./util/route_util.jsx");
/* harmony import */ var _song_index_item_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./song_index_item_container */ "./components/songs/song_index_item_container.js");
/* harmony import */ var _navbar_top_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar/top_navbar */ "./components/navbar/top_navbar.jsx");





class SongIndex extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }
  componentDidMount() {
    this.props.fetchSongs();
  }
  render() {
    if (this.props.loading) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: "main",
        style: this.props.background
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: "index-page-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_navbar_top_navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: "music-index song-collection-index"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "music-index-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: "show-page-main"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
        className: "show-songs song-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", null, this.props.songs.map(song => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_song_index_item_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: song.id,
          song: song
        });
      }))))))));
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (SongIndex);

/***/ }),

/***/ "./components/songs/song_collection_index_container.js":
/*!*************************************************************!*\
  !*** ./components/songs/song_collection_index_container.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_song_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/song_actions */ "./actions/song_actions.js");
/* harmony import */ var _actions_audio_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/audio_actions */ "./actions/audio_actions.js");
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/ui_actions */ "./actions/ui_actions.js");
/* harmony import */ var _song_collection_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./song_collection_index */ "./components/songs/song_collection_index.jsx");
/* harmony import */ var _reducers_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/selectors */ "./reducers/selectors.js");






const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.ui.loading.global,
    background: {
      backgroundColor: "#202753"
    },
    currentUser: state.session.currentUser,
    currentSong: state.ui.playbar.currentSong,
    playing: state.ui.playbar.playing,
    songs: Object.values(state.entities.songs)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchSongs: () => dispatch((0,_actions_song_actions__WEBPACK_IMPORTED_MODULE_1__.fetchSongs)()),
    fetchSong: songId => dispatch((0,_actions_song_actions__WEBPACK_IMPORTED_MODULE_1__.fetchSong)(songId)),
    play: () => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_2__.play)()),
    pause: () => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_2__.pause)()),
    playSong: song => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_2__.playSong)(song)),
    openAddToPlaylistForm: () => dispatch((0,_actions_ui_actions__WEBPACK_IMPORTED_MODULE_3__.openAddToPlaylistForm)())
  };
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_song_collection_index__WEBPACK_IMPORTED_MODULE_4__["default"]));

/***/ }),

/***/ "./components/songs/song_index_item.jsx":
/*!**********************************************!*\
  !*** ./components/songs/song_index_item.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/merge */ "../node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modals_add_to_playlist_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/add_to_playlist_modal */ "./components/modals/add_to_playlist_modal.jsx");



class SongIndexItem extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = lodash_merge__WEBPACK_IMPORTED_MODULE_1___default()({}, this.props, {
      dropdownIsOpen: false
    });
    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.playSong = this.playSong.bind(this);
    this.playSongWithTracklist = this.playSongWithTracklist.bind(this);
    this.openAddToPlaylistModal = this.openAddToPlaylistModal.bind(this);
    this.removeFromPlaylist = this.removeFromPlaylist.bind(this);
  }
  handleClick() {
    // crazy logic:
    // If there a song is currently playing:
    // - If the song is playing it's what you click on, pause
    // - Otherwise, fetch the new song and play that instead
    // If there is no song playing:
    // - If the song that was just paused is what you click on, play (without fetching)
    // - Otherwise, fetch the new song and play that
    // If currentSong doesn't exist (i.e. you just opened the app), fetch the song

    if (this.props.currentSong) {
      if (this.props.playing) {
        if (this.props.currentSong.id === this.props.song.id && Object.keys(this.props.match.params)[0] === Object.keys(this.props.currentSongParams)[0] && Object.values(this.props.match.params)[0] === Object.values(this.props.currentSongParams)[0]) {
          this.props.pause();
        } else {
          if (Object.keys(this.props.match.params)[0] === Object.keys(this.props.currentSongParams)[0] && Object.values(this.props.match.params)[0] === Object.values(this.props.currentSongParams)[0]) {
            this.playSong();
          } else {
            this.playSongWithTracklist();
          }
        }
      } else if (this.props.currentSong.id === this.props.song.id && Object.keys(this.props.match.params)[0] === Object.keys(this.props.currentSongParams)[0] && Object.values(this.props.match.params)[0] === Object.values(this.props.currentSongParams)[0]) {
        this.props.play();
      } else {
        if (Object.keys(this.props.match.params)[0] === Object.keys(this.props.currentSongParams)[0] && Object.values(this.props.match.params)[0] === Object.values(this.props.currentSongParams)[0]) {
          this.playSong();
        } else {
          this.playSongWithTracklist();
        }
      }
    } else {
      this.playSongWithTracklist();
    }
  }
  playSongWithTracklist() {
    let tracklist;
    if (this.props.match.path === "/collection/songs") {
      tracklist = Object.values(this.props.songs).map(song => song.id);
    } else {
      const tracklistParamKey = Object.keys(this.props.match.params)[0];
      const tracklistParam = tracklistParamKey.slice(0, tracklistParamKey.length - 2);
      tracklist = this.props[tracklistParam].songIds;
    }
    this.props.playSongWithTracklist(this.props.song, this.props.match.params || {
      collection: "song"
    }, tracklist);
  }
  playSong() {
    this.props.playSong(this.props.song, this.props.match.params);
  }
  showDropdown() {
    this.setState({
      dropdownIsOpen: true
    });
    document.addEventListener("click", this.hideDropdown);
  }
  hideDropdown() {
    this.setState({
      dropdownIsOpen: false
    });
    document.removeEventListener("click", this.hideDropdown);
  }
  handleAddSongClick(e) {
    e.preventDefault();
  }
  openAddToPlaylistModal(e) {
    e.stopPropagation();
    this.props.fetchModalPlaylists(this.props.song.id).then(response => this.props.openAddToPlaylistForm());
  }
  removeFromPlaylist(e) {
    e.stopPropagation();
    this.props.removeSongFromPlaylist(this.props.song.id, this.props.playlist.id).then(response => this.props.fetchPlaylist(this.props.playlist.id));
  }
  render() {
    const songDropdown = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "song-dropdown"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      onClick: e => this.openAddToPlaylistModal(e),
      className: "dropdown-li"
    }, "Add to Playlist"), this.props.playlist && this.props.currentUser.id === this.props.playlist.creator_id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      onClick: e => this.removeFromPlaylist(e),
      className: "dropdown-li"
    }, "Remove from this Playlist") : "");
    const _this$props$song = this.props.song,
      title = _this$props$song.title,
      mp3_url = _this$props$song.mp3_url;
    let indexItemClass;
    if (this.props.currentSong) {
      // if the current song is the song && the song comes from the same location && the song is currently playing
      indexItemClass = this.props.currentSong.id === this.props.song.id && Object.keys(this.props.match.params)[0] === Object.keys(this.props.currentSongParams)[0] && Object.values(this.props.match.params)[0] === Object.values(this.props.currentSongParams)[0] && this.props.playing ? "playing" : "";
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: `song-index-item-wrapper ${indexItemClass}`,
      onDoubleClick: () => this.handleClick()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "single-click-handler",
      onClick: () => this.handleClick()
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "song-index-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "song-dropdown-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "dropdown-handler",
      onClick: this.showDropdown
    }, "\xB7\xB7\xB7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "dropdown-menu " + (this.state.dropdownIsOpen ? "clicked" : "")
    }, songDropdown))));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (SongIndexItem);

/***/ }),

/***/ "./components/songs/song_index_item_container.js":
/*!*******************************************************!*\
  !*** ./components/songs/song_index_item_container.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_pages_playlist_show__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../show_pages/playlist_show */ "./components/show_pages/playlist_show.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router/esm/react-router.js");
/* harmony import */ var _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/playlist_actions */ "./actions/playlist_actions.js");
/* harmony import */ var _actions_song_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/song_actions */ "./actions/song_actions.js");
/* harmony import */ var _actions_audio_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/audio_actions */ "./actions/audio_actions.js");
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/ui_actions */ "./actions/ui_actions.js");
/* harmony import */ var _song_index_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./song_index_item */ "./components/songs/song_index_item.jsx");
/* harmony import */ var _reducers_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../reducers/selectors */ "./reducers/selectors.js");









const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.ui.loading.global,
    background: {
      backgroundColor: "#7a1a45"
    },
    currentUser: state.session.currentUser,
    currentSong: state.ui.playbar.currentSong,
    currentSongParams: state.ui.playbar.currentSongParams,
    playing: state.ui.playbar.playing,
    songs: state.entities.songs
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchSongs: () => dispatch((0,_actions_song_actions__WEBPACK_IMPORTED_MODULE_3__.fetchSongs)()),
    fetchSong: songId => dispatch((0,_actions_song_actions__WEBPACK_IMPORTED_MODULE_3__.fetchSong)(songId)),
    fetchPlaylist: playlistId => dispatch((0,_actions_playlist_actions__WEBPACK_IMPORTED_MODULE_2__.fetchPlaylist)(playlistId)),
    play: () => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_4__.play)()),
    pause: () => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_4__.pause)()),
    playSong: (song, params) => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_4__.playSong)(song, params)),
    playSongWithTracklist: (song, params, tracklist) => dispatch((0,_actions_audio_actions__WEBPACK_IMPORTED_MODULE_4__.playSongWithTracklist)(song, params, tracklist)),
    openAddToPlaylistForm: () => dispatch((0,_actions_ui_actions__WEBPACK_IMPORTED_MODULE_5__.openAddToPlaylistForm)()),
    fetchModalPlaylists: songToAddId => dispatch((0,_actions_playlist_actions__WEBPACK_IMPORTED_MODULE_2__.fetchModalPlaylists)(songToAddId)),
    removeSongFromPlaylist: (songId, playlistId) => dispatch((0,_actions_song_actions__WEBPACK_IMPORTED_MODULE_3__.removeSongFromPlaylist)(songId, playlistId))
  };
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_song_index_item__WEBPACK_IMPORTED_MODULE_6__["default"])));

/***/ }),

/***/ "./components/users/user_index.jsx":
/*!*****************************************!*\
  !*** ./components/users/user_index.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _util_route_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/route_util */ "./util/route_util.jsx");
/* harmony import */ var _user_index_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user_index_item */ "./components/users/user_index_item.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/user_actions */ "./actions/user_actions.js");
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/ui_actions */ "./actions/ui_actions.js");
/* harmony import */ var _modals_new_playlist_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modals/new_playlist_modal */ "./components/modals/new_playlist_modal.jsx");
/* harmony import */ var _navbar_browse_navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../navbar/browse_navbar */ "./components/navbar/browse_navbar.jsx");









class UserIndex extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }
  componentDidMount() {
    this.props.fetchUsers();
  }
  openModal() {
    this.setState({
      isModalOpen: true
    });
  }
  closeModal() {
    this.setState({
      isModalOpen: false
    });
  }
  render() {
    if (this.props.loading) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: "main",
        style: this.props.background
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: "index-page-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_navbar_browse_navbar__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: "music-index"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "music-index-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, this.props.users.map(user => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_user_index_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: user.id,
        user: user,
        renderButton: false
      })))))));
    }
  }
}
const mapStateToProps = state => {
  return {
    users: Object.values(state.entities.users),
    loading: state.ui.loading.global,
    background: {
      backgroundColor: "#2e263b"
    }
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch((0,_actions_user_actions__WEBPACK_IMPORTED_MODULE_4__.fetchUsers)()),
    openPlaylistForm: () => dispatch((0,_actions_ui_actions__WEBPACK_IMPORTED_MODULE_5__.openPlaylistForm)())
  };
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(UserIndex));

/***/ }),

/***/ "./components/users/user_index_item.jsx":
/*!**********************************************!*\
  !*** ./components/users/user_index_item.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");



class UserIndexItem extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const userIndexStyle = {
      borderRadius: "50%"
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "media-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "button-wrapper"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      className: "music-index-item",
      to: `/users/${this.props.user.id}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "item-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "media"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      alt: "",
      style: userIndexStyle,
      className: "media__image",
      src: this.props.user.profile_picture
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: `media__body`,
      style: userIndexStyle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "media-loaded",
      style: userIndexStyle
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, this.props.user.username))));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (UserIndexItem);

/***/ }),

/***/ "./reducers/albums_reducer.js":
/*!************************************!*\
  !*** ./reducers/albums_reducer.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/merge */ "../node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_album_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/album_actions */ "./actions/album_actions.js");


const albumsReducer = function () {
  let oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;
  let newState;
  Object.freeze(oldState);
  switch (action.type) {
    case _actions_album_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_ALBUMS:
      return action.albums;
    case _actions_album_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_ALBUM:
      return lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, oldState, {
        [action.payload.album.id]: action.payload.album
      });
    default:
      return oldState;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (albumsReducer);

/***/ }),

/***/ "./reducers/artists_reducer.js":
/*!*************************************!*\
  !*** ./reducers/artists_reducer.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/merge */ "../node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_artist_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/artist_actions */ "./actions/artist_actions.js");
/* harmony import */ var _actions_follow_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/follow_actions */ "./actions/follow_actions.js");



const artistsReducer = function () {
  let oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;
  let newState;
  Object.freeze(oldState);
  switch (action.type) {
    case _actions_artist_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_ARTISTS:
      return action.artists;
    case _actions_artist_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_ARTIST:
      return lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, oldState, {
        [action.payload.artist.id]: action.payload.artist
      });
    case _actions_follow_actions__WEBPACK_IMPORTED_MODULE_2__.RECEIVE_FOLLOW:
      if (action.payload.followable_type !== "Artist") return oldState;
      newState = lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, oldState);
      newState[action.payload.followable_id].followerIds.push(action.payload.user_id);
      return newState;
    case _actions_follow_actions__WEBPACK_IMPORTED_MODULE_2__.REMOVE_FOLLOW:
      if (action.payload.followable_type !== "Artist") return oldState;
      newState = lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, oldState);
      newState[action.payload.followable_id].followerIds = newState[action.payload.followable_id].followerIds.filter(m => m !== action.payload.user_id);
      return newState;
    default:
      return oldState;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (artistsReducer);

/***/ }),

/***/ "./reducers/dropdowns_reducer.js":
/*!***************************************!*\
  !*** ./reducers/dropdowns_reducer.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/ui_actions */ "./actions/ui_actions.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/merge */ "../node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
  songDropdown: {
    isOpen: false
  }
};
const dropdownsReducer = function () {
  let oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(oldState);
  switch (action.type) {
    case _actions_ui_actions__WEBPACK_IMPORTED_MODULE_0__.OPEN_DROPDOWN:
      return lodash_merge__WEBPACK_IMPORTED_MODULE_1___default()({}, oldState, {
        [oldState.songDropdown.isOpen]: true
      });
    case _actions_ui_actions__WEBPACK_IMPORTED_MODULE_0__.CLOSE_DROPDOWN:
      return lodash_merge__WEBPACK_IMPORTED_MODULE_1___default()({}, oldState, {
        [oldState.songDropdown.isOpen]: false
      });
    default:
      return oldState;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (dropdownsReducer);

/***/ }),

/***/ "./reducers/entities_reducer.js":
/*!**************************************!*\
  !*** ./reducers/entities_reducer.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var _playlists_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playlists_reducer */ "./reducers/playlists_reducer.js");
/* harmony import */ var _albums_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./albums_reducer */ "./reducers/albums_reducer.js");
/* harmony import */ var _artists_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./artists_reducer */ "./reducers/artists_reducer.js");
/* harmony import */ var _songs_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./songs_reducer */ "./reducers/songs_reducer.js");
/* harmony import */ var _searches_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./searches_reducer */ "./reducers/searches_reducer.js");
/* harmony import */ var _users_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users_reducer */ "./reducers/users_reducer.js");







const entitiesReducer = (0,redux__WEBPACK_IMPORTED_MODULE_6__.combineReducers)({
  playlists: _playlists_reducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  albums: _albums_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  artists: _artists_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  searches: _searches_reducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  songs: _songs_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  users: _users_reducer__WEBPACK_IMPORTED_MODULE_5__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (entitiesReducer);

/***/ }),

/***/ "./reducers/errors_reducer.js":
/*!************************************!*\
  !*** ./reducers/errors_reducer.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var _session_errors_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session_errors_reducer */ "./reducers/session_errors_reducer.js");


const errorsReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  session: _session_errors_reducer__WEBPACK_IMPORTED_MODULE_0__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (errorsReducer);

/***/ }),

/***/ "./reducers/loading_reducer.js":
/*!*************************************!*\
  !*** ./reducers/loading_reducer.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/merge */ "../node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/playlist_actions */ "./actions/playlist_actions.js");
/* harmony import */ var _actions_album_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/album_actions */ "./actions/album_actions.js");
/* harmony import */ var _actions_artist_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/artist_actions */ "./actions/artist_actions.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/user_actions */ "./actions/user_actions.js");
/* harmony import */ var _actions_song_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/song_actions */ "./actions/song_actions.js");
/* harmony import */ var _actions_loading_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/loading_actions */ "./actions/loading_actions.js");







const initialState = {
  global: false
};
const loadingReducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  switch (action.type) {
    case _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_PLAYLISTS:
    case _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_PLAYLIST:
    case _actions_album_actions__WEBPACK_IMPORTED_MODULE_2__.RECEIVE_ALBUMS:
    case _actions_album_actions__WEBPACK_IMPORTED_MODULE_2__.RECEIVE_ALBUM:
    case _actions_artist_actions__WEBPACK_IMPORTED_MODULE_3__.RECEIVE_ARTISTS:
    case _actions_artist_actions__WEBPACK_IMPORTED_MODULE_3__.RECEIVE_ARTIST:
    case _actions_song_actions__WEBPACK_IMPORTED_MODULE_5__.RECEIVE_SONGS:
    case _actions_user_actions__WEBPACK_IMPORTED_MODULE_4__.RECEIVE_USERS:
    case _actions_user_actions__WEBPACK_IMPORTED_MODULE_4__.RECEIVE_USER:
      return lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        global: false
      });
    case _actions_loading_actions__WEBPACK_IMPORTED_MODULE_6__.START_LOADING:
      return lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        global: true
      });
    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (loadingReducer);

/***/ }),

/***/ "./reducers/modals_reducer.js":
/*!************************************!*\
  !*** ./reducers/modals_reducer.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/ui_actions */ "./actions/ui_actions.js");
/* harmony import */ var _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/playlist_actions */ "./actions/playlist_actions.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/merge */ "../node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
  newPlaylistModal: {
    isOpen: false
  },
  addToPlaylistModal: {
    isOpen: false
  }
};
const modalsReducer = function () {
  let oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(oldState);
  let newState = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()({}, oldState);
  switch (action.type) {
    case _actions_ui_actions__WEBPACK_IMPORTED_MODULE_0__.OPEN_PLAYLIST_FORM:
      newState.newPlaylistModal.isOpen = true;
      return newState;
    case _actions_ui_actions__WEBPACK_IMPORTED_MODULE_0__.CLOSE_PLAYLIST_FORM:
      newState.newPlaylistModal.isOpen = false;
      return newState;
    case _actions_ui_actions__WEBPACK_IMPORTED_MODULE_0__.OPEN_ADD_TO_PLAYLIST_FORM:
      newState.addToPlaylistModal.isOpen = true;
      return newState;
    case _actions_ui_actions__WEBPACK_IMPORTED_MODULE_0__.CLOSE_ADD_TO_PLAYLIST_FORM:
      newState.addToPlaylistModal.isOpen = false;
      return newState;
    case _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_MODAL_PLAYLISTS:
      return lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()({}, oldState, {
        songToAddId: action.songToAddId
      });
    default:
      return oldState;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (modalsReducer);

/***/ }),

/***/ "./reducers/playbar_reducer.js":
/*!*************************************!*\
  !*** ./reducers/playbar_reducer.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_audio_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/audio_actions */ "./actions/audio_actions.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/merge */ "../node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
  playing: false
};
const playbarReducer = function () {
  let oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(oldState);
  switch (action.type) {
    case _actions_audio_actions__WEBPACK_IMPORTED_MODULE_0__.PLAY:
      return lodash_merge__WEBPACK_IMPORTED_MODULE_1___default()({}, oldState, {
        playing: true
      });
    case _actions_audio_actions__WEBPACK_IMPORTED_MODULE_0__.PLAY_SONG:
      let newState = lodash_merge__WEBPACK_IMPORTED_MODULE_1___default()({}, oldState);
      newState.playing = true;
      newState.currentSong = action.song;
      newState.currentSongParams = action.params;
      newState.isFirstSong = action.isFirstSong || false;
      return newState;
    case _actions_audio_actions__WEBPACK_IMPORTED_MODULE_0__.PAUSE:
      return lodash_merge__WEBPACK_IMPORTED_MODULE_1___default()({}, oldState, {
        playing: false
      });
    default:
      return oldState;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (playbarReducer);

/***/ }),

/***/ "./reducers/playlists_reducer.js":
/*!***************************************!*\
  !*** ./reducers/playlists_reducer.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/merge */ "../node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/playlist_actions */ "./actions/playlist_actions.js");
/* harmony import */ var _actions_song_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/song_actions */ "./actions/song_actions.js");



const playlistsReducer = function () {
  let oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;
  let newState;
  Object.freeze(oldState);
  switch (action.type) {
    case _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_PLAYLISTS:
      return lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, oldState, action.playlists);
    case _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_CREATED_PLAYLIST:
    case _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_PLAYLIST_WITH_TRACKLIST:
    case _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_PLAYLIST:
      return lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, oldState, {
        [action.payload.playlist.id]: action.payload.playlist
      });
    case _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_1__.REMOVE_PLAYLIST:
      newState = lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, oldState);
      delete newState[action.playlistId];
      return newState;
    case _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_MODAL_PLAYLISTS:
      return lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, oldState, action.playlists);
    case _actions_song_actions__WEBPACK_IMPORTED_MODULE_2__.RECEIVE_PLAYLIST_SONG_SAVE:
    case _actions_song_actions__WEBPACK_IMPORTED_MODULE_2__.REMOVE_PLAYLIST_SONG_SAVE:
      newState = lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, oldState);
      newState[action.payload.playlist.id] = action.payload.playlist;
      return newState;
    default:
      return oldState;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (playlistsReducer);

/***/ }),

/***/ "./reducers/root_reducer.js":
/*!**********************************!*\
  !*** ./reducers/root_reducer.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var _entities_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities_reducer */ "./reducers/entities_reducer.js");
/* harmony import */ var _ui_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui_reducer */ "./reducers/ui_reducer.js");
/* harmony import */ var _errors_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors_reducer */ "./reducers/errors_reducer.js");
/* harmony import */ var _session_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session_reducer */ "./reducers/session_reducer.js");





const rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_4__.combineReducers)({
  entities: _entities_reducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  ui: _ui_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  errors: _errors_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  session: _session_reducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/searches_reducer.js":
/*!**************************************!*\
  !*** ./reducers/searches_reducer.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/merge */ "../node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_search_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/search_actions */ "./actions/search_actions.js");


const initialState = {};
const searchesReducer = function () {
  let oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(oldState);
  let newState = lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, oldState);
  switch (action.type) {
    case _actions_search_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_SEARCH_RESULTS:
      // newState.artists = Object.keys(action.results.artists || {});
      return action.results;
    case _actions_search_actions__WEBPACK_IMPORTED_MODULE_1__.CLEAR_SEARCH_RESULTS:
      return initialState;
    default:
      return oldState;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (searchesReducer);

/***/ }),

/***/ "./reducers/selectors.js":
/*!*******************************!*\
  !*** ./reducers/selectors.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   songSelector: function() { return /* binding */ songSelector; }
/* harmony export */ });
// import values from 'lodash.values';

// export const selectAllSongs = state => {
//     const currentUser = state.session.currentUser;
//     const userPlaylists = state.session.playlists.filter(playlist => playlist.creator_id === currentUser.id);
//     const allSongs = currentUser
//     values(state.entities.songs).filter(song => userSongs)
// };

const songSelector = (songIds, songs) => {
  const selectedSongs = songs.filter(song => songIds.includes(song.id));
  if (!selectedSongs || selectedSongs.length !== songIds.length) return;
  const orderedSongs = songIds.map(songId => selectedSongs.find(song => song.id === songId));
  return orderedSongs;
};

/***/ }),

/***/ "./reducers/session_errors_reducer.js":
/*!********************************************!*\
  !*** ./reducers/session_errors_reducer.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/merge */ "../node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/session_actions */ "./actions/session_actions.js");


const sessionErrorsReducer = function () {
  let oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(oldState);
  switch (action.type) {
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_ERRORS:
      return action.errors;
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_CURRENT_USER:
      return [];
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__.CLEAR_SESSION_ERRORS:
      return [];
    default:
      return oldState;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (sessionErrorsReducer);

/***/ }),

/***/ "./reducers/session_reducer.js":
/*!*************************************!*\
  !*** ./reducers/session_reducer.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/merge */ "../node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/session_actions */ "./actions/session_actions.js");
/* harmony import */ var _actions_follow_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/follow_actions */ "./actions/follow_actions.js");
/* harmony import */ var _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/playlist_actions */ "./actions/playlist_actions.js");




const _nullUser = Object.freeze({
  currentUser: null
});
const sessionReducer = function () {
  let oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _nullUser;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  let currentUser, newState, tableized;
  Object.freeze(oldState);
  switch (action.type) {
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_CURRENT_USER:
      currentUser = action.currentUser;
      return lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, {
        currentUser
      });
    case _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_3__.RECEIVE_CREATED_PLAYLIST:
      const newId = action.payload.playlist.id;
      newState = lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, oldState);
      newState.currentUser.playlistIds.push(newId);
      return newState;
    case _actions_follow_actions__WEBPACK_IMPORTED_MODULE_2__.RECEIVE_FOLLOW:
      newState = lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, oldState);
      tableized = `${action.payload.followable_type.toLowerCase()}s`;
      newState.currentUser[`followed_${tableized}`].push(action.payload.followable_id);
      return newState;
    case _actions_follow_actions__WEBPACK_IMPORTED_MODULE_2__.REMOVE_FOLLOW:
      newState = lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, oldState);
      tableized = `${action.payload.followable_type.toLowerCase()}s`;
      newState.currentUser[`followed_${tableized}`] = newState.currentUser[`followed_${tableized}`].filter(m => m !== action.payload.followable_id);
      return newState;
    default:
      return oldState;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (sessionReducer);

/***/ }),

/***/ "./reducers/songs_reducer.js":
/*!***********************************!*\
  !*** ./reducers/songs_reducer.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/merge */ "../node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_song_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/song_actions */ "./actions/song_actions.js");
/* harmony import */ var _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/playlist_actions */ "./actions/playlist_actions.js");
/* harmony import */ var _actions_album_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/album_actions */ "./actions/album_actions.js");
/* harmony import */ var _actions_artist_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/artist_actions */ "./actions/artist_actions.js");






const songsReducer = function () {
  let oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(oldState);
  switch (action.type) {
    case _actions_song_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_SONGS:
      return lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, oldState, action.songs);
    case _actions_song_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_SONG:
      return lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, oldState, {
        [action.song.id]: action.song
      });
    case _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_2__.RECEIVE_PLAYLIST:
    case _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_2__.RECEIVE_PLAYLIST_WITH_TRACKLIST:
    case _actions_song_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_PLAYLIST_SONG_SAVE:
    case _actions_album_actions__WEBPACK_IMPORTED_MODULE_3__.RECEIVE_ALBUM:
    case _actions_album_actions__WEBPACK_IMPORTED_MODULE_3__.RECEIVE_ALBUM_WITH_TRACKLIST:
    case _actions_artist_actions__WEBPACK_IMPORTED_MODULE_4__.RECEIVE_ARTIST:
    case _actions_artist_actions__WEBPACK_IMPORTED_MODULE_4__.RECEIVE_ARTIST_WITH_TRACKLIST:
      return lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, oldState, action.payload.songs || {});
    default:
      return oldState;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (songsReducer);

/***/ }),

/***/ "./reducers/tracklist_reducer.js":
/*!***************************************!*\
  !*** ./reducers/tracklist_reducer.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/merge */ "../node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/playlist_actions */ "./actions/playlist_actions.js");
/* harmony import */ var _actions_album_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/album_actions */ "./actions/album_actions.js");
/* harmony import */ var _actions_artist_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/artist_actions */ "./actions/artist_actions.js");
/* harmony import */ var _actions_audio_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/audio_actions */ "./actions/audio_actions.js");
/* harmony import */ var _actions_song_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/song_actions */ "./actions/song_actions.js");






const tracklistReducer = function () {
  let oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(oldState);
  switch (action.type) {
    case _actions_playlist_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_PLAYLIST_WITH_TRACKLIST:
      return action.payload.playlist.songIds;
    case _actions_audio_actions__WEBPACK_IMPORTED_MODULE_4__.RECEIVE_PLAY_SONG_WITH_TRACKLIST:
      return action.tracklist;
    case _actions_song_actions__WEBPACK_IMPORTED_MODULE_5__.RECEIVE_SONGS:
      return Object.keys(action.songs).map(songId => parseInt(songId));
    case _actions_album_actions__WEBPACK_IMPORTED_MODULE_2__.RECEIVE_ALBUM_WITH_TRACKLIST:
      return action.payload.album.songIds;
    case _actions_artist_actions__WEBPACK_IMPORTED_MODULE_3__.RECEIVE_ARTIST_WITH_TRACKLIST:
      return action.payload.artist.songIds;
    default:
      return oldState;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (tracklistReducer);

/***/ }),

/***/ "./reducers/ui_reducer.js":
/*!********************************!*\
  !*** ./reducers/ui_reducer.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/merge */ "../node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loading_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading_reducer */ "./reducers/loading_reducer.js");
/* harmony import */ var _playbar_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playbar_reducer */ "./reducers/playbar_reducer.js");
/* harmony import */ var _modals_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals_reducer */ "./reducers/modals_reducer.js");
/* harmony import */ var _dropdowns_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdowns_reducer */ "./reducers/dropdowns_reducer.js");
/* harmony import */ var _tracklist_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tracklist_reducer */ "./reducers/tracklist_reducer.js");







const uiReducer = (0,redux__WEBPACK_IMPORTED_MODULE_6__.combineReducers)({
  playbar: _playbar_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  tracklist: _tracklist_reducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  loading: _loading_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  modals: _modals_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  dropdowns: _dropdowns_reducer__WEBPACK_IMPORTED_MODULE_4__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (uiReducer);

/***/ }),

/***/ "./reducers/users_reducer.js":
/*!***********************************!*\
  !*** ./reducers/users_reducer.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/merge */ "../node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/user_actions */ "./actions/user_actions.js");
/* harmony import */ var _actions_follow_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/follow_actions */ "./actions/follow_actions.js");



const usersReducer = function () {
  let oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;
  let newState;
  Object.freeze(oldState);
  switch (action.type) {
    case _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_USERS:
      return action.users;
    case _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_USER:
      return lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, oldState, {
        [action.user.id]: action.user
      });
    case _actions_follow_actions__WEBPACK_IMPORTED_MODULE_2__.RECEIVE_FOLLOW:
      if (action.payload.followable_type !== "User") return oldState;
      newState = lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, oldState);
      newState[action.payload.followable_id].followerIds.push(action.payload.user_id);
      return newState;
    case _actions_follow_actions__WEBPACK_IMPORTED_MODULE_2__.REMOVE_FOLLOW:
      if (action.payload.followable_type !== "User") return oldState;
      newState = lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, oldState);
      newState[action.payload.followable_id].followerIds = newState[action.payload.followable_id].followerIds.filter(m => m !== action.payload.user_id);
      return newState;
    default:
      return oldState;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (usersReducer);

/***/ }),

/***/ "./selectors/playlist_selectors.js":
/*!*****************************************!*\
  !*** ./selectors/playlist_selectors.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNewPlaylists: function() { return /* binding */ getNewPlaylists; },
/* harmony export */   makeGetUserPlaylists: function() { return /* binding */ makeGetUserPlaylists; }
/* harmony export */ });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "../node_modules/reselect/es/index.js");

const getPlaylists = state => state.entities.playlists;
const getCurrentUserName = state => state.session.currentUser.username;
const makeGetUserPlaylists = () => (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)([getPlaylists, getCurrentUserName], (playlists, username) => {
  const userPlaylists = Object.values(playlists);
  return userPlaylists.length > 0 ? userPlaylists.filter(playlist => playlist.creatorName === username) : null;
});
const getNewPlaylists = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)([getPlaylists, getCurrentUserName], (playlists, username) => {
  const userPlaylists = Object.values(playlists);
  return userPlaylists.length > 0 ? userPlaylists.filter(playlist => playlist.creatorName !== username) : null;
});

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "../node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers_root_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/root_reducer */ "./reducers/root_reducer.js");



const middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]];
if (true) {
  const _require = __webpack_require__(/*! redux-logger */ "../node_modules/redux-logger/dist/redux-logger.js"),
    logger = _require.logger;
  middlewares.push(logger);
}
const configureStore = function () {
  let preloadedState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(_reducers_root_reducer__WEBPACK_IMPORTED_MODULE_0__["default"], preloadedState, (0,redux__WEBPACK_IMPORTED_MODULE_2__.applyMiddleware)(...middlewares));
};
/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./util/album_api_util.js":
/*!********************************!*\
  !*** ./util/album_api_util.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAlbum: function() { return /* binding */ fetchAlbum; },
/* harmony export */   fetchAlbums: function() { return /* binding */ fetchAlbums; }
/* harmony export */ });
const fetchAlbums = shouldFetchAll => {
  return $.ajax({
    url: "api/albums",
    method: "GET",
    data: {
      shouldFetchAll: shouldFetchAll
    }
  });
};
const fetchAlbum = id => {
  return $.ajax({
    url: `api/albums/${id}`,
    method: "GET"
  });
};

/***/ }),

/***/ "./util/artist_api_util.js":
/*!*********************************!*\
  !*** ./util/artist_api_util.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchArtist: function() { return /* binding */ fetchArtist; },
/* harmony export */   fetchArtists: function() { return /* binding */ fetchArtists; }
/* harmony export */ });
const fetchArtists = shouldFetchAll => {
  return $.ajax({
    url: "api/artists",
    method: "GET",
    data: {
      shouldFetchAll: shouldFetchAll
    }
  });
};
const fetchArtist = id => {
  return $.ajax({
    url: `api/artists/${id}`,
    method: "GET"
  });
};

/***/ }),

/***/ "./util/follow_api_util.js":
/*!*********************************!*\
  !*** ./util/follow_api_util.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   follow: function() { return /* binding */ follow; },
/* harmony export */   unfollow: function() { return /* binding */ unfollow; }
/* harmony export */ });
const follow = (followableType, followableId) => {
  const followableString = `${followableType.toLowerCase()}s`;
  return $.ajax({
    url: `api/${followableString}/${followableId}/follow`,
    method: "POST",
    data: {
      followable_type: followableType
    }
  });
};
const unfollow = (followableType, followableId) => {
  const followableString = `${followableType.toLowerCase()}s`;
  return $.ajax({
    url: `api/${followableString}/${followableId}/unfollow`,
    method: "DELETE",
    data: {
      followable_type: followableType
    }
  });
};

/***/ }),

/***/ "./util/playlist_api_util.js":
/*!***********************************!*\
  !*** ./util/playlist_api_util.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPlaylist: function() { return /* binding */ createPlaylist; },
/* harmony export */   deletePlaylist: function() { return /* binding */ deletePlaylist; },
/* harmony export */   fetchPlaylist: function() { return /* binding */ fetchPlaylist; },
/* harmony export */   fetchPlaylists: function() { return /* binding */ fetchPlaylists; },
/* harmony export */   updatePlaylist: function() { return /* binding */ updatePlaylist; }
/* harmony export */ });
const fetchPlaylists = shouldFetchAll => {
  return $.ajax({
    url: "api/playlists",
    method: "GET",
    data: {
      shouldFetchAll: shouldFetchAll
    }
  });
};
const fetchPlaylist = id => {
  return $.ajax({
    url: `api/playlists/${id}`,
    method: "GET"
  });
};
const createPlaylist = playlist => {
  return $.ajax({
    url: `api/playlists`,
    method: "POST",
    data: {
      playlist
    }
  });
};
const updatePlaylist = playlist => {
  return $.ajax({
    url: `api/playlists/${playlist.id}`,
    method: "PATCH",
    data: {
      playlist
    }
  });
};
const deletePlaylist = playlistId => {
  return $.ajax({
    url: `api/playlists/${playlistId}`,
    method: "DELETE"
  });
};

/***/ }),

/***/ "./util/route_util.jsx":
/*!*****************************!*\
  !*** ./util/route_util.jsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthRoute: function() { return /* binding */ AuthRoute; },
/* harmony export */   AutoRedirectRoute: function() { return /* binding */ AutoRedirectRoute; },
/* harmony export */   ProtectedRoute: function() { return /* binding */ ProtectedRoute; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router/esm/react-router.js");



const Auth = _ref => {
  let Component = _ref.component,
    path = _ref.path,
    loggedIn = _ref.loggedIn,
    exact = _ref.exact;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
    path: path,
    exact: exact,
    render: props => !loggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, props) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Redirect, {
      to: "/"
    })
  });
};
const Protected = _ref2 => {
  let Component = _ref2.component,
    path = _ref2.path,
    loggedIn = _ref2.loggedIn,
    exact = _ref2.exact;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
    path: path,
    exact: exact,
    render: props => loggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, props) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Redirect, {
      to: "/"
    })
  });
};
const AutoRedirect = _ref3 => {
  let Component = _ref3.component,
    path = _ref3.path,
    loggedIn = _ref3.loggedIn,
    exact = _ref3.exact;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
    path: path,
    exact: exact,
    render: props => loggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Redirect, {
      to: "/browse"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, props)
  });
};
const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser && state.session.currentUser !== null)
  };
};
const AuthRoute = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, null)(Auth));
const ProtectedRoute = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, null)(Protected));
const AutoRedirectRoute = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, null)(AutoRedirect));

/***/ }),

/***/ "./util/search_api_util.js":
/*!*********************************!*\
  !*** ./util/search_api_util.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchSearchResults: function() { return /* binding */ fetchSearchResults; }
/* harmony export */ });
const fetchSearchResults = query => {
  return $.ajax({
    url: `api/searches?query=${query}`,
    method: "GET"
  });
};

/***/ }),

/***/ "./util/session_api_util.js":
/*!**********************************!*\
  !*** ./util/session_api_util.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   login: function() { return /* binding */ login; },
/* harmony export */   logout: function() { return /* binding */ logout; },
/* harmony export */   signup: function() { return /* binding */ signup; }
/* harmony export */ });
const signup = user => {
  return $.ajax({
    url: "/api/users",
    method: "POST",
    data: {
      user
    }
  });
};
const login = user => {
  return $.ajax({
    url: "/api/session",
    method: "POST",
    data: {
      user
    }
  });
};
const logout = () => {
  return $.ajax({
    url: "/api/session",
    method: "DELETE"
  });
};

/***/ }),

/***/ "./util/song_api_util.jsx":
/*!********************************!*\
  !*** ./util/song_api_util.jsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchSong: function() { return /* binding */ fetchSong; },
/* harmony export */   fetchSongs: function() { return /* binding */ fetchSongs; },
/* harmony export */   removeSongFromPlaylist: function() { return /* binding */ removeSongFromPlaylist; },
/* harmony export */   saveSongToPlaylist: function() { return /* binding */ saveSongToPlaylist; }
/* harmony export */ });
const fetchSongs = () => {
  return $.ajax({
    url: "api/songs",
    method: "GET"
  });
};
const fetchSong = id => {
  return $.ajax({
    url: `api/songs/${id}`,
    method: "GET"
  });
};
const saveSongToPlaylist = (songId, playlistId) => $.ajax({
  method: "POST",
  url: `api/playlists/${playlistId}/songs`,
  data: {
    songId
  }
});
const removeSongFromPlaylist = (songId, playlistId) => $.ajax({
  method: "DELETE",
  url: `api/playlists/${playlistId}/songs`,
  data: {
    songId
  }
});

/***/ }),

/***/ "./util/user_api_util.js":
/*!*******************************!*\
  !*** ./util/user_api_util.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchUser: function() { return /* binding */ fetchUser; },
/* harmony export */   fetchUsers: function() { return /* binding */ fetchUsers; }
/* harmony export */ });
const fetchUsers = shouldFetchAll => {
  return $.ajax({
    url: "api/users",
    method: "GET",
    data: {
      shouldFetchAll: shouldFetchAll
    }
  });
};
const fetchUser = id => {
  return $.ajax({
    url: `api/users/${id}`,
    method: "GET"
  });
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		// The chunk loading function for additional chunks
/******/ 		// Since all referenced chunks are already included
/******/ 		// in this file, this function is empty here.
/******/ 		__webpack_require__.e = function() { return Promise.resolve(); };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./bop.jsx"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map