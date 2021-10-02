import React from "react";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import ItemDetail from "../itemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";
// import { getFetch } from '../Array/Dataprueba'
import { getFirestore } from '../../Servicios/getFirebase';


const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { idDetalle } = useParams()


      useEffect(() => {


        const dbQuery = getFirestore()

        dbQuery.collection('items').doc('idDetalle').get()
        .then(resp => {
            setItem( { id: resp.id, ...resp.data() } )
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))                   
        
    }, [idDetalle])


  return (
    <>
      <h3 className="mt-2">[Quick View]</h3>
      {loading ? (
        <Spinner animation="border" variant="secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <ItemDetail item={item} />
      )}
    </>
  );
};

export default ItemDetailContainer;
