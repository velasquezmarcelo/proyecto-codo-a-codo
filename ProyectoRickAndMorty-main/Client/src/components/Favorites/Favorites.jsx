import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { FavCards } from "./Favorites.styled";

const Favorites = () => {

    const favorites = useSelector((state) => state.myFavorites)
   
   return(<FavCards>
            {
                favorites.map(({id,name,species,gender,image}) =>{
                
                return <Card
                key={id} 
                name={name}
                species={species}
                gender={gender}
                image={image}
                id={id}
                />
                
            })}

    </FavCards>)
     

};



export default Favorites;
