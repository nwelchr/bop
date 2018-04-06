# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Album.destroy_all
Artist.destroy_all
Playlist.destroy_all
SavedSong.destroy_all
Song.destroy_all
User.destroy_all

demo = User.create!(
    username: 'Demo User',
    email: 'demo@demo.com',
    password: 'password'
);

nick = User.create!(
    username: 'Nick Welch',
    email: 'nwelch@gmail.com',
    password: 'password',
    profile_picture: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c17.0.64.64/p64x64/21751274_10155715933012733_239784575756338336_n.jpg?oh=2aeb2d164b3bd8ff56afe1331657053f&oe=5B38CB97'
);

GENRES = ['pop', 'rock']

azealia = Artist.create!(
    name: 'Azealia Banks',
    artist_artwork_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Artist+Artwork/azealia_banks.jpg',
    background_artwork_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Artist+Artwork/azealia_background.jpg',
    genre_id: 1,
    about: 'Azealia\'s about'
)

broke_with_expensive_taste = Album.create!(
    title: 'Broke with Expensive Taste',
    year: 2014,
    artist_id: azealia.id,
    album_type: 'Album',
    album_cover_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Azealia+Banks+-+Broke+With+Expensive+Taste+(2014)/album_cover.jpeg' 
)

Song.create!(
    title: 'Idle Delilah',
    album_id: broke_with_expensive_taste.id,
    ord: 1,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Azealia+Banks+-+Broke+With+Expensive+Taste+(2014)/01.+Idle+Delilafh.mp3'
)

Song.create!(
    title: 'Gimme a Chance',
    album_id: broke_with_expensive_taste.id,
    ord: 2,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Azealia+Banks+-+Broke+With+Expensive+Taste+(2014)/02.+Gimme+a+Chance.mp3'
)

Song.create!(
    title: 'Desperado',
    album_id: broke_with_expensive_taste.id,
    ord: 3,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Azealia+Banks+-+Broke+With+Expensive+Taste+(2014)/03.+Desperado.mp3'
)

Song.create!(
    title: 'JFK',
    album_id: broke_with_expensive_taste.id,
    ord: 4,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Azealia+Banks+-+Broke+With+Expensive+Taste+(2014)/04.+Jfk+(feat.+Theophilus+London).mp3'
)

Song.create!(
    title: '212',
    album_id: broke_with_expensive_taste.id,
    ord: 5,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Azealia+Banks+-+Broke+With+Expensive+Taste+(2014)/05.+212+(feat.+Lazy+Jay).mp3'
)

Song.create!(
    title: 'Wallace',
    album_id: broke_with_expensive_taste.id,
    ord: 6,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Azealia+Banks+-+Broke+With+Expensive+Taste+(2014)/06.+Wallace.mp3'
)

Song.create!(
    title: 'Heavy Metal and Reflective',
    album_id: broke_with_expensive_taste.id,
    ord: 7,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Azealia+Banks+-+Broke+With+Expensive+Taste+(2014)/07.+Heavy+Metal+and+Reflective.mp3'
)

Song.create!(
    title: 'BBD',
    album_id: broke_with_expensive_taste.id,
    ord: 8,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Azealia+Banks+-+Broke+With+Expensive+Taste+(2014)/08.+Bbd.mp3'
)

Song.create!(
    title: 'Ice Princess',
    album_id: broke_with_expensive_taste.id,
    ord: 9,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Azealia+Banks+-+Broke+With+Expensive+Taste+(2014)/09.+Ice+Princess.mp3'
)

Song.create!(
    title: 'Yung Rapunxel',
    album_id: broke_with_expensive_taste.id,
    ord: 10,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Azealia+Banks+-+Broke+With+Expensive+Taste+(2014)/10.+Yung+Rapunxel.mp3'
)

Song.create!(
    title: 'Soda',
    album_id: broke_with_expensive_taste.id,
    ord: 11,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Azealia+Banks+-+Broke+With+Expensive+Taste+(2014)/11.+Soda.mp3'
)

Song.create!(
    title: 'Chasing Time',
    album_id: broke_with_expensive_taste.id,
    ord: 12,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Azealia+Banks+-+Broke+With+Expensive+Taste+(2014)/12.+Chasing+Time.mp3'
)

Song.create!(
    title: 'Luxury',
    album_id: broke_with_expensive_taste.id,
    ord: 13,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Azealia+Banks+-+Broke+With+Expensive+Taste+(2014)/13.+Luxury.mp3'
)

Song.create!(
    title: 'Nude Beach a-Go-Go',
    album_id: broke_with_expensive_taste.id,
    ord: 14,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Azealia+Banks+-+Broke+With+Expensive+Taste+(2014)/14.+Nude+Beach+a+Go-Go.mp3'
)

Song.create!(
    title: 'Miss Amor',
    album_id: broke_with_expensive_taste.id,
    ord: 15,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Azealia+Banks+-+Broke+With+Expensive+Taste+(2014)/15.+Miss+Amor.mp3'
)

Song.create!(
    title: 'Miss Camaraderie',
    album_id: broke_with_expensive_taste.id,
    ord: 16,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Azealia+Banks+-+Broke+With+Expensive+Taste+(2014)/16.+Miss+Camaraderie.mp3'
)

azealia_playlist = Playlist.create!(
    name: 'Azealia Playlist',
    creator_id: nick.id
)

azealia_playlist_songs = Song.all.shuffle.take(10)

azealia_playlist_songs.each do |azealia_song|
    SavedSong.create!(
        playlist_id: azealia_playlist.id,
        song_id: azealia_song.id
    )
end