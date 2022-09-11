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
                    <p className="selection-text">{'> '}{game?.first_name} | Current Location: {game?.current_situation?.location} | Items Collected: {game.items.length}</p>

        </label>
    </>
}