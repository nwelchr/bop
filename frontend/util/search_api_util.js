export const fetchSearchResults = (query) => {
    return $.ajax({
        url: `api/searches?query=${query}`,
        method: "GET",
    })
}
