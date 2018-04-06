json.partial! 'api/playlists/playlist', playlist: @playlist

json.array! songs do
    @playlist.songs.each do |song|
        json.partial! 'api/songs/song', song: song
    end
end