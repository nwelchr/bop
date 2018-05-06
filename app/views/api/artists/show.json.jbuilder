json.artist do
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
end

if @artist.songs.length > 0
    json.songs do
        @artist.songs.sort_by{ |song| song.album.year }.reverse.take(5).each do |song|
            json.set! song.id do
                json.partial! 'api/songs/song', song: song
            end
        end
    end
end