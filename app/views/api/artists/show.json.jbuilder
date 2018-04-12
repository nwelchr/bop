json.partial! 'api/artists/artist', artist: @artist

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

json.songs @artist.songs.sort_by{ |song| song.album.year }.reverse.take(5).each do |song|
    json.partial! 'api/songs/song', song: song
end