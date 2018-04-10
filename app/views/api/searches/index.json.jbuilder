json.artists do
    json.array! @artists do |artist|
        json.extract! artist, :id, :name, :genre_id, :about
        json.artist_artwork_url asset_path(artist.artist_artwork_url)
        json.background_artwork_url asset_path(artist.background_artwork_url)
    end
end

json.albums do
    json.array! @albums do |album|
        json.extract! album, :id, :title, :year, :artist_id, :album_type
        json.album_cover_url asset_path(album.album_cover_url)
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