import { useCartContext } from "../Context/CartContext"


const Cart = ( {condition = true} ) => {  

    //const useContextApp = useContext(ContextApp)
    const { cartList } = useCartContext()
    
    // if ( !condition) {
    //         return <h2>No puede ver cart</h2>;
    // }
        
    // condition ? : => if else
    // condition && 
    // condition ||
    console.log(cartList)
    return (
        <div>
            <h1>Hola soy Cart</h1>

            


            {cartList.map(resp => <h2>{resp.item.name}</h2>)}



            {/* { condition && <h2>Ud esta logueado puede ver la pág.</h2> }

            { !condition && <h2>Ud no esta logueado, NO puede ver la pág.</h2> } */}

            {/* <h2> { condition ? 'Ud esta logueado puede ver la pág.' : 'Ud esta No esta logueado puede ver la pág.' } </h2>  */}
            {/* <TextComponent4 /><br /> */}
            {/* <TextComponent5 /><br /> */}
            {/* <TextComponent6  /><br /> */}
            {/* <TextComponent7 /> */}
        </div>
    )
}

export default Cart
