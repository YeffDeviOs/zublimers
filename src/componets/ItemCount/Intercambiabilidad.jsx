import { useState } from "react";
import { Button } from 'react-bootstrap'
// import {Link} from "react-router-dom";

const InputCount = () => {
    return <Button variant="btn btn-outline-warning" onClick={()=>console.log('cart') } >Finish Shopping</Button>
}

const ButtonCount= ({handleInter})=> {
    return <Button variant="btn btn-outline-danger" onClick={handleInter}>Add to Cart</Button>

}

const Intercambiable = () => {
    const [inputType, setInputType ] = useState('Button')

    const handleInter=()=>{
        setInputType('input')
    }
    
    return (
        <div>
            {/* <h2>Item Description</h2> */}
            
            {
                inputType === 'Button' ? 
                    <ButtonCount handleInter={handleInter} />
                : 
                    <InputCount />
            }
             {/* <Count onConfirm={addToCart} maxQuantity={itemMax} />  */}
        </div>
    )
}

export default Intercambiable
