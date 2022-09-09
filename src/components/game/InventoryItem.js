export const InventoryItem = ({item}) => {
    return <>
    {
        (item.name)
        ? <p>{item?.name}</p>
        : <></>
    }
    </>
}