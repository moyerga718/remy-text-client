import "./Character.css"

export const CharacterRadioButton = ({character, setSelectedCharacter}) => {
    return <>
    <label className="labl">
            <input
                onChange={(changeEvent) => {
                    setSelectedCharacter(parseInt(changeEvent.target.value));
                }}
                type="radio"
                name="character"
                value={parseInt(character?.id)}
            />{" "}
            <div className="selection-div">
                    <p className="selection-text">{'> '}{character?.first_name} | Current Location: {character?.current_situation?.location} | Items Collected: {character.items.length}</p>
            </div>

        </label>
    </>
}