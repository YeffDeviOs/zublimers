import { useCartContext } from "../Context/CartContext"
import { Link } from 'react-router-dom'



const Cart = ( {condition = false} ) => {  

    //const useContextApp = useContext(ContextApp)
    const { cartList, vaciarCarrito, deleteFromCart } = useCartContext()
    
    // if ( !condition) {
    //         return <h2>No puede ver cart</h2>;
    // }
        


    //if ternario....
    // condition ? : => if else
    // condition && 
    // condition ||
    console.log(cartList)
    return (
        <div>
            <h1>Hola soy Cart</h1> 


            {cartList.length === 0  ?   
                <div>
                    <h1>No hay productos agregue algunos</h1>
                    <Link to='/' >Ir a Comprar</Link>
                </div>
            : 
                <div>
                    {cartList.map(resp => <div key={resp.item.id}>
                        <h2>{resp.item.name}</h2>
                        <button onClick={()=> deleteFromCart(resp)} > X </button>
                    </div>
                    )}
                    <button onClick={() => vaciarCarrito()} >Vaciar Carrito</button>
                </div>
    
            }
        </div>
    )
 }

export default Cart
