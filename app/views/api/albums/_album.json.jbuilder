json.extract! album, :id, :title, :year, :artist_id, :album_type
json.album_cover_url asset_path(album.album_cover_url)
json.songIds album.song_ids
json.artistName album.artist.name