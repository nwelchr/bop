# frozen_string_literal: true

json.extract! artist, :id, :name, :genre_id, :about
json.artist_artwork_url asset_path(artist.artist_artwork_url)
json.background_artwork_url asset_path(artist.background_artwork_url)

json.followerIds artist.follower_ids

json.songIds artist.songs.reverse.sort_by { |song| song.album.year }.take(5).pluck(:id) if artist.songs.length.positive?
