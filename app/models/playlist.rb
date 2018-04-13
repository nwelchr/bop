# == Schema Information
#
# Table name: playlists
#
#  id         :integer          not null, primary key
#  name       :string           default("New Playlist"), not null
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord

    include Followable

    # module Followable
    #   extend ActiveSupport::Concern
    
    #   included do
    #     has_many :follows, as: :followable, dependent: :destroy
    #     has_many :followers, through: :follows, source: :user
    #   end
    # end

    belongs_to :creator,
        class_name: :User,
        foreign_key: :creator_id

    has_many :saved_songs

    has_many :songs,
        through: :saved_songs,
        source: :song
end
