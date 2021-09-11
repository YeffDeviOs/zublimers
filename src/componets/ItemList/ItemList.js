import React from 'react'
import ItemCard from '../Itemcard/ItemCard'


const ItemList = ({items}) => {

    return (
        <>
          { items.map(item => <ItemCard item={item} />   )}
        </>
    )
}

export default ItemList
