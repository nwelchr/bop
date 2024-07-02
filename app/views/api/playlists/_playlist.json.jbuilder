# frozen_string_literal: true

json.extract! playlist, :id, :name, :creator_id

song_ids = playlist.saved_songs.sort_by(&:updated_at).collect(&:song_id)

json.songIds do
  json.array! song_ids
end
json.creatorName playlist.creator.username

# playlist.songs.each do |song|
#     song.id
# end

# json.songs do
#     json.array! @playlist.songs.collect { |song| song.id }
# end
album_cover_urls = song_ids.map { |song_id| Song.find(song_id).album.album_cover_url }.uniq
if album_cover_urls.length >= 4
  json.album_cover_url album_cover_urls.take(4)
elsif playlist.songs.length.positive?
  json.album_cover_url album_cover_urls.first
else
  json.album_cover_url 'https://s3.us-east-2.amazonaws.com/bop-images/playlist_pictures/default_playlist_cover'
end
