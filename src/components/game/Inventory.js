import { InventoryItem } from "./InventoryItem"

export const Inventory = ({game}) => {
    return <div>
        <p>Inventory:</p>
        {
            (game.items)
            ? <>
                {
                    game?.items.map( item => <InventoryItem key = {`item--${item.id}`}
                    item={item}/>)
                }
            </>
            : <></>
        }
    </div>
}