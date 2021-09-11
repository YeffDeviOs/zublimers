import { useState, useEffect } from "react";
import { getFetch } from "../Array/Dataprueba";
import ItemList from "../ItemList/ItemList";
import "../Container/ItemListContainer.css";
import { Spinner } from "react-bootstrap";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch.then((res) => {
      setItems(res);
      setLoading(false);
    });
  }, []);

  // console.log(items);

  return (
    <>
      <h3 className="py-3">Disfrutá de Nuestra Variedad de Productos</h3>
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
