json.playlist do 
    json.partial! 'api/playlists/playlist', playlist: @playlist
end

if @playlist.songs.length > 0
    json.songs do
        @playlist.songs.each do |song|
            json.set! song.id do
                json.partial! 'api/songs/song', song: song
            end
        end
    end
end