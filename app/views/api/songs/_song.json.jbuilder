# frozen_string_literal: true

json.extract! song, :id, :title, :album_id, :ord, :mp3_url
json.artist_id song.artist.id
json.artist song.artist.name
json.album song.album.title
json.album_cover_url song.album.album_cover_url

# json.set! :artist do
#     json.extract! song.artist, :id, :name
# end
# json.set! :album do
#     json.extract! song.album, :id, :title
# end
