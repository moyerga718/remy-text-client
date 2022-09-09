import { useParams } from "react-router-dom"
import { getCharacter } from "../../managers/GameManager"
import { getCurrentSituation } from "../../managers/SituationManager"
import { markChoiceAsChosen } from "../../managers/CharacterChoiceManager"
import { updateCharacterSituation, updateCharacterSituationAndInventory } from "../../managers/GameManager"
import { InventoryItem } from "./InventoryItem"

import { useState, useEffect } from "react"
import "./Game.css"

export const Game = () => {
    const [gameLog, setGameLog] = useState("")
    const { characterId } = useParams()
    const [character, setCharacter] = useState({})
    const [situation, setSituation] = useState({})

    useEffect(
        () => {
            if (characterId) {
                getCharacter(characterId).then(setCharacter)
            }
        },
        []
    )

    useEffect(
        () => {
            if (character.current_situation) {
                getCurrentSituation(character?.current_situation?.id, characterId).then(setSituation)
            }
        },
        [character]
    )

    const handleSelection = (choiceId, outcomeId, itemBool, itemId) => {
        // WHEN A SELECTION IS MADE - 
        // 1. send choice ID and character ID to characterChoice view to flip that choice to true.
        markChoiceAsChosen(choiceId, characterId).then(
            // 2. Update inventory and current situation for character 
            () => {
                if (itemBool) {
                    updateCharacterSituationAndInventory(characterId, outcomeId, itemId).then(
                        () => getCharacter(characterId).then(setCharacter)
                    )
                } else {
                    updateCharacterSituation(characterId, outcomeId).then(
                        () => getCharacter(characterId).then(setCharacter)
                    )
                }
            }
            // 3. Get character using characterId. This should trigger use effect to update current situation.
        )
    }


    return <>
        {
            (situation.choice_data)
                ? <div className = "game-container">
                    <div className="game-text-div">
                        <p>{situation?.situation_data?.text}</p>
                        <div className="choice-container">
                            {
                                situation?.choice_data.map(choiceObj => <p className="option-text" onClick={() => handleSelection(choiceObj?.id, choiceObj?.outcome_situation, choiceObj?.get_item_bool, choiceObj?.new_item)}>{'> '}{choiceObj.text}</p>)
                            }
                        </div>
                    </div>
                    <div className="inventory-div">
                        <p>Inventory:</p>
                        {
                            (character.items)
                                ? <>
                                    {
                                        character?.items.map(item => <p>{item?.name}</p>)
                                        
                                        // <InventoryItem key={`item--${item.id}`}
                                        //     item={item}/>)
                                    }
                                </>
                                : <></>
                        }
                    </div>
                </div>
                : <></>
        }
    </>
}