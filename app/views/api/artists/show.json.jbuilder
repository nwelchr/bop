json.partial! 'api/artists/artist', artist: @artist

json.songs do
    json.array! @artist.songs.shuffle.take(5) do |song|
        json.partial! 'api/songs/song', song: song
    end
end