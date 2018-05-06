json.extract! playlist, :id, :name, :creator_id
json.songIds playlist.songs.pluck(:id)
json.creatorName playlist.creator.username

# playlist.songs.each do |song|
#     song.id
# end

# json.songs do
#     json.array! @playlist.songs.collect { |song| song.id }
# end

album_cover_urls = playlist.songs.map{ |song| song.album.album_cover_url }.uniq
if album_cover_urls.length > 4
    json.album_cover_url album_cover_urls.take(4)
elsif playlist.songs.length > 0
    json.extract! playlist.songs.first.album, :album_cover_url
else
    json.album_cover_url "https://s3.us-east-2.amazonaws.com/bop-images/playlist_pictures/default_playlist_cover"
end

