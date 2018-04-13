# == Schema Information
#
# Table name: follows
#
#  id              :integer          not null, primary key
#  user_id         :integer          not null
#  followable_type :string
#  followable_id   :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Follow < ApplicationRecord

    validates :followable_id, :followable_type, :user, presence: true
    validates :user_id, uniqueness: { scope: [:followable_id, :followable_type] }

    validate :user_cannot_follow_own_playlist
    validate :user_cannot_follow_self

    belongs_to :followable, polymorphic: true 
    belongs_to :user

    def user_cannot_follow_own_playlist
        if user_is_playlist_creator
            errors.add(:user, "cannot follow own playlist")
        end
    end

    def user_cannot_follow_self
        if user_is_self
            errors.add(:user, "can't follow themself")
        end
    end

    private

    def user_is_playlist_creator
        self.followable_type == 'Playlist' && Playlist.find(self.followable_id).creator_id == self.user_id
    end

    def user_is_self
        self.user_id == self.followable_id && self.followable_type == 'User'
    end
    
end
