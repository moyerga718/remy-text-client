import { getUserCharacters } from "../../managers/CharacterManager"
import { useState, useEffect } from "react"
import { CharacterRadioButton } from "./CharacterRadioButton"
import { deleteCharacter } from "../../managers/CharacterManager"
import { Link } from "react-router-dom"

export const LoadCharacter = ({userId}) => {
    const [ characters, setCharacters] = useState([])
    const [ selectedCharacter, setSelectedCharacter] = useState(0)

    useEffect(
        () => {
            getUserCharacters().then(setCharacters)
        },
        []
    )

    const handleDelete = () => {
        deleteCharacter(selectedCharacter).then(
            () => {
                setSelectedCharacter(0)
                getUserCharacters().then(setCharacters)
            }
        )
    }

    return <>
        <p>Choose a game.</p>

        <div className = "character-selection-div">
            <div className="character-button-container">
                {
                    (characters.length)
                    ? <>
                    {
                        characters.map(character => <CharacterRadioButton key={`character--${character.id}`}
                            character={character}
                            setSelectedCharacter={setSelectedCharacter}
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
            (selectedCharacter)
            ? <>
                <Link to={`/game/${selectedCharacter}`}>Load Game</Link>
                <p onClick={() => handleDelete()}>Delete Game</p>
            </>
            : <></>
        }
    
    </>
}