@playlists.each do |playlist|
    json.set! playlist.id do
        json.partial! 'api/playlists/playlist', playlist: playlist
        #extract album cover from first song for testing
        json.extract! playlist.songs.first.album, :album_cover_url
    end
end