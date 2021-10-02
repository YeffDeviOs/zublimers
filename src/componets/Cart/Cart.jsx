import { useCartContext } from "../Context/CartContext"
import { Link } from 'react-router-dom'



const Cart = () => {  

    //const useContextApp = useContext(ContextApp)
    const { cartList, clearCart, removeItem, totalPrice } = useCartContext()
    
    // if ( !condition) {
    //         return <h2>No puede ver cart</h2>;
    // }
        


    //if ternario....
    // condition ? : => if else
    // condition && 
    // condition ||
    // console.log(cartList)

    return (
        <div>

            <h1>Hola soy Cart</h1> 


            {cartList.length === 0 ?
                <div>
                    <h3>No hay productos agregue algunos</h3>
                    <Link to='/' >Ir a Comprar </Link>
                </div>
            : 
                <div>
                    {cartList.map((element) =>
                    <div key={element.item.id}>
                        <h2>{element.item.name}</h2>
                        <h6>Tu total es: $ {()=>totalPrice()} </h6>
                        <button onClick={()=> removeItem(element.item.id)} > X </button>
                    </div>
                    )}
                    <button onClick={() => clearCart()} >Vaciar Carrito</button>
                </div>
    
            }
        </div>
    )
 }

export default Cart
