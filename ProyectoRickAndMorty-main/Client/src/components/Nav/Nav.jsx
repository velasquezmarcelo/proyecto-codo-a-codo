import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { Divlinks, Boton, LinkNuevo,Boton2,LinkNuevo2} from "./Nav.styled";

const Nav= (props)=>{
    
return(
<div>
      <Divlinks>
      <Boton><LinkNuevo to="/about">About</LinkNuevo></Boton>
      <Boton><LinkNuevo to="/home">Home</LinkNuevo></Boton>
      <Boton><LinkNuevo to="/favorites">Favorites</LinkNuevo></Boton>
      </Divlinks>

      <SearchBar onSearch={props.onSearch}/>
      <Divlinks>
      <Boton2><LinkNuevo2 to="/">Desloguearse</LinkNuevo2></Boton2>
      </Divlinks>
    
    
</div>
)    
}

export default Nav;