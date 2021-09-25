import { useState, createContext, useContext } from "react"

const cartContext = createContext()//crear una sola vez

export const useCartContext = () =>  useContext(cartContext)  

export const CartContext =({ children })=>{

    const [cartList, setCartList] = useState([])


    function agregarItem(prodNew){
        setCartList( [...cartList, prodNew] )   
    }

    
    
    console.log(cartList)
    
    return(
        <cartContext.Provider value={{
            cartList,
            agregarItem,
            //mostrarPersona
        }} >
            {children}
        </cartContext.Provider>
    )
}

