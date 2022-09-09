import { getGame } from "../../managers/GameManager"
import { markChoiceAsChosen } from "../../managers/CharacterChoiceManager"
import { updateCharacterSituation, updateCharacterSituationAndInventory } from "../../managers/GameManager"

import { useState, useEffect } from "react"
import "./Game.css"

export const GameTest = ({ game, setGame }) => {
    const [actionText, setActionText] = useState("")

    const handleSelection = (choiceId, outcomeId, itemBool, itemId) => {
        // WHEN A SELECTION IS MADE - 
        // 1. send choice ID and character ID to characterChoice view to flip that choice to true.
        // markChoiceAsChosen(choiceId, gameId).then(
        //     // 2. Update inventory and current situation for character 
        //     () => {
        //         if (itemBool) {
        //             updateCharacterSituationAndInventory(gameId, outcomeId, itemId).then(
        //                 () => getGame(gameId).then(setGame)
        //             )
        //         } else {
        //             updateCharacterSituation(gameId, outcomeId).then(
        //                 () => getGame(gameId).then(setGame)
        //             )
        //         }
        //     }
        // 3. Get character using gameId. This should trigger use effect to update current situation.
        // )
    }

    return <>

        {
            (game)
                ? <div>
                    <p>{game?.current_situation?.text}</p>
                    <div className = "text-input-div">
                    <p>{'>'}</p>
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
                    />
                    </div>
                </div>
                : <></>
        }
    </>
}