# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :email, null: false, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :profile_picture, null: false, default: 'https://s3.us-east-2.amazonaws.com/bop-images/profile_pictures/default_avatar.png'

      t.timestamps
    end
    add_index :users, :username
    add_index :users, :email
    add_index :users, :session_token
  end
end
