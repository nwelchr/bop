json.extract! artist, :id, :name, :genre_id, :about
json.song_ids artist.song_ids
json.artist_artwork_url asset_path(artist.artist_artwork_url)
json.background_artwork_url asset_path(artist.background_artwork_url)