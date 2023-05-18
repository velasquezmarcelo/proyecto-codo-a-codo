import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { Divlinks } from "./Nav.styled";

const Nav= (props)=>{
    
return(
<div>
      <Divlinks>
     <Link to="/about">About</Link>
      <Link to="/home">Home</Link>
      <Link to="/favorites">Favorites</Link>
      </Divlinks>
      <div>
    <Link to="/"><button>Desloguearse</button></Link>
      </div>
    
    <SearchBar onSearch={props.onSearch}/>
</div>
)    
}

export default Nav;