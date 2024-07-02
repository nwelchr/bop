# frozen_string_literal: true

@artists.each do |artist|
  json.set! artist.id do
    json.partial! 'api/artists/artist', artist:
  end
end
