import { useState } from "react"

export const InventoryItem = ({ item }) => {
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return <>
        {
            (item.name)
                ? <p className="inventory-item" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{item?.name}</p>
                : <></>
        }
        {

            (isHovering)
                ? <div className="description-div">
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                </div>
                : <></>
        }
    </>
}