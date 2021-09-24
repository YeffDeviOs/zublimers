import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";

const items = [
  {
    id: 1,
    name: "Ryzen 3 2400g",
    img: "https://i.pinimg.com/474x/32/29/06/322906dfbf22584a17cf9c0db65d4004.jpg",
    img2: "https://static.dafiti.com.ar/p/everlast-0575-351435-1-product.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "100.000",
    Stock: "5",
    Category: "Remeras-Unisex",
  }
];

const getFetch = new Promise((resolve) => {
  //aca tareas asincronicas

  setTimeout(() => {
    resolve(items);
  }, 2000);
});
const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getFetch.then((res) => {
      setItems(res.filter(items => items.id));
      setLoading(false);
    });
  }, []);

  console.log(items);

  return (
    <>
      <h3 className="mt-2">[Quick View]</h3>
      {loading ? (
        <Spinner animation="border" variant="secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <ItemDetail items={items} />
      )}
    </>
  );
};

export default ItemDetailContainer;
