import Card from '../Card/Card.jsx';
import {DivCards} from'./Cards.styled'

export default function Cards(props) {

   const { characters } = props;
      
   return <DivCards>
     {characters.map(personaje => 
     <Card key={personaje.id} 
      name={personaje.name}
      species={personaje.species}
      gender={personaje.gender}
      image={personaje.image}
      onClose={props.onClose}
      id={personaje.id}
      />)}
   </DivCards>;
}
