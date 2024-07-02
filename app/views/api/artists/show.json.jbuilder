# frozen_string_literal: true

json.artist do
  json.partial! 'api/artists/artist', artist: @artist

  json.singles do
    json.array!(@artist.singles.sort_by(&:year)) do |single|
      json.partial! 'api/albums/album', album: single
    end
  end

  json.albums do
    json.array!(@artist.only_albums.sort_by(&:year)) do |album|
      json.partial! 'api/albums/album', album:
    end
  end
end

if @artist.songs.length.positive?
  json.songs do
    @artist.songs.reverse.sort_by { |song| song.album.year }.take(5).each do |song|
      json.set! song.id do
        json.partial! 'api/songs/song', song:
      end
    end
  end
end
