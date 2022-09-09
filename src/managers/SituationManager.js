export const getCurrentSituation = (situationId, characterId) => {
    return fetch(`http://localhost:8000/situations/${situationId}/situation_with_valid_choices?character=${characterId}`, {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(response => response.json())
}