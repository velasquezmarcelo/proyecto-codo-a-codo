import { InputSearchBar, BotonSearchBar } from "./SearchBar.styled";
import { useState } from "react";

export default function SearchBar(props) {
  
   
   const [character,setCharacter] = useState("");

   const handleChange = (evento) => {
      setCharacter(evento.target.value);
   }

   
   return (
      <div>
      <InputSearchBar type='search' onChange={handleChange}/>
      <BotonSearchBar onClick={()=>props.onSearch(character)}>Agregar</BotonSearchBar> 
      </div>
   );
}
