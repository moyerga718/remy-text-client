import { getUserGames } from "../../managers/GameManager"
import { useState, useEffect } from "react"
import { GameRadioButton } from "./GameRadioButton"
import { deleteGame } from "../../managers/GameManager"
import { Link } from "react-router-dom"

export const LoadGame = ({userId}) => {
    const [ games, setGame] = useState([])
    const [ selectedGame, setSelectedGame] = useState(0)

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
        <p>Choose a game.</p>

        <div className = "character-selection-div">
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
                <Link to={`/game/${selectedGame}`}>Load Game</Link>
                <p onClick={() => handleDelete()}>Delete Game</p>
            </>
            : <></>
        }
    
    </>
}