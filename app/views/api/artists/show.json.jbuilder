json.partial! 'api/artists/artist', artist: @artist

json.songs do
    json.array! @artist.songs.shuffle.take(5) do |song|
        json.partial! 'api/songs/song', song: song
    end
end

json.singles do
    json.array! @artist.singles.sort_by{ |single| single.year } do |single|
        json.partial! 'api/albums/album', album: single
    end
end

json.albums do
    json.array! @artist.only_albums.sort_by{ |album| album.year } do |album|
        json.partial! 'api/albums/album', album: album
    end
end