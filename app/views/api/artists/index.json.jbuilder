@artists.each do |artist|
    json.set! artist.id do
        json.partial! 'api/artists/artist', artist: artist
    json.songIds artist.songs.sort_by{ |song| song.album.year }.reverse.take(5).map{ |song| song.id }
    end
end