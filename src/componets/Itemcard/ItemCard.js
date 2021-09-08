import { Card, Button } from "react-bootstrap";
// import ItemCounter from '../ItemCount/ItemCounter'
// import Itemcard from './ItemCard.css'

const ItemCard = ({item}) => {
	return (


		 <div key={item.id} className="CharacterCard">
		 	<Card style={{ width: '18rem' }}>
		 	<Card.Img variant="top" src={item.img} />
		 	<Card.Body>
		 			<Card.Title>{item.name}</Card.Title>
					<h1>youbelived</h1>
					<a href>{item.price}</a>
		 		<Card.Text>
					<p>{item.description}</p>
		 			</Card.Text>
		 			<Button variant="primary">Go somewhere</Button>
		 			       {/* <ItemCounter/> */}
		 	</Card.Body>
		 </Card>
		 </div>





		// 		<div>
    //     <div  className="card w-50 mt-5" >
    //         <div className="card-header">
    //             </div>
    //               <div className="card-body">
    //               <img src='' alt='persona'/>
                    
    //             </div>
    //             <div className="card-footer">
    //               <button className="btn btn-outline-primary btn-block">
    //                   Añadir al Carrito
    //             </button>
    //         </div>
    //     </div>

		// </div>


	)
}

export default ItemCard







// const Itemcard = ({data}) => {
// 	return (
// 			<div className="CharacterCard">
// 			<Card style={{ width: '18rem' }}>
// 				<Card.Img variant="top" src={data.img} wrapped ui={false} />
// 				<Card.Body>
// 					<Card.Title>{data.name}</Card.Title>
// 					<Card.Text>
// 						{data.description}t to build on the card title and make up the bulk of
// 					</Card.Text>
// 					<Button variant="primary">Go somewhere</Button>
// 				</Card.Body>
// 			</Card>
// </div>
// 	)
// }

// export default Itemcard
