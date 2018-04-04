# Database Schema

## albums
column name     | data type | details
:---------------|:---------:|-----------------------:
id              | integer   | not null, primary key
title           | string    | not null
year            | string    | not null
album_cover_url | string    | not null
created_at      | datetime  | not null
updated_at      | datetime  | not null

## artists
column name     | data type | details
:---------------|:---------:|-----------------------:
id              | integer   | not null, primary key
name            | string    | not null
artist_artwork_url | string | not null
background_artwork_url | string |
genre_id        | integer   | not null, foreign key
about           | text      |
created_at      | datetime  | not null
updated_at      | datetime  | not null

## follows
column name     | data type | details
:---------------|:---------:|-----------------------:
id              | integer   | not null, primary key
followable_type | string    | not null
followable_id   | integer   | not null
created_at      | datetime  | not null
updated_at      | datetime  | not null

## genres
column name     | data type | details
:---------------|:---------:|-----------------------:
id              | integer   | not null, primary key
genre_artwork_url | string  | not null, indexed
created_at      | datetime  | not null
updated_at      | datetime  | not null

## playlists
column name     | data type | details
:---------------|:---------:|-----------------------:
id              | integer   | not null, primary key
name            | string    | default: "New Playlist"
creator_id      | integer   | not null, indexed, foreign key
created_at      | datetime  | not null
updated_at      | datetime  | not null

## saved_songs
column name     | data type | details
:---------------|:---------:|-----------------------:
id              | integer   | not null, primary key
savable_type    | string    | not null
savable_id      | integer   | not null
created_at      | datetime  | not null
updated_at      | datetime  | not null

## songs
column name     | data type | details
:---------------|:---------:|-----------------------:
id              | integer   | not null, primary key
title           | string    | not null
artist_id       | integer   | not null, indexed, foreign key
album_id        | integer   | not null, indexed, foreign key
year            | string    | not null
ord             | integer   | not null
mp3_url         | string    | not null
created_at      | datetime  | not null
updated_at      | datetime  | not null

## users
column name     | data type | details
:---------------|:---------:|-----------------------:
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | strings   | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
profile_picture  | blob/string? | default: 'default_avatar.png'
created_at      | datetime  | not null
updated_at      | datetime  | not null


Things to discuss:
- Hosting songs with Amazon Web Services (already have an account!) instead of storing them in the database/my project file?
- Photos: Easier to store `image_url` as a `string` that can be interpolated as the value of an `src` attribute, or to store it as a `blob` in the database? (Same with `songs` and `song_url`.)
- For searching, I need to search by artists, albums, songs, and playlists. Is there a particular way I should create my database (maybe adding extra information such as `album_name` in tracks so I don't even need to search on the `albums` model for a search to retrieve albums), or perhaps by placing indexes artist/album/song/playlist names?
- Should I be requiring some sort of `duration` column in my `songs` table or should I calculate that from the content of the mp3 itself (in my `models/song.rb`)?
- Genres: I currently only have a `genre_id` on artists. Should I have a `genre_id` on artists, albums, and tracks? So we might need some sort of `genreable` association? And should an artist/album/track be allowed to have more than one genre? In which case they might need `genre_taggings`?
- I can follow a user and a playlist. So I need a polymorphic association on `followable`? Where the `followable_type` would be `playlist` or `user` and the `followable_id` might be the id of that `playlist` or `user`? Do I then need to add some indexes on `followable_type` or `followable_id`... Or add uniqueness of a `followable_type` and `followable_id` under a given user? Something like this in my `follows.rb` model file:
  - `validates :user, uniqueness: { scope: [:followable_id, followable_type]}`
  - How would you do it on a db level?
- Is this the same for `saved_songs`, since a song can be saved into someone's collection (thus, `user_id` is needed), or into someone's playlist (thus, `playlist_id` is needed)?
- Playlist `playlist_artwork_url`: Not actually taken from the db, but generated dynamically from the contents of the playlist. If there's 1-4 songs from different albums in the playlist, there's an image that is (randomly?) chosen from the song's album's `album_artwork_url` image file. But then when there's 4+ songs that have different albums, the playlist's image is a grid of four (randomly?) chosen album covers whose songs are in the playlist.
- Should individual songs have a year, or should the album have a year and the songs can get that information from an association?
- Would we want to save a user's `searches` as a table? Could it potentially make retrieving a given search faster if a user already made a search? If you do it from the frontend, you would just need to make Ajax requests for albums, tracks, playlists, and artists. If you do it in the backend in a `searches_controller`, you could have an `:index` action that makes those queries for you?
- A user should be able to upload their own profile image. How would it then get saved in the database? Would it need to be saved as a `blob`?
- How could I potentially deal with a song being a single? Since they display exactly like albums, would I make it an album with an `album_type` of `single` vs. `album`?
