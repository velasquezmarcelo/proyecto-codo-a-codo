import React from "react";
import { useState, useEffect  } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { DivCardDetail, Mih2Detail } from "./Detail.styled";

const Detail = () => {

    const {detailId} = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
            console.log(char);
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
    

    return(
        <div>

          <DivCardDetail>
            <img src={character.image} alt="imagen personaje" />
            <Mih2Detail> Nombre:{character.name}</Mih2Detail>
            <div>
            <Mih2Detail>Estado: {character.status}</Mih2Detail>
            <Mih2Detail>Especie: {character.species}</Mih2Detail>
            <Mih2Detail>Genero: {character.gender}</Mih2Detail>
            <Mih2Detail>Origen: {character.origin?.name}</Mih2Detail>
            </div>
            </DivCardDetail>
            

            <div>
            <Link to="/home">
            <button>REGRESAR A HOME</button>
            </Link>
            </div>
        </div>
    )
}

export default Detail;