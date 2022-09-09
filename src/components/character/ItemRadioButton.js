import "./Character.css"

export const ItemRadioButton = ({item, character, setCharacter}) => {
    return <>
    <label className="labl">
            <input
                onChange={(changeEvent) => {
                    const copy = { ...character };
                    copy.itemId = parseInt(changeEvent.target.value);
                    setCharacter(copy);
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