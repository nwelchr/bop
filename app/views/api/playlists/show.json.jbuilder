json.partial! 'api/playlists/playlist', playlist: @playlist

#extract album cover from first song for testing
json.extract! @playlist.songs.first.album, :album_cover_url

json.songs do
    json.array! @playlist.songs do |song|
        json.partial! 'api/songs/song', song: song
    end
end