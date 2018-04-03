## Functional Component Hierarchy
- `Root`
  - `App`
    - `SideNavBar`
    - `MainPage`
    - `FooterBar`

## Session
- `SessionFormContainer` + `SessionForm`
  - Route: `/#/login` and `/#/signup`
  - State: `errors.session` (`errors.login`?)

## SideNavBar
- `SideNavBar`
  - `SideNavIndex`
    - `Home`, `Search`, and `YourMusic` Links
  - `CurrentUserItem`
    - `UserProfile` Link

## FooterBar (Currently Playing)
- `CurrentPlayingContainer` + `CurrentlyPlaying`
  - Route: `/#/`
  - State: `songs[:id]`, (`queue`), `ui`
  - Components:
    - `CurrentlyPlayingInfo`
    - State: `songs[:id]`, `ui`
    - `PlayBarContainer` + `PlayBar`
    - State: `songs[:id]`, `ui`
    - `VolumeBarContainer` + `VolumeBar`
    - State: `ui`

  ### Bonus: Queue
  - Note: Would be loaded from a toggle-able `queue` button in the `FooterBar`. It may need to be a modal superimposed on the current DOM because un-toggling it would bring you back to the same screen you were previously at. It also isn't accessible elsewhere in the app(?).
  - `QueueContainer` + `Queue`
    - Route: `/#/queue`
    - State: `songs[:id]`, `queue`, `ui`
    - Components:
      - `QueueIndexItem` (**DRYer**: `SongIndexItem`?)
      - State: `songs[:id]`, `ui`

## MainPage:

## Browse
- `BrowseContainer` + `Browse`
  - `FeaturedIndexContainer` + `FeaturedIndex`
    - Route: `/#/browse/featured`
    - State: `playlists`, `albums`, `ui`
    - Components:
      - `FeaturedIndexItem`
      - State: `playlists[:id]`, `albums[:id]`, `ui`
  - `GenresIndexContainer` + `GenresIndex`
    - Route: `/#/browse/genres`
    - State: `genres`
    - Components:
      - `GenreIndexItem`
      - State: `genres[:id]`, `ui`
  - `NewReleasesIndexContainer` + `NewReleasesIndex`
    - Route: `/#/browse/new_releases`
    - State: `albums`
    - Components:
      - `NewReleasesIndexItem`
      - State: `albums[:id]`, `songs[:id]`, `ui`

#### Attempt at DRYer code:
- `BrowseContainer` + `Browse`
  - `[Top?]NavBarContainer` + `[Top?]NavBarItem`
  - State: (passed down through `<Route />` to display correct links and reuse NavBarContainer)
  - `BrowseContainer` + `BrowseIndex`
    - Route: `/#/browse/${passed_through_route}`
    - State: (passed down through `<Route />`)
    - Components:
      - `BrowseIndexItem`
      - State: (passed down through `<Route />`)

## Your Music (Collection)
- `CollectionContainer` + `Collection`
  - `CollectionPlaylistsIndexContainer` + `CollectionPlaylistsIndex`
  - Route: `/#/collection/playlists`
  - State: `playlists`, `users[:id]`, `ui`
  - Components:
    - `CollectionPlaylistsIndexItem`
    - Route: `/#/playlist/playlistId`
    - State: `playlists[:id]`, `users[:id]`, `ui`
  - `CollectionSongsIndexContainer` + `CollectionSongsIndex`
    - Route: `/#/collection/songs`
    - State: `songs`, `users[:id]`, `ui`
    - Components:
      - `CollectionSongsIndexItem`
      - Route: `/#/song/songId` (? No individual song show page)
      - State: `songs[:id]`, `users[:id]`, `ui`
  - `CollectionAlbumsIndexContainer` + `CollectionAlbumsIndex`
    - Route: `/#/collection/albums`
    - State: `albums`, `users[:id]`, `ui`
    - Components:
      - `CollectionAlbumsIndexItem`
      - Route: `/#/album/albumId`
      - State: `albums[:id]`, `users[:id]`, `ui`
  - `CollectionArtistsIndexContainer` + `CollectionArtistsIndex`
    - Route: `/#/collection/artists`
    - State: `artists`, `ui`
    - Components:
      - `CollectionArtistsIndexItem`
      - Route: `/#/artist/artistId`
      - State: `artists[:id]`, `ui`

#### Bonus:
- `CollectionDailyMixIndexContainer` + `CollectionDailyMixIndex`
- Route: `/#/collection/dailyMixes`
- State: `playlists`, `users[:id]`, `ui`
  - `CollectionDailyMixIndexItem`
  - Route: `/#/dailyMix/dailyMixId`
  - State: `playlists[:id]`, `users[:id]`, `ui`

(Note: The idea would be to create 4 playlists each time on a new day, with songs taken from a user's playlists. They would be organized by genre. For example, on a given day, there could be Pop, Rock, Hip Hop, and Folk daily mixes.)

### Attempt at DRYer code:
- `CollectionContainer` + `Collection`
  - `CollectionIndexContainer` + `CollectionIndex`
  - Route: `/#/collection/${passed_through_route}`
  - State: (passed down through `<Route />`)
  - Components:
    - `CollectionIndexItem`
    - Route: `/#/collection/${passed_through_route}/${passed_through_route_Id}`
    - State: (passed down through `<Route />`)

## Playlist Creation
- `NewPlaylistFormContainer` + `NewPlaylistForm`
  - Route: `/#/collection/playlist/new` (Technically, the Spotify website doesn't have a route, it's just a modal that loads...)
  - State: `playlists`, `errors.createPlaylist`

## Show Pages:

## Playlist Show Page
- 'PlaylistPageContainer' + 'PlaylistShow'
  - Route: `/#/playlist/playlistId`
  - State: `playlistId`, `ui`, `errors.deletePlaylist`
  - Components:
    - `PlaylistIntro`
      - `FollowPlaylist`, `SavePlaylist, and ``DeletePlaylist` links
    - `PlaylistContent`
      - State: `songs[:id]`
      - Components:
        - `SongItem` ??

## Album Show Page
- 'AlbumPageContainer' + 'AlbumShow'
  - Route: `/#/playlist/playlistId`
  - State: `playlistId`, `ui`, `errors.deleteAlbum`
  - Components:
    - `AlbumIntro`
      - `SaveAlbum` link
    - `AlbumContent`
      - State: `songs[:id]`
      - Components:
        - `SongItem` ??

## Artist Show Page
- 'ArtistPageContainer' + 'ArtistShow'
  - Route: `/#/artist/artistId`
  - State: `artistId`, `ui`
  - Components:
    - `ArtistIntro`
      - `FollowArtist` link
    - `ArtistContent`
      - State: `songs[:id]`
      - Components:
        - `SongItem` ??

## User Show Page
- 'UserPageContainer' + 'UserShow'
  - Route: `/#/user/userId`
  - State: `userId`, `ui`
  - Components:
    - `UserIntro`
      - `FollowUser` link
    - `UserContent`
      - State: `playlists[:id]`, `songs[:id]`
      - Components:
        - `GenericIndexItem` / `SongItem` ?

### Attempt at DRYer code:
- 'ArtistPageContainer' + 'ArtistShow'
  - Route: `/#/${passed_through_route}/passed_through_route_Id`
  - State: (passed in through route)
  - Components:
    - `PageIntro`
      - `Follow`, `Save`, `Add`, and `Delete` links (depending)
    - `PageContent`
      - State: `songs[:id]`
      - Components:
        - `SongItem` ??

## Music Search
- `SearchFormContainer` + `SearchForm`
  - Route: `/#/search`
  - State: `songs`, `albums`, `playlists`, `artists`
  - Components:
    - `SearchResultsIndexContainer` + `SearchResultsIndex`
    - Route: `/#/search/results/${query}`
    - State: `songs`, `albums`, `playlists`, `artists`
    - Components:
      - `SearchResultsIndexItem`
      - State: `songs[:id]`, `albums[:id]`, `playlists[:id]`, `artists[:id]`

#### Things to discuss:
- `/#/` vs. `/` as a route (in the lecture demo `/#/` wasn't used, but in the Bluebird example it is used...)
- How to make code DRYer (pass down props from Route to know which info to render? ownProps? idk)
- Is it less readable to use `bops` instead of `songs` in my code or for what the user actually sees?
- Everything `ui` (would passing it around *everywhere* i.e. having basically every component know the current song make it easier to determine which buttons should be Play and which should be Pause, highlight `IndexItem`s, etc.?)... also, should I be passing in particular parts of the `ui` (e.g. `ui.songBar.currentTrack`)?
- Should my wireframes be completely representative of my component hierarchy? (So much is repeated...)
- Footer Bar: Since What is getting passed in is really consistent, should I just have a `FooterBarContainer` and `FooterBar` with one giant component where `songs[:id]`, (`queue`), and `ui` are passed down?
- Should artists/albums/playlists accessed from my `collection` have the same path as those accessed from another avenue in my route? I.e. should I have `/#/collection/album/albumId` *and* `/#/album/albumId`? Or should I just have them both collapse into `/#/album/albumId`? Another way to put it: is my `Route` always the same as the URL that displays for the user? If so, I would just want one link.
- `CollectionSongsIndexItem` -- No route? (No individual `song` show page) -- Also, DRYability of this?
