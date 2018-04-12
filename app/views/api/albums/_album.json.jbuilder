json.extract! album, :id, :title, :year, :artist_id, :album_type
json.album_cover_url asset_path(album.album_cover_url)
json.song_ids album.song_ids