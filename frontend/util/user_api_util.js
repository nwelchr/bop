export const fetchUsers = (shouldFetchAll) => {
    return $.ajax({
        url: "api/users",
        method: "GET",
        data: { shouldFetchAll: shouldFetchAll },
    })
}

export const fetchUser = (id) => {
    return $.ajax({
        url: `api/users/${id}`,
        method: "GET",
    })
}
