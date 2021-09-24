import { useState} from "react";
// import { getFetch } from "../Array/Dataprueba";
import Select from "./Select";

const options = [
    { value: 1, text: "Azul" },
    { value: 2, text: "violeta" }
    
];
  

export default function Variantes() {

  const [option, setOption] = useState(1);
//   useEffect(() => {
//   getFetch.then((res) => {
//     setOption(items => items.img);
//   });
// }, []);

  function optionSelected(value) {
    setOption(value);
    console.log(value);
  }
  

  return (
    <div className="">
        {  option===1 ? 
            <img  src='https://i.pinimg.com/474x/32/29/06/322906dfbf22584a17cf9c0db65d4004.jpg' alt='foto' width="50" />
            : 
            <img src='https://cdn.shopify.com/s/files/1/1000/2058/products/fronts_0000_Nemesis-purple-jersey.png?v=1574109654' alt='foto' width="50"/> 
      }
      <br></br>
        <Select
            options={options}
            onSelect={optionSelected} 
            defaultOption={option} 
        />
    </div>
  );
}
