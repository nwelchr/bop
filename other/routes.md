# Routes

## Frontend Routes

* `/login` - log in page
* `/signup` - sign up page
* `/browse/featured` - home page rendering featured playlists component
* `/browse/genres` - home page rendering genres index component
* `/collection/playlists` - index of playlists in user's collection
* `/collection/playlists/new` - create a new playlist page
* `/collection/tracks` - index of tracks in user's collection
* `/collection/albums` - index of albums in user's collection
* `/collection/artists` - index of artists in user's collection
  * Note: Albums and artists will be retrieved from the tracks. All tracks will have an album and artist id, and the albums and artists index pages will be retrieved through model-level associations with tracks.
* `/artist/:artistId` - artist show page
* `/album/:albumId` - album show page
* `/users/:userId` - user profile page
* `/users/:userId/playlists/:playlistId` - playlist show page for particular user
* `/search` - search index
* `/search/results/query` - results index from query

## HTML

* `GET` / `StaticPagesController#root`

## API Endpoints

### `users`

* `GET /api/user/:id` - returns user information
* `POST /api/users` - sign up

### `session`

* `POST /api/session` - log in
* `DELETE /api/session` - log out

### `tracks`

* `GET /api/tracks` - returns all tracks
* `GET /api/track/:track_id` - returns specific track
  genres
* `GET /api/genres` - returns all genres
* `GET /api/genres/:genre_id` - returns a specific genre

(Note: Albums will be accessed through tracks.)

### `playlists`

* `GET /api/users/:user_id/playlists` - returns all playlists
* `GET /api/users/:user_id/playlists/:playlist_id` - returns specific playlist
* `POST /api/users/:user_id/playlists` - create playlist
* `PATCH /api/users/:user_id/playlists/:playlist_id` - edit playlist
* `DELETE /api/users/user_id/playlists/:playlist_id` - remove playlist

### `albums`

* `GET /api/albums` - returns all albums
* `GET /api/albums/:album_id` - returns specific albums
