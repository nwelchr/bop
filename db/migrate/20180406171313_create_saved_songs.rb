class CreateSavedSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :saved_songs do |t|
      t.integer :playlist_id, null: false
      t.integer :song_id, null: false

      t.timestamps
    end
  end
end
