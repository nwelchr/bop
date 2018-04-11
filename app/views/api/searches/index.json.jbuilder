json.artists do
    json.array! @artists do |artist|
        json.partial! 'api/artists/artist', artist: artist
    end
end

json.albums do
    json.array! @albums do |album|
        json.partial! 'api/albums/album', album: album
    end
end

json.songs do
    json.array! @songs do |song|
        json.partial! 'api/songs/song', song: song
    end
end

json.playlists do
    json.array! @playlists do |playlist|
        json.partial! 'api/playlists/playlist', playlist: playlist
    end
end

json.users do
    json.array! @users do |user|
        json.partial! 'api/users/user', user: user
    end
end