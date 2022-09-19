import { useParams } from "react-router-dom"
import { getGame } from "../../managers/GameManager"
import { useState, useEffect, useRef } from "react"
import { GameText } from "./GameText"
import { Inventory } from "./Inventory"
import { QuitButton } from "./QuitButton"
import { Tips } from "./Tips"
import "./Game.css"

export const GameContainer = () => {
    const [gameLog, setGameLog] = useState("")
    const { gameId } = useParams()
    const [initialGame, setInitialGame] = useState({})
    const [game, setGame] = useState({})
    const bottomRef = useRef(null);

    useEffect(
        () => {
            if (gameId) {
                getGame(gameId).then(setInitialGame)
            }
        },
        []
    )

    useEffect(
        () => {
            if (initialGame) {
                setGame(initialGame)
                setGameLog(initialGame?.current_situation?.text)
            }
        },
        [initialGame]
    )

    useEffect(
        () => {
            bottomRef.current?.scrollIntoView();
        },
        [gameLog]
    );

    return <>
        <div className="game-container-div">
            <div className="game-text-div">
                {
                    (game.current_situation)
                        ? <GameText game={game} setGame={setGame} gameLog={gameLog} setGameLog={setGameLog} />
                        : <></>
                }
                <div ref={bottomRef} />
            </div>
            <div className="inventory-div">
                <Inventory game={game} />
                <div>
                    <Tips />
                    <QuitButton />
                </div>
            </div>
        </div>
    </>
}