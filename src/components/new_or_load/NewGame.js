import { useState, useEffect } from "react"
import { createNewGame } from "../../managers/GameManager"
import { getStartingItems } from "../../managers/ItemManager"
import { ItemRadioButton } from "./ItemRadioButton"
import { useNavigate } from "react-router-dom"

import "./Game.css"


export const NewGame = ({ userId, username }) => {
    const navigate = useNavigate()
    const [startingItems, setStartingItems] = useState([])
    const [name, setName] = useState("")
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

    const handleKeyPress = e => {
        if (e.charCode === 13) {
            const gameCopy = { ...game }
            gameCopy.first_name = name
            setGame(gameCopy)
        }
    }

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
        <div>
            <pre>
                {`
 ______    _______  __   __  __   __ 
|    _ |  |       ||  |_|  ||  | |  |
|   | ||  |    ___||       ||  |_|  |
|   |_||_ |   |___ |       ||       |
|    __  ||    ___||       ||_     _|
|   |  | ||   |___ | ||_|| |  |   |  
|___|  |_||_______||_|   |_|  |___|  
`}
            </pre>
        </div>
        <div>
            <p>A text-based adventure game</p>
        </div>
        <div>
            <p className="greeting-text">Hello, {username}</p>
        </div>
        <p>Start a new game.</p>

        <div className="char-name-div">
            <p>Character's first name:</p>
            <div className="text-field-div">
                <p className="text-input-arrow">{"> "}</p>
                <input
                    required
                    type="text"
                    className="text-input"
                    spellcheck="false"
                    autoFocus
                    value={name}
                    onChange={
                        (evt) => {
                            let nameCopy = { ...name }
                            nameCopy = evt.target.value
                            setName(nameCopy)
                        }
                    }
                    onKeyPress={(e) => handleKeyPress(e)}
                />
            </div>
        </div>

        {
            (game?.first_name.length > 0)
                ? <div className="item-selection-div">
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
                : <></>
        }

        {
            (game.itemId > 0)
                ? <button className="submit-button" onClick={handleSubmit}>Click here to start game</button>
                : <></>
        }
    </>
}