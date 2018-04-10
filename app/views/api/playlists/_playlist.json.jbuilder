json.extract! playlist, :id, :name, :creator_id
json.song_ids playlist.song_ids

# playlist.songs.each do |song|
#     song.id
# end

# json.songs do
#     json.array! @playlist.songs.collect { |song| song.id }
# end

if playlist.songs.length > 0
    json.extract! playlist.songs.sample.album, :album_cover_url
else
    json.album_cover_url "https://s3.us-east-2.amazonaws.com/bop-images/playlist_pictures/default_playlist_cover"
end