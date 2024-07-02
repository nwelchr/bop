import { createSelector } from "reselect"

const getPlaylists = (state) => state.entities.playlists
const getCurrentUserName = (state) => state.session.currentUser.username

export const makeGetUserPlaylists = () =>
    createSelector(
        [getPlaylists, getCurrentUserName],
        (playlists, username) => {
            const userPlaylists = Object.values(playlists)
            return userPlaylists.length > 0
                ? userPlaylists.filter(
                      (playlist) => playlist.creatorName === username
                  )
                : null
        }
    )

export const getNewPlaylists = createSelector(
    [getPlaylists, getCurrentUserName],
    (playlists, username) => {
        const userPlaylists = Object.values(playlists)
        return userPlaylists.length > 0
            ? userPlaylists.filter(
                  (playlist) => playlist.creatorName !== username
              )
            : null
    }
)
