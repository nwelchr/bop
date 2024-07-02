# frozen_string_literal: true

class CreateFollows < ActiveRecord::Migration[5.1]
  def change
    create_table :follows do |t|
      t.integer :user_id, null: false
      t.references :followable, polymorphic: true, index: true

      t.timestamps
    end

    add_index :follows, %i[user_id followable_id followable_type], unique: true
  end
end
