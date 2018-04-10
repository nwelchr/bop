const fetchResults = (query) => {
    return $.ajax({
        url: `api/searches?query=${query}`,
        method: 'GET'
    });
};