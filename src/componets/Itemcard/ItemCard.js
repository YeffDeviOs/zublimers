import { Card, Button } from "react-bootstrap";
import ItemCounter from "../ItemCount/ItemCounter";
import "./ItemCard.css";

const ItemCard = ({ item }) => {
  return (
    <>
      <Card key={item.id} className="container mb-3 " style={{ width: "18rem" }}>
        <Card.Img className="mt-2 " variant="top" src={item.img } />
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"><h4>${item.price} </h4></Card.Subtitle>
          
          {/* <a href>{item}</a> */}
          {/* <Card.Text>
            <span>{item.description}</span>
          </Card.Text> */}
          <Button variant="outline-secondary">View Specs</Button>
          <ItemCounter />
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemCard;
