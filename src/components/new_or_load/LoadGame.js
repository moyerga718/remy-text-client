import { getUserGames } from "../../managers/GameManager"
import { useState, useEffect } from "react"
import { GameRadioButton } from "./GameRadioButton"
import { deleteGame } from "../../managers/GameManager"
import { Link } from "react-router-dom"
import "./Game.css"

export const LoadGame = ({ userId, username }) => {
    const [games, setGame] = useState([])
    const [selectedGame, setSelectedGame] = useState(0)

    useEffect(
        () => {
            getUserGames().then(setGame)
        },
        []
    )

    const handleDelete = () => {
        deleteGame(selectedGame).then(
            () => {
                setSelectedGame(0)
                getUserGames().then(setGame)
            }
        )
    }

    return <>
    <div>
                <pre>
                    {`
 ______     ______     __    __     __  __    
/\\  == \\   /\\  ___\\   /\\ "-./  \\   /\\ \\_\\ \\   
\\ \\  __<   \\ \\  __\\   \\ \\ \\-./\\ \\  \\ \\____ \\  
 \\ \\_\\ \\_\\  \\ \\_____\\  \\ \\_\\ \\ \\_\\  \\/\\_____\\ 
  \\/_/ /_/   \\/_____/   \\/_/  \\/_/   \\/_____/                                           
`}

                </pre>

            </div>
            <div>
                <p>A text-based adventure game</p>
            </div>

        <p className="greeting-text">Hello, {username}</p>
        <p>Choose a game.</p>
        <div className="character-selection-div">
            <div className="character-button-container">
                {
                    (games.length)
                        ? <>
                            {
                                games.map(game => <GameRadioButton key={`game--${game.id}`}
                                    game={game}
                                    setSelectedGame={setSelectedGame}
                                />)
                            }
                        </>
                        : <>
                            <p>No games started.</p>
                        </>
                }
            </div>
        </div>

        {
            (selectedGame)
                ? <>
                    <div className="load-options-div">
                    <Link className="link-text" to={`/game/${selectedGame}`}>Load Game</Link>
                    <p className="link-text" onClick={() => handleDelete()}>Delete Game</p>
                    </div>
                </>
                : <></>
        }

    </>
}