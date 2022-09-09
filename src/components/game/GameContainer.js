import { useParams } from "react-router-dom"
import { getCharacter } from "../../managers/CharacterManager"
import { getCurrentSituation } from "../../managers/SituationManager"
import { markChoiceAsChosen } from "../../managers/CharacterChoiceManager"
import { updateCharacterSituation, updateCharacterSituationAndInventory } from "../../managers/CharacterManager"
import { useState, useEffect } from "react"
import { GameTest } from "./GameTest"
import { Inventory } from "./Inventory"
import { QuitButton } from "./QuitButton"
import "./Game.css"

export const GameContainer = () => {
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

    return <>
        <div className="game-container-div">
            <div className="game-text-div">
                {
                    (situation.choice_data)
                    ? <GameTest situation={situation} characterId={characterId} setCharacter={setCharacter} />
                    : <></>
                }
            </div>
            <div className="inventory-div">
                <QuitButton />
                <Inventory character={character} />
            </div>
        </div>
    </>
}