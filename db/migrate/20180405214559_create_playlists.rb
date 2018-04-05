class CreatePlaylists < ActiveRecord::Migration[5.1]
  def change
    create_table :playlists do |t|
      t.string :name, null: false, default: 'New Playlist'
      t.integer :creator_id, null: false

      t.timestamps
    end
  end
end
