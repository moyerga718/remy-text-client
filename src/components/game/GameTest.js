import { useState, useEffect } from "react"
import { handleAction } from "../../managers/GameManager"
import "./Game.css"

export const GameTest = ({ game, setGame, gameLog, setGameLog }) => {
    const [actionText, setActionText] = useState("")

    const handleKeyPress = e => {
        if (e.charCode === 13) {
            handleSubmit(actionText, game)
        }
    }


    const handleSubmit = (text, game) => {
        const requestData = {
            situationId: game.current_situation.id,
            actionText: text
        }

        let logCopy = gameLog

        handleAction(game.id, requestData).then(
            response => {
                if (response.action_completed === false) {
                    logCopy += `<br /><br />> ${text}<br />${response.message}`
                    setGameLog(logCopy)
                    setActionText("")
                } else {
                    logCopy += `<br /><br />> ${text}`
                    setGame(response.game_data)
                    if (response.action_response.response != ""){
                        logCopy += `<br />${response.action_response.response}`
                    }
                    
                    if (response.action_response.new_situation_bool) {
                        logCopy += `<br /><br />${response.game_data.current_situation.text}`
                    }
                    setGameLog(logCopy)
                    setActionText("")
                }
            }
        )
    }

    return <>
        {
            (game)
                ? <div>
                    <p dangerouslySetInnerHTML={{__html: gameLog}}/>
                    <div className = "text-input-div">
                    <p className = "game-input-arrow">{'>'}</p>
                    <input
                        required
                        type="text"
                        className="game-input"
                        value={actionText}
                        onChange={
                            (evt) => {
                                let copy = actionText
                                copy = evt.target.value
                                setActionText(copy)
                            }
                        }
                        onKeyPress={(e) => handleKeyPress(e)}
                    />
                    </div>
                </div>
                : <></>
        }
    </>
}