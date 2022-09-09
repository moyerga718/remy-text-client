import { useState, useEffect } from "react"
import { createNewCharacter } from "../../managers/CharacterManager"
import { getStartingItems } from "../../managers/ItemManager"
import { ItemRadioButton } from "./ItemRadioButton"
import { useNavigate } from "react-router-dom"


export const NewCharacter = ({userId}) => {
    const navigate = useNavigate()
    const [startingItems, setStartingItems] = useState([])
    const [character, setCharacter] = useState({
        first_name: "",
        itemId: 0,
    })

    useEffect(
        () => {
            getStartingItems().then(setStartingItems)
        },
        []
    )

    const handleSubmit = () => {
        if (character.first_name === "" || character.itemId === 0) {
            window.alert("Fill out entire form.")
        } else {
            const characterObj = {
                first_name: character.first_name,
                items: [character.itemId]
            }
            createNewCharacter(characterObj).then(
                response => navigate(`/game/${response.id}`)
            )
        }
    }

    return <>
        <p>Start a new game.</p>

        <div className = "text-input-div">
            <p>Character's first name:</p>
            <input
                required
                type="text"
                className="input"
                value={character.first_name}
                onChange={
                    (evt) => {
                        const copy = {...character}
                        copy.first_name = evt.target.value
                        setCharacter(copy)
                    }
                }
            />
        </div>

        <div className = "item-selection-div">
            <p>Choose a starting item:</p>
            <div className="item-button-container">
                {
                    startingItems.map(item => <ItemRadioButton key={`starting--item--${item.id}`}
                        item={item}
                        character={character}
                        setCharacter={setCharacter}
                    />)
                }
            </div>
        </div>

        <button className ="submit-button" onClick={handleSubmit}>Click here to submit</button>
    </>
}