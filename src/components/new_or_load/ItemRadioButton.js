import "./Game.css"

export const ItemRadioButton = ({item, game, setGame}) => {
    return <>
    <label className="labl">
            <input
                onChange={(changeEvent) => {
                    const copy = { ...game };
                    copy.itemId = parseInt(changeEvent.target.value);
                    setGame(copy);
                }}
                type="radio"
                name="item"
                value={parseInt(item?.id)}
            />{" "}
            <div className="selection-div">
                    <p className="selection-text">{'> '}{item?.description}</p>
            </div>

        </label>
    </>
}