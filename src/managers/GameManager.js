export const createNewGame = (gameObj) => {
    return fetch('http://localhost:8000/games', {
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
    return fetch('http://localhost:8000/games/my_games', {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(response => response.json())
}

export const getCharacter = (characterId) => {
    return fetch(`http://localhost:8000/characters/${characterId}`, {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(response => response.json())
}

export const deleteGame = (gameId) => {
    return fetch(`http://localhost:8000/games/${gameId}`, {
        method: "DELETE",
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
}

export const updateCharacterSituation = (characterId, outcomeId) => {
    return fetch(`http://localhost:8000/characters/${characterId}?outcome=${outcomeId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        },
    })
}

export const updateCharacterSituationAndInventory = (characterId, outcomeId, itemId) => {
    return fetch(`http://localhost:8000/characters/${characterId}?outcome=${outcomeId}&item=${itemId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        },
    })
}