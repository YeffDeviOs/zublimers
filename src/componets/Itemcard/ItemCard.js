import {Link} from "react-router-dom";
import { Card, Button } from "react-bootstrap";
// import ItemCounter from "../ItemCount/ItemCounter";
import "./ItemCard.css";
// import ItemDetail from "../itemDetail/ItemDetail";

const ItemCard = ({ item }) => {
  return (
    <>
      <Card key={item.id} className="container mb-3 card bg-light" style={{ width: "18rem" }}>
        <Card.Img className="mt-2" variant="top" src={item.img } />
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"><h4>${item.price} </h4></Card.Subtitle>
            <Card.Text>
            {/* <span>{item.description}</span> */}
            <label className="text-danger">{item.Category}</label>
            </Card.Text>
            <Link to={`/detalle/${item.id}`}>
            <Button variant="btn btn-outline-danger">View Specs</Button>
            </Link>

          {/* <ItemCounter /> */}
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemCard;
