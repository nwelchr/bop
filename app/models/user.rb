# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  profile_picture :string           default("https://s3.us-east-2.amazonaws.com/bop-images/profile_pictures/default_avatar.png"), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

  include Followable

  attr_reader :password

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: { case_sensitive: true }
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token!

  has_many :playlists,
    class_name: :Playlist,
    foreign_key: :creator_id

  # module Followable
  #   extend ActiveSupport::Concern
  
  #   included do
  #     has_many :follows, as: :followable, dependent: :destroy
  #     has_many :followers, through: :follows, source: :user
  #   end
  # end
  
  has_many :followings, foreign_key: :user_id, class_name: 'Follow'
  has_many :followed_users, through: :followings, source: :followable, source_type: 'User'
  has_many :followed_playlists, through: :followings, source: :followable, source_type: 'Playlist'
  has_many :followed_artists, through: :followings, source: :followable, source_type: 'Artist'

  def self.find_by_credentials(login_credential, password, login_type)
    if login_type == "username"
      # user = User.where("lower(login_credential) = ?", username.downcase).first
      user = User.find_by_username(login_credential)
    elsif login_type == "email"
      user = User.find_by_email(login_credential)
    end
    user && user.valid_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token!
    self.session_token ||= new_session_token
  end

  def reset_session_token!
    self.session_token = new_session_token
    self.save!
    self.session_token
  end

  private

  def new_session_token
    SecureRandom.urlsafe_base64
  end

end
