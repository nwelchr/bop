json.playlist do 
    json.partial! 'api/playlists/playlist', playlist: @playlist
end

if @playlist.songs.length > 0
    json.songs do
        #access songs by most recently saved in frontend, leverage association
        @playlist.saved_songs.sort_by{|saved_song| saved_song.updated_at}.each do |saved_song|
            json.set! saved_song.song_id do
                json.partial! 'api/songs/song', song: Song.find(saved_song.song_id)
            end
        end
    end
end