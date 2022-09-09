export const getValidChoices = (situationId, characterId) => {
    return fetch(`http://localhost:8000/choices/${situationId}/valid_choices?character=${characterId}`, {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(response => response.json())
}