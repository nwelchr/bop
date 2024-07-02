# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2018_04_12_061254) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.string "title", null: false
    t.integer "year", null: false
    t.integer "artist_id", null: false
    t.string "album_type", default: "Album"
    t.string "album_cover_url", null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["artist_id"], name: "index_albums_on_artist_id"
  end

  create_table "artists", force: :cascade do |t|
    t.string "name", null: false
    t.string "artist_artwork_url", null: false
    t.string "background_artwork_url"
    t.integer "genre_id", null: false
    t.text "about"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["genre_id"], name: "index_artists_on_genre_id"
  end

  create_table "follows", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "followable_type"
    t.bigint "followable_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["followable_type", "followable_id"], name: "index_follows_on_followable_type_and_followable_id"
    t.index ["user_id", "followable_id", "followable_type"], name: "index_follows_on_user_id_and_followable_id_and_followable_type", unique: true
  end

  create_table "playlists", force: :cascade do |t|
    t.string "name", default: "New Playlist", null: false
    t.integer "creator_id", null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["creator_id"], name: "index_playlists_on_creator_id"
  end

  create_table "saved_songs", force: :cascade do |t|
    t.integer "playlist_id", null: false
    t.integer "song_id", null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "songs", force: :cascade do |t|
    t.string "title", null: false
    t.integer "album_id", null: false
    t.integer "ord", null: false
    t.string "mp3_url", null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["album_id"], name: "index_songs_on_album_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "profile_picture", default: "https://s3.us-east-2.amazonaws.com/bop-images/profile_pictures/default_avatar.png", null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["email"], name: "index_users_on_email"
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["username"], name: "index_users_on_username"
  end

end
