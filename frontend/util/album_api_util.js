export const fetchAlbums = (shouldFetchAll) => { 
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