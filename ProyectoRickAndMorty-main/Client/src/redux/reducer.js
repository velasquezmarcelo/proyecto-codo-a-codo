const initialState = {
    myFavorites: [],
    allCharacters:[],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
  
      case "ADD_FAVORITE":
        return{
          ...state, myFavorites: [...state.allCharacters, action.payload],
          allCharacters: [...state.allCharacters, action.payload],

        }

      case "REMOVE_FAVORITE":

      return{
        ...state, myFavorites: state.myFavorites.filter(favorite => favorite.id!== action.payload)
      }

      case "FILTER":
        const allCharactersFiltered= state.allCharacters.filter(character => character.gender === action.payload)
      return{
        ...state, myFavorites: allCharactersFiltered
      }
  
      default:
        return { ...state };
    }
  };
  export default reducer;
  