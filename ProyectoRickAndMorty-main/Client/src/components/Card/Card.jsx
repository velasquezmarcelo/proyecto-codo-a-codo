import {Mih2, DivCard, ImagenPersonaje,BotonCerrar} from "./Card.styled"
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { addFavorite,removeFavorite } from "../../redux/actions";
import { useEffect ,useState} from "react";



function Card({id,image,name,species,gender,onClose,addFavorite,removeFavorite, myFavorites}) {


   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const [isFav,setIsFav] = useState(false);

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false)
         removeFavorite(id)
      }
      else{
         setIsFav(true)
         addFavorite({id,image,name,species,gender})
      }
   }

   return (
      
      <DivCard>

         {isFav ? (<button onClick={handleFavorite}>❤️</button>
      ):(<button onClick={handleFavorite}>🤍</button>)}

         <BotonCerrar onClick={()=>onClose(id)}>X</BotonCerrar>
         <ImagenPersonaje  src={image} alt="" /> 
         <Link to={`/detail/${id}`}>
         <Mih2>name:{name}</Mih2>
         </Link>
         <Mih2>species:{species}</Mih2>
         <Mih2>gender: {gender}</Mih2>
         
      </DivCard>
   );

      
}
const mapDispatchToProps = (dispatch)=> {
   return{
      addFavorite:(character)=>{
         dispatch(addFavorite(character));
      },
      removeFavorite: (id)=>{
         dispatch(removeFavorite(id));
      }
      
   }
}
const mapStateToProps = (state) => {
return {
   myFavorites: state.myFavorites
}
}



export default connect(mapStateToProps,mapDispatchToProps)(Card);
