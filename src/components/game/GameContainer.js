import { useParams } from "react-router-dom"
import { getGame } from "../../managers/GameManager"
import { getCurrentSituation } from "../../managers/SituationManager"
import { useState, useEffect } from "react"
import { GameTest } from "./GameTest"
import { Inventory } from "./Inventory"
import { QuitButton } from "./QuitButton"
import "./Game.css"

export const GameContainer = () => {
    const [gameLog, setGameLog] = useState("")
    const { gameId } = useParams()
    const [game, setGame] = useState({})

    useEffect(
        () => {
            if (gameId) {
                getGame(gameId).then(setGame)
            }
        },
        []
    )

    return <>
        <div className="game-container-div">
            <div className="game-text-div">
                {
                    (game.current_situation)
                    ? <GameTest game={game} setGame={setGame} />
                    : <></>
                }
            </div>
            <div className="inventory-div">
                <QuitButton />
                <Inventory game={game} />
            </div>
        </div>
    </>
}