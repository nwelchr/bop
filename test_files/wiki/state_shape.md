# Sample State Shape
```
{
      entities: {
            albums: {
                  1: {
                        id: 1,
                        title: 'Broke with Expensive Taste',
                        year: 2014,
                        albumCoverUrl: '/assets/images/album_covers/broke_with_expensive_taste.png',
                        numSongs: 16,
                  }
            },
            artists: {
                  1: {
                        id: 1,
                        name: 'Azealia Banks',
                        about: 'Raised in Harlem by a single mom while attending Manhattan's Fiorello H. LaGuardia High School of Music and Art, Azealia Banks' backstory reads like an alternate version of the musical drama Fame, only where the main character discovers her sexuality and...',
                        genreId: [1],
                        albumIds: [1, 2],
                        artistArtworkUrl: '/assets/images/artist_artworks/azealia_banks.png',
                        backgroundArtworkUrl: '/assets/images/background_artworks/azealia_banks.png'
                  }
            },
            playlists: {
                  1: {
                        id: 1,
                        title: 'Hangout Playlist',
                        songIds: [1, 2],
                        creatorId: [1]
                        followingUserIds: [2, 3],
                  }
            },
            songs: {
                  1: {
                        id: 1,
                        title: 'Heavy Metal and Reflective',
                        artistId: 1,
                        albumId: 1,
                        playlistIds: [1, 2],
                        duration: "2:37",
                        ord: 7,
                        numPlays: 426
                        mp3Url: 'heavy_metal_and_reflective.mp3'
                  },
            },
            users: {
                  1: {
                        id: 1,
                        username: 'nwelchr',
                        email: 'nwelchr@gmail.com'
                        profileImgUrl: './assets/images/profile.jpg',
                        playlistIds: [1, 2],
                        savedSongIds: [1, 2, 3, 4, 5],
                  },
            },

      },

      ui: {
            playBar: {
                  currTrack: 'mmmbop.mp3',
                  nextTrack: 'better_off_alone.mp3',
                  prevTrack: 'baxabene_oxamu.mp3',
                  currPlaying: true,
                  trackProgress: 0.358, // (0..1)
                  volume: 0.7, // (0..1)
                  replayStatus: noReplay, // noReplay, replayPlaylist, replaySong
                  shuffle: true,
            },
      },

      errors: {
            playlistErrors: {
                  createPlaylist: ['Playlist name cannot be blank.'],
                  updatePlaylist: ['You do not have permission to modify this playlist.']
                  deletePlaylist: ['You do not have permission to delete this playlist.']
            },
            sessionErrors: {
                  login: ['Incorrect username or password.'],
            },
            songErrors: {
                  addSong: ['This song has already been added to your library.']
                  deleteSong: ['You cannot delete a song you have not added to your library.']
            },
      },

      session: {
            currentUser: {
                  email: 'demouser@demo.com',
                  username: 'Demo User'
            }
      }
}
```

Things to discuss:
- Would `genre` just be a constant somewhere containing strings of all the genres, and the `genreId` would just index into that? Would we then have to make this `GENRES` constant global? *OR* would we not have a `genreId` and just have a `genre` as a string (for `users`, )
- `trackProgress` value between 0 and 1, with some sort of `parseTrackProgress()` instance method in my `PlayBarContainer`? And would it be under my `ui` or my `song` key?
- `errors`
- Would I say the `about` as an `aboutId` and have that reference something else? (I guess it's not necessary, but it's just potentially a *lot* of text)
