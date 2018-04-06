class CreateArtists < ActiveRecord::Migration[5.1]
  def change
    create_table :artists do |t|
      t.string :name, null: false
      t.string :artist_artwork_url, null: false
      t.string :background_artwork_url
      t.integer :genre_id, null: false
      t.text :about

      t.timestamps
    end

      add_index :artists, :genre_id
  end
end
