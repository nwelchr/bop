# == Schema Information
#
# Table name: artists
#
#  id                     :integer          not null, primary key
#  name                   :string           not null
#  artist_artwork_url     :string           not null
#  background_artwork_url :string
#  genre_id               :integer          not null
#  about                  :text
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#

class Artist < ApplicationRecord

    include Followable

    validates :name, :artist_artwork_url, :genre_id, presence: true

    # belongs_to :genre
    has_many :albums

    has_many :songs,
        through: :albums

    def singles
        self.albums.where(album_type: 'Single')
    end
    
    def only_albums
        self.albums.where(album_type: 'Album')
    end
end
