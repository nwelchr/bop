json.extract! playlist, :id, :name, :creator_id

if playlist.songs.length > 0
    json.extract! playlist.songs.sample.album, :album_cover_url
else
    json.album_cover_url "https://s3.us-east-2.amazonaws.com/bop-images/playlist_pictures/default_playlist_cover"
end