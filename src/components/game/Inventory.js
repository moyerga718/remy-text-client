import { InventoryItem } from "./InventoryItem"

export const Inventory = ({character}) => {
    return <div>
        <p>Inventory:</p>
        {
            (character.items)
            ? <>
                {
                    character?.items.map( item => <InventoryItem item={item}/>)
                }
            </>
            : <></>
        }
    </div>
}