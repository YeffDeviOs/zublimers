import {useState, useEffect} from 'react'
import { getFetch } from '../Array/Dataprueba'
import ItemList from '../ItemList/ItemList'

function ItemListContainer () {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  console.log(items)



  useEffect(() => {
        getFetch
        .then(res => {
            setItems(res)
            setLoading(false)
        })
          
    }, [])
        

  return (
    <div>
      <div>
          <h1 className="welcome pt-5">....</h1>
          <h2>Esta es nuestra lista de productos</h2>
            {   loading ? 
              <h2 loading>Cargando...</h2> 
              :
              <ItemList items= {items} />
            }
      </div>
    </div>
  )
}

export default ItemListContainer
