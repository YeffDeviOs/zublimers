import React from 'react'
import ItemCard from '../Itemcard/ItemCard'
function ItemList({items}) {

    return (
        <div>
            {items.map(items=> <ItemCard items={items} /> )}
        </div>
    )
}

export default ItemList
