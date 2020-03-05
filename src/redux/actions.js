// here is where my functions for addListing, deleteListing, listUser
export const addListing = (listing) => {
    return {
        type: 'ADD_LISTING',
        value: listing
    }
}
export const deleteListing = (index) => {
    return {
        type: 'DELETE_LISTING',
        value: index
    }
}