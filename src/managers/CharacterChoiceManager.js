export const markChoiceAsChosen = (choiceId, characterId) => {
    return fetch(`http://localhost:8000/character_choices/${choiceId}/chosen?character=${characterId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        },
    })
}