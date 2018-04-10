json.playlist do 
    json.partial! 'api/playlists/playlist', playlist: @playlist
end

if @playlist.songs.length > 0
    json.songs do
        json.array! @playlist.songs do |song|
            json.partial! 'api/songs/song', song: song
        end
    end
end