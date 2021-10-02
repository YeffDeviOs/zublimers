import { useState, useContext, createContext } from "react"

const cartContext = createContext()//Se crea una sola vez

export const useCartContext = () => useContext(cartContext)



//Context del carrito global
export const CartContext =({ children })=>{

    const [cartList, setCartList] = useState([])
    

//funcion agregar items al carrito
    function agregarItem(prodNew){
        setCartList( [...cartList, prodNew] )   
    }




//aqui empieza la logica del carrito

        const deleteFromCart = (item) => {
    //Verificamos si esta en el carrito   
    const deleteProduct = cartList.filter((prod) => prod.item.id !== item.item.id);

    setCartList([...deleteProduct]);
    };   


    //suma en el widget la cantidad
    const iconCart = () => {
        return cartList.reduce( (acum, valor)=> acum + valor.quantity, 0)         
    }


    //da el precio total
    const precioTotal =()=>{
        return cartList.reduce((acum, valor)=>(acum + (valor.quantity * valor.item.price)), 0) 
      }

    //vacia el carrito y devuelve el array vacio
    const vaciarCarrito=()=>{
        setCartList([])
    }
    
    
    return(
        <cartContext.Provider value={{
            cartList,
            agregarItem,
            vaciarCarrito,
            iconCart,
            deleteFromCart,
            precioTotal
            //mostrarPersona
        }} >
            {children}
        </cartContext.Provider>
    )
}

