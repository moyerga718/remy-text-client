export const getStartingItems = () => {
    return fetch('http://localhost:8000/items/starting', {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(response => response.json())
}
