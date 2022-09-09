export const createNewCharacter = (characterObj) => {
    return fetch('http://localhost:8000/characters', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(characterObj)
    })
        .then(response => response.json())
}

export const getUserCharacters = () => {
    return fetch('http://localhost:8000/characters/my_characters', {
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

export const deleteCharacter = (characterId) => {
    return fetch(`http://localhost:8000/characters/${characterId}`, {
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