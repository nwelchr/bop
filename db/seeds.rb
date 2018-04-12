# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Album.delete_all
Artist.delete_all
Playlist.delete_all
SavedSong.delete_all
Song.delete_all
User.delete_all

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

GENRES = ['pop', 'rock', 'smooth', 'electronic']

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
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Azealia+Banks+-+Broke+With+Expensive+Taste+(2014)/01.+Idle+Delilah.mp3'
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

azealia_playlist_songs = broke_with_expensive_taste.songs.shuffle.take(10)

azealia_playlist_songs.each do |azealia_song|
    SavedSong.create!(
        playlist_id: azealia_playlist.id,
        song_id: azealia_song.id
    )
end

beyonce = Artist.create!(
    name: 'Beyonce',
    artist_artwork_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Artist+Artwork/beyonce.jpg',
    background_artwork_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Artist+Artwork/beyonce_background.jpg',
    genre_id: 2,
    about: 'Beyoncé\'s about'
)

lemonade = Album.create!(
    title: 'Lemonade',
    year: 2017,
    artist_id: beyonce.id,
    album_type: 'Album',
    album_cover_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Beyonce%CC%81+Lemonade+(2017)/album_cover.jpg'
)

Song.create!(
    title: 'Pray You Catch Me',
    album_id: lemonade.id,
    ord: 1,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Beyonce%CC%81+Lemonade+(2017)/01-pray_you_catch_me.mp3'
)

Song.create!(
    title: 'Hold Up',
    album_id: lemonade.id,
    ord: 2,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Beyonce%CC%81+Lemonade+(2017)/02-hold_up.mp3'
)

Song.create!(
    title: 'Don\'t Hurt Yourself',
    album_id: lemonade.id,
    ord: 3,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Beyonce%CC%81+Lemonade+(2017)/03-don\'t_hurt_yourself_(feat_jack_white).mp3'
)

Song.create!(
    title: 'Sorry',
    album_id: lemonade.id,
    ord: 4,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Beyonce%CC%81+Lemonade+(2017)/04-sorry.mp3'
)

Song.create!(
    title: '6 Inch',
    album_id: lemonade.id,
    ord: 5,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Beyonce%CC%81+Lemonade+(2017)/05-6_inch(feat_th_weeknd).mp3'
)

Song.create!(
    title: 'Daddy Lessons',
    album_id: lemonade.id,
    ord: 6,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Beyonce%CC%81+Lemonade+(2017)/06-daddy_lessons.mp3'
)

Song.create!(
    title: 'Love Drought',
    album_id: lemonade.id,
    ord: 7,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Beyonce%CC%81+Lemonade+(2017)/07-love_drought.mp3'
)

Song.create!(
    title: 'Sandcastles',
    album_id: lemonade.id,
    ord: 8,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Beyonce%CC%81+Lemonade+(2017)/08-sandcastles.mp3'
)

Song.create!(
    title: 'Forward',
    album_id: lemonade.id,
    ord: 9,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Beyonce%CC%81+Lemonade+(2017)/09-forward_(feat_james_blake).mp3'
)

Song.create!(
    title: 'Freedom',
    album_id: lemonade.id,
    ord: 10,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Beyonce%CC%81+Lemonade+(2017)/10-freedom_(feat_kendrick_lamar).mp3'
)

Song.create!(
    title: 'All Night',
    album_id: lemonade.id,
    ord: 11,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Beyonce%CC%81+Lemonade+(2017)/11-all_night.mp3'
)

Song.create!(
    title: 'Formation',
    album_id: lemonade.id,
    ord: 12,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Beyonce%CC%81+Lemonade+(2017)/12-formation.mp3'
)

beyonce_playlist = Playlist.create!(
    name: 'Beyonce Playlist',
    creator_id: nick.id
)

beyonce_playlist_songs = lemonade.songs.shuffle.take(10)

beyonce_playlist_songs.each do |beyonce_song|
    SavedSong.create!(
        playlist_id: beyonce_playlist.id,
        song_id: beyonce_song.id
    )
end

frank_ocean = Artist.create!(
    name: 'Frank Ocean',
    artist_artwork_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Artist+Artwork/frank_ocean.jpg',
    background_artwork_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Artist+Artwork/frank_background.jpg',
    genre_id: 3,
    about: 'Frank\'s about'
)

blonde = Album.create!(
    title: 'Blonde',
    year: 2016,
    artist_id: frank_ocean.id,
    album_type: 'Album',
    album_cover_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/1914+Frank+Ocean+Blonde+(2016)/album_cover.jpg' 
)

Song.create!(
    title: 'Nikes',
    album_id: blonde.id,
    ord: 1,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/1914+Frank+Ocean+Blonde+(2016)/01+Nikes.mp3'
)

Song.create!(
    title: 'Ivy',
    album_id: blonde.id,
    ord: 2,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/1914+Frank+Ocean+Blonde+(2016)/02+Ivy.mp3'
)

Song.create!(
    title: 'Pink + White',
    album_id: blonde.id,
    ord: 3,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/1914+Frank+Ocean+Blonde+(2016)/03+Pink+%2B+White.mp3'
)

Song.create!(
    title: 'Be Yourself',
    album_id: blonde.id,
    ord: 4,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/1914+Frank+Ocean+Blonde+(2016)/04+Be+Yourself.mp3'
)

Song.create!(
    title: 'Solo',
    album_id: blonde.id,
    ord: 5,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/1914+Frank+Ocean+Blonde+(2016)/05+Solo.mp3'
)

Song.create!(
    title: 'Skyline To',
    album_id: blonde.id,
    ord: 6,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/1914+Frank+Ocean+Blonde+(2016)/06+Skyline+To.mp3'
)

Song.create!(
    title: 'Self Control',
    album_id: blonde.id,
    ord: 7,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/1914+Frank+Ocean+Blonde+(2016)/07+Self+Control.mp3'
)

Song.create!(
    title: 'Good Guy',
    album_id: blonde.id,
    ord: 8,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/1914+Frank+Ocean+Blonde+(2016)/08+Good+Guy.mp3'
)

Song.create!(
    title: 'Nights',
    album_id: blonde.id,
    ord: 9,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/1914+Frank+Ocean+Blonde+(2016)/09+Nights.mp3'
)

Song.create!(
    title: 'Solo (Reprise)',
    album_id: blonde.id,
    ord: 10,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/1914+Frank+Ocean+Blonde+(2016)/10+Solo+(Reprise).mp3'
)

Song.create!(
    title: 'Pretty Sweet',
    album_id: blonde.id,
    ord: 11,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/1914+Frank+Ocean+Blonde+(2016)/11+Pretty+Sweet.mp3'
)

Song.create!(
    title: 'Facebook Story',
    album_id: blonde.id,
    ord: 12,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/1914+Frank+Ocean+Blonde+(2016)/12+Facebook+Story.mp3'
)

Song.create!(
    title: 'Close to You',
    album_id: blonde.id,
    ord: 13,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/1914+Frank+Ocean+Blonde+(2016)/13+Close+to+You.mp3'
)

Song.create!(
    title: 'White Ferrari',
    album_id: blonde.id,
    ord: 14,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/1914+Frank+Ocean+Blonde+(2016)/14+White+Ferrari.mp3'
)

Song.create!(
    title: 'Seigfried',
    album_id: blonde.id,
    ord: 15,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/1914+Frank+Ocean+Blonde+(2016)/15+Seigfried.mp3'
)

Song.create!(
    title: 'Godspeed',
    album_id: blonde.id,
    ord: 16,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/1914+Frank+Ocean+Blonde+(2016)/16+Godspeed.mp3'
)

Song.create!(
    title: 'Futura Free',
    album_id: blonde.id,
    ord: 17,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/1914+Frank+Ocean+Blonde+(2016)/17+Futura+Free.mp3'
)

frank_playlist = Playlist.create!(
    name: 'Frank Ocean Playlist',
    creator_id: demo.id
)

frank_playlist_songs = blonde.songs.shuffle.take(10)

frank_playlist_songs.each do |frank_song|
    SavedSong.create!(
        playlist_id: frank_playlist.id,
        song_id: frank_song.id
    )
end

sophie = Artist.create!(
    name: 'SOPHIE',
    artist_artwork_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Artist+Artwork/sophie.jpg',
    background_artwork_url: '',
    genre_id: 4,
    about: 'SOPHIE\'s about'
)

msmsmsm = Album.create!(
    title: 'MSMSMSM',
    year: 2015,
    artist_id: sophie.id,
    album_type: 'Single',
    album_cover_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/MSMSMSM/album_cover.jpg' 
)

Song.create!(
    title: 'MSMSMSM',
    album_id: msmsmsm.id,
    ord: 1,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/MSMSMSM/MSMSMSM.mp3'
)

just_like_we_never = Album.create!(
    title: 'JUST LIKE WE NEVER SAID GOODBYE',
    year: 2015,
    artist_id: sophie.id,
    album_type: 'Single',
    album_cover_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/JUST+LIKE+WE+NEVER+SAID+GOODBYE/album_cover.jpg' 
)

Song.create!(
    title: 'JUST LIKE WE NEVER SAID GOODBYE',
    album_id: just_like_we_never.id,
    ord: 1,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/JUST+LIKE+WE+NEVER+SAID+GOODBYE/JUST+LIKE+WE+NEVER+SAID+GOODBYE.mp3'
)

love = Album.create!(
    title: 'L.O.V.E.',
    year: 2015,
    artist_id: sophie.id,
    album_type: 'Single',
    album_cover_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/L.O.V.E./album_cover.jpg' 
)

Song.create!(
    title: 'L.O.V.E.',
    album_id: love.id,
    ord: 1,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/L.O.V.E./L.O.V.E..mp3'
)

vyzee = Album.create!(
    title: 'VYZEE',
    year: 2015,
    artist_id: sophie.id,
    album_type: 'Single',
    album_cover_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/VYZEE/album_cover.jpg' 
)

Song.create!(
    title: 'VYZEE',
    album_id: vyzee.id,
    ord: 1,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/VYZEE/SOPHIE+-+VYZEE+(Official+Stream).mp3'
)

lemonade_s = Album.create!(
    title: 'LEMONADE',
    year: 2015,
    artist_id: sophie.id,
    album_type: 'Single',
    album_cover_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/LEMONADE/album_cover.jpg' 
)

Song.create!(
    title: 'LEMONADE',
    album_id: lemonade_s.id,
    ord: 1,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/LEMONADE/LEMONADE.mp3'
)

hard = Album.create!(
    title: 'HARD',
    year: 2015,
    artist_id: sophie.id,
    album_type: 'Single',
    album_cover_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/HARD/album_cover.png' 
)

Song.create!(
    title: 'HARD',
    album_id: hard.id,
    ord: 1,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/HARD/HARD.mp3'
)


elle = Album.create!(
    title: 'ELLE',
    year: 2015,
    artist_id: sophie.id,
    album_type: 'Single',
    album_cover_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/ELLE/album_cover.png' 
)

Song.create!(
    title: 'ELLE',
    album_id: elle.id,
    ord: 1,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/ELLE/ELLE.mp3'
)

bipp = Album.create!(
    title: 'BIPP',
    year: 2015,
    artist_id: sophie.id,
    album_type: 'Single',
    album_cover_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/BIPP/album_cover.jpg' 
)

Song.create!(
    title: 'BIPP',
    album_id: bipp.id,
    ord: 1,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/BIPP/BIPP.mp3'
)

its_ok_to_cry = Album.create!(
    title: 'It\'s Okay To Cry',
    year: 2017,
    artist_id: sophie.id,
    album_type: 'Single',
    album_cover_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/It\'s+Okay+To+Cry/album_cover.jpg' 
)

Song.create!(
    title: 'It\'s Okay To Cry',
    album_id: its_ok_to_cry.id,
    ord: 1,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/It\'s+Okay+To+Cry/it\'s+okay+to+cry.mp3'
)

ponyboy = Album.create!(
    title: 'Ponyboy',
    year: 2017,
    artist_id: sophie.id,
    album_type: 'Single',
    album_cover_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Ponyboy/album_cover.jpg' 
)

Song.create!(
    title: 'Ponyboy',
    album_id: ponyboy.id,
    ord: 1,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Ponyboy/ponyboy.mp3'
)

faceshopping = Album.create!(
    title: 'Faceshopping',
    year: 2017,
    artist_id: sophie.id,
    album_type: 'Single',
    album_cover_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Faceshopping/album_cover.jpg' 
)

Song.create!(
    title: 'Faceshopping',
    album_id: faceshopping.id,
    ord: 1,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Faceshopping/faceshopping.mp3'
)

sophie_playlist = Playlist.create!(
    name: 'SOPHIE - PRODUCT',
    creator_id: demo.id
)

sophie_songs = sophie.songs

sophie_songs.each do |sophie_song|
    SavedSong.create!(
        playlist_id: sophie_playlist.id,
        song_id: sophie_song.id
    )
end

grimes = Artist.create!(
    name: 'Grimes',
    artist_artwork_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Artist+Artwork/grimes.png',
    background_artwork_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Artist+Artwork/grimes_background.jpg',
    genre_id: 4,
    about: 'SOPHIE\'s about'
)

art_angels = Album.create!(
    title: 'Art Angels',
    year: 2015,
    artist_id: grimes.id,
    album_type: 'Album',
    album_cover_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Grimes+-+Art+Angels+(2015)/album_cover.jpg' 
)

Song.create!(
    title: 'laughing and not being normal',
    album_id: art_angels.id,
    ord: 1,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Grimes+-+Art+Angels+(2015)/01.+laughing+and+not+being+normal.mp3'
)

Song.create!(
    title: 'California',
    album_id: art_angels.id,
    ord: 2,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Grimes+-+Art+Angels+(2015)/02.+California.mp3'
)

Song.create!(
    title: 'SCREAM',
    album_id: art_angels.id,
    ord: 3,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Grimes+-+Art+Angels+(2015)/03.+SCREAM.mp3'
)

Song.create!(
    title: 'Flesh without Blood',
    album_id: art_angels.id,
    ord: 4,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Grimes+-+Art+Angels+(2015)/04.+Flesh+without+Blood.mp3'
)

Song.create!(
    title: 'Belly of the Beat',
    album_id: art_angels.id,
    ord: 5,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Grimes+-+Art+Angels+(2015)/05.+Belly+of+the+Beat.mp3'
)

Song.create!(
    title: 'Kill v. Maim',
    album_id: art_angels.id,
    ord: 6,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Grimes+-+Art+Angels+(2015)/06.+Kill+V.+Maim.mp3'
)

Song.create!(
    title: 'Artangels',
    album_id: art_angels.id,
    ord: 7,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Grimes+-+Art+Angels+(2015)/07.+Artangels.mp3'
)

Song.create!(
    title: 'Easily',
    album_id: art_angels.id,
    ord: 8,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Grimes+-+Art+Angels+(2015)/08.+Easily.mp3'
)

Song.create!(
    title: 'Pin',
    album_id: art_angels.id,
    ord: 9,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Grimes+-+Art+Angels+(2015)/09.+Pin.mp3'
)

Song.create!(
    title: 'Realiti',
    album_id: art_angels.id,
    ord: 10,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Grimes+-+Art+Angels+(2015)/10.+Realiti.mp3'
)

Song.create!(
    title: 'World Princess part II',
    album_id: art_angels.id,
    ord: 11,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Grimes+-+Art+Angels+(2015)/11.+World+Princess+part+II.mp3'
)

Song.create!(
    title: 'Venus Fly',
    album_id: art_angels.id,
    ord: 12,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Grimes+-+Art+Angels+(2015)/12.+Venus+Fly.mp3'
)

Song.create!(
    title: 'Life in the Vivid Dream',
    album_id: art_angels.id,
    ord: 13,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Grimes+-+Art+Angels+(2015)/13.+Life+in+the+Vivid+Dream.mp3'
)

Song.create!(
    title: 'Butterfly',
    album_id: art_angels.id,
    ord: 14,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Grimes+-+Art+Angels+(2015)/14.+Butterfly.mp3'
)

grimes_playlist = Playlist.create!(
    name: 'Grimes Playlist',
    creator_id: nick.id
)

grimes_songs = grimes.songs

grimes_songs.each do |grimes_song|
    SavedSong.create!(
        playlist_id: grimes_playlist.id,
        song_id: grimes_song.id
    )
end

tennis = Artist.create!(
    name: 'Tennis',
    artist_artwork_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Artist+Artwork/tennis.jpeg',
    background_artwork_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Artist+Artwork/tennis_background.png',
    genre_id: 4,
    about: 'Tennis\' about'
)

yours_conditionally = Album.create!(
    title: 'Yours Conditionally',
    year: 2017,
    artist_id: tennis.id,
    album_type: 'Album',
    album_cover_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Tennis+-+Yours+Conditionally+(2017)/album_cover.jpg' 
)

Song.create!(
    title: 'In the Morning I\'ll Be Better',
    album_id: yours_conditionally.id,
    ord: 1,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Tennis+-+Yours+Conditionally+(2017)/01+In+The+Morning+I\'ll+Be+Better.mp3'
)

Song.create!(
    title: 'My Emotions are Blinding',
    album_id: yours_conditionally.id,
    ord: 2,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Tennis+-+Yours+Conditionally+(2017)/02+My+Emotions+Are+Blinding.mp3'
)

Song.create!(
    title: 'Fields of Blue',
    album_id: yours_conditionally.id,
    ord: 3,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Tennis+-+Yours+Conditionally+(2017)/03+Fields+of+Blue.mp3'
)

Song.create!(
    title: 'Ladies Don\'t Play Guitar',
    album_id: yours_conditionally.id,
    ord: 4,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Tennis+-+Yours+Conditionally+(2017)/04+Ladies+Don\'t+Play+Guitar.mp3'
)

Song.create!(
    title: 'Matrimony',
    album_id: yours_conditionally.id,
    ord: 5,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Tennis+-+Yours+Conditionally+(2017)/05+Matrimony.mp3'
)

Song.create!(
    title: 'Baby Don\'t Believe',
    album_id: yours_conditionally.id,
    ord: 6,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Tennis+-+Yours+Conditionally+(2017)/06+Baby+Don\'t+Believe.mp3'
)

Song.create!(
    title: 'Please Don\'t Ruin This for Me',
    album_id: yours_conditionally.id,
    ord: 7,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Tennis+-+Yours+Conditionally+(2017)/07+Please+Don\'t+Ruin+This+For+Me.mp3'
)

Song.create!(
    title: '10 Minutes 10 Years',
    album_id: yours_conditionally.id,
    ord: 8,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Tennis+-+Yours+Conditionally+(2017)/08+10+Minutes+10+Years.mp3'
)

Song.create!(
    title: 'Modern Woman',
    album_id: yours_conditionally.id,
    ord: 9,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Tennis+-+Yours+Conditionally+(2017)/09+Modern+Woman.mp3'
)

Song.create!(
    title: 'Island Music',
    album_id: yours_conditionally.id,
    ord: 10,
    mp3_url: 'https://s3.us-east-2.amazonaws.com/bop-songs/Tennis+-+Yours+Conditionally+(2017)/10+Island+Music.mp3'
)

tennis_playlist = Playlist.create!(
    name: 'Tennis Playlist',
    creator_id: demo.id
)

tennis_songs = tennis.songs

tennis_songs.each do |tennis_song|
    SavedSong.create!(
        playlist_id: tennis_playlist.id,
        song_id: tennis_song.id
    )
end


normal_playlist = Playlist.create!(
    name: 'Demo Playlist',
    creator_id: demo.id
)

normal_playlist_songs = Song.all.shuffle.take(20)

normal_playlist_songs.each do |normal_song|
    SavedSong.create!(
        playlist_id: normal_playlist.id,
        song_id: normal_song.id
    )
end