export const getStartingItems = () => {
    return fetch('https://remy-text-adventure.herokuapp.com/items/starting', {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(response => response.json())
}
