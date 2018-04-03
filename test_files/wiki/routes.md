# Routes

## Frontend Routes

* `/login` - log in page
* `/signup` - sign up page
* `/browse/featured` - home page rendering featured playlists, etc. component
* `/browse/genres` - home page rendering genres index component
* `/collection/playlists` - index of playlists in user's collection
* `/collection/playlists/new` - create a new playlist page (Technically, the Spotify website doesn't have a route, it's just a modal that loads...)
* `/collection/songs` - index of songs in user's collection
* `/collection/albums` - index of albums in user's collection
* `/collection/artists` - index of artists in user's collection
* `/artist/:artistId` - artist show page
* `/album/:albumId` - album show page
* `/user/:userId` - user profile page
* `/playlist/:playlistId` - playlist show page for particular user
* `/search` - search index
* `/search/results/query` - search results index (filtered by query)

## HTML

* `GET` / `StaticPagesController#root`

## API Endpoints

### `users`

* `GET /api/user/:userId` - returns user information
* `POST /api/users` - sign up

### `session`

* `POST /api/session` - log in
* `DELETE /api/session` - log out

### `songs`

* `GET /api/songs` - returns all songs
* `GET /api/song/:songId` - returns specific track
  genres
* `GET /api/genres` - returns all genres
* `GET /api/genre/:genre_id` - returns a specific genre

### `playlists`

* `GET /api/user/:userId/playlists` - returns all playlists
* `GET /api/user/:userId/playlists/:playlistId` - returns specific playlist
* `POST /api/user/:userId/playlists` - create playlist
* `PATCH /api/user/:userId/playlists/:playlistId` - edit playlist
* `DELETE /api/user/userId/playlists/:playlistId` - remove playlist

### `albums`

* `GET /api/albums` - returns all albums
* `GET /api/album/:albumId` - returns specific albums

Things to discuss:
- Playlists: Should be `user/:userId/playlists`? Current user would normally have `collection/playlists`, would it be better to change it to `users/${current_user.id}/playlists`? Maybe under the hood it could be `users/${current_user.id}/playlists` but if it's the current user's playlists it could be `collection/playlists`?
- Cutting the number of queries down: it might be better if albums and artists can be retrieved from the songs. All songs will have an `albumId` and `artistId`, and the albums and artists index pages will be retrieved through model-level associations with songs. (I guess it depends on how exactly you navigate to the album or artist: if you do it from a `SongIndexItem` you can do it through the association. If you do it through a `PlaylistsIndexItem` or `AlbumsIndexItem` I guess you dispatch a `fetchPlaylist` or `fetchAlbum` action?).
