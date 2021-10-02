import { useState, useEffect } from "react";
// import { getFetch } from "../Array/Dataprueba";
import ItemList from "../ItemList/ItemList";
import "../Container/ItemListContainer.css";
import { Spinner } from "react-bootstrap";
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../Servicios/getFirebase';





const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategory } = useParams()
  

    useEffect(() => {


      if (idCategory){
        const dbQuery = getFirestore()

        dbQuery.collection('items').where('Category', '==', idCategory ).get()
        .then(resp => {
            setItems( resp.docs.map(item => ( {id: item.id, ...item.data()} ) ) )
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))                   
      }
      else {
        const dbQuery = getFirestore()

        dbQuery.collection('items').get()
        .then(resp => {
            setItems( resp.docs.map(item => ( {id: item.id, ...item.data()} ) ) )
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))                   

      }
    }, [idCategory])
  
  // useEffect(() => {
  //   setTimeout(() => {
      
      
  //     if (idCategory) {
  //       getFetch
  //       .then((res) => {
  //         setItems(res.filter(items => items.Category===idCategory));
  //         setLoading(false);
  //       });
        
        
  //     } else {
  //       getFetch
  //       .then((res) => {
  //         setItems(res);
  //         setLoading(false);
          
  //       });
  //     }
  //   }, 2000);
  // },
  // [idCategory]);

  // console.log(idCategory);

  return (
    <>
      {/* <h3 className="mt-3">[Disfrutá de Nuestra Variedad de Productos]</h3> */}
      {loading ? (
        <Spinner animation="border" variant="secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;
