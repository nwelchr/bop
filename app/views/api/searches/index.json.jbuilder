# frozen_string_literal: true

json.query params[:query]

json.artists do
  json.array! @artists do |artist|
    json.partial!('api/artists/artist', artist:)
    json.songIds(artist.songs.sort_by { |song| song.album.year }.reverse.take(5).map(&:id))
  end
end

json.albums do
  json.array! @albums do |album|
    json.partial! 'api/albums/album', album:
  end
end

json.songs do
  json.array! @songs do |song|
    json.partial! 'api/songs/song', song:
  end
end

json.playlists do
  json.array! @playlists do |playlist|
    json.partial! 'api/playlists/playlist', playlist:
  end
end

json.users do
  json.array! @users do |user|
    json.partial! 'api/users/user', user:
  end
end
