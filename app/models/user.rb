class User < ApplicationRecord

  attr_reader :password

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: { case_sensitive: true }
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token!

  has_many :playlists,
    class_name: :Playlist,
    foreign_key: :creator_id

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
