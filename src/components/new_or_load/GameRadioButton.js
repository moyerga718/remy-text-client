import "./Game.css"

export const GameRadioButton = ({game, setSelectedGame}) => {
    return <>
    <label className="labl">
            <input
                onChange={(changeEvent) => {
                    setSelectedGame(parseInt(changeEvent.target.value));
                }}
                type="radio"
                name="game"
                value={parseInt(game?.id)}
            />{" "}
                    <p className="selection-text">{'> '}{game?.first_name} / {game?.current_situation?.location}</p>
        </label>
    </>
}