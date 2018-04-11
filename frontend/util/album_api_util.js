export const fetchAlbums = (shouldFetchAll) => {
    console.log("about to fetch albums in api util");
    
    return $.ajax({
        url: 'api/albums',
        method: 'GET',
        data: { shouldFetchAll: shouldFetchAll }
    });
};

export const fetchAlbum = (id) => {
    return $.ajax({
        url: `api/albums/${id}`,
        method: 'GET'
    });
};