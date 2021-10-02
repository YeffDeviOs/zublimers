import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "../Container/ItemListContainer.css";
import { Spinner } from "react-bootstrap";
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../Servicios/getFirebase';



const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategory } = useParams()
  

    useEffect(() => {

      if (idCategory){
        const dbQuery = getFirestore()

        dbQuery.collection('items').where('Category', '==', idCategory ).get()
        .then(resp => {
            setItem( resp.docs.map(item => ( {id: item.id, ...item.data()} ) ) )
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))                   
      }
      else {
        const dbQuery = getFirestore()

        dbQuery.collection('items').get()
        .then(resp => {
            setItem( resp.docs.map(item => ( {id: item.id, ...item.data()} ) ) )
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))                   

      }
    }, [idCategory])
  
  return (
    <>
      <h3 className="mt-3">[Disfrutá de Nuestra Variedad de Productos]</h3>
      {loading ? (
        <Spinner animation="border" variant="secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <ItemList items={item} />
      )}
    </>
  );
};

export default ItemListContainer;
