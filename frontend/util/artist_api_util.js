export const fetchArtists = (shouldFetchAll) => {
    return $.ajax({
        url: "api/artists",
        method: "GET",
        data: { shouldFetchAll: shouldFetchAll },
    })
}

export const fetchArtist = (id) => {
    return $.ajax({
        url: `api/artists/${id}`,
        method: "GET",
    })
}
