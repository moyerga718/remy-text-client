import { useState, useEffect } from "react"
import { createNewGame } from "../../managers/GameManager"
import { getStartingItems } from "../../managers/ItemManager"
import { ItemRadioButton } from "./ItemRadioButton"
import { useNavigate } from "react-router-dom"


export const NewGame = ({userId}) => {
    const navigate = useNavigate()
    const [startingItems, setStartingItems] = useState([])
    const [game, setGame] = useState({
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
        if (game.first_name === "" || game.itemId === 0) {
            window.alert("Fill out entire form.")
        } else {
            const gameObj = {
                first_name: game.first_name,
                items: [game.itemId]
            }
            createNewGame(gameObj).then(
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
                value={game.first_name}
                onChange={
                    (evt) => {
                        const copy = {...game}
                        copy.first_name = evt.target.value
                        setGame(copy)
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
                        game={game}
                        setGame={setGame}
                    />)
                }
            </div>
        </div>

        <button className ="submit-button" onClick={handleSubmit}>Click here to submit</button>
    </>
}