export const follow = (followableType, followableId) => {
    const followableString = `${followableType.toLowerCase()}s`;

    return $.ajax({
        url: `api/${followableString}/${followableId}/follow`,
        method: 'POST',
        data: {
            followable_type: followableType
        }
    });
};

export const unfollow = (followableType, followableId) => {
    const followableString = `${followableType.toLowerCase()}s`;

    return $.ajax({
        url: `api/${followableString}/${followableId}/unfollow`,
        method: 'DELETE',
        data: {
            followable_type: followableType
        }
    });
};

