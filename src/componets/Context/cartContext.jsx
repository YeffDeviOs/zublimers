import { useState, useContext, createContext } from "react"
import Cart from "../Cart/Cart"

const cartContext = createContext()//Se crea una sola vez
export const useCartContext = () => useContext(cartContext)



//Context del carrito global
export const CartContext =({ children })=>{

    const [cartList, setCartList] = useState([])
    
    // const agregarItem = (item, cantidad) => {

    //     const index = cartList.findIndex(i => i.item.id === item.id)//pos    -1
  
    //       if (index > -1) {
    //         const oldQy = cartList[index].quantity
  
    //         cartList.splice(index, 1)
    //         setCartList([...cartList, { item, quantity: cantidad + oldQy}])
    //       } else {
    //         setCartList([...cartList, {item: item, quantity: cantidad}])
    //       }
    //   }

//funcion agregar items al carrito
    function agregarItem(prodNew, qty){
        setCartList( [...cartList, prodNew] )   
    }

//Agregar nuevo producto
    //     const agregarItem = ( item, quantity ) => {
    //     const index = cartList.findIndex (i => i.item.id === item.id)

    //     if ( isInCart > -1) {
    //         const oldQy = cartList[index].quantity
    //         cartList([...cartList, { item: item, quantity: qty + oldQy}])
    //     }else {
    //         setCartList ([...cartList, { item: item, quantity: qty}])
    //     }
    // }

//Consultar si el producto esta o no
// const isInCart = (id) => cartList.find(element => element.item.id  === id)


    //Borrar del carrito
    //Verificamos si esta en el carrito   
    const removeItem = (items) => {
    const deleteProduct = cartList.filter((items) => items !== items.item.id);
    setCartList([...deleteProduct]);
    };   


    //suma en el widget la cantidad
    const iconCart = () => {
        return cartList.reduce( (acum, valor)=> acum + valor.quantity, 0)         
    }


    //da el precio total
    const totalPrice =()=>{
        return cartList.reduce((acum, valor)=>(acum + (valor.quantity * valor.item.price)), 0) 
      }

    //vacia el carrito y devuelve el array vacio
    const clearCart=()=>{
        setCartList([])
    }
    
    console.log(Cart)
    return(
        <cartContext.Provider value={{
            cartList,
            agregarItem,
            clearCart,
            iconCart,
            removeItem,
            totalPrice
        }} >
            {children}
        </cartContext.Provider>
    )
}

