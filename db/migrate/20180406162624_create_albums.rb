# frozen_string_literal: true

class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.integer :year, null: false
      t.integer :artist_id, null: false
      t.string :album_type, default: 'Album'
      t.string :album_cover_url, null: false

      t.timestamps
    end

    add_index :albums, :artist_id
  end
end
