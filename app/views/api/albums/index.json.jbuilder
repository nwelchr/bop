# frozen_string_literal: true

@albums.each do |album|
  json.set! album.id do
    json.partial! 'api/albums/album', album:
  end
end
