json.partial! 'api/albums/album', album: @album

if @album.songs.length > 0
    json.songs do
        json.array! @album.songs do |song|
            json.partial! 'api/songs/song', song: song
        end
    end
end