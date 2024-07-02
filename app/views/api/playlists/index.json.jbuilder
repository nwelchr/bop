# frozen_string_literal: true

@playlists.each do |playlist|
  json.set! playlist.id do
    json.partial! 'api/playlists/playlist', playlist:
  end
end
