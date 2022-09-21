export const createNewGame = (gameObj) => {
    return fetch('https://remy-text-adventure.herokuapp.com/games', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(gameObj)
    })
        .then(response => response.json())
}

export const getUserGames = () => {
    return fetch('https://remy-text-adventure.herokuapp.com/games/my_games', {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(response => response.json())
}

export const getGame = (gameId) => {
    return fetch(`https://remy-text-adventure.herokuapp.com/games/${gameId}`, {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(response => response.json())
}

export const deleteGame = (gameId) => {
    return fetch(`https://remy-text-adventure.herokuapp.com/games/${gameId}`, {
        method: "DELETE",
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
}

export const handleAction = (gameId, actionData) => {
    return fetch(`https://remy-text-adventure.herokuapp.com/games/${gameId}/handle_action`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(actionData)
    })
        .then(response => response.json())
}