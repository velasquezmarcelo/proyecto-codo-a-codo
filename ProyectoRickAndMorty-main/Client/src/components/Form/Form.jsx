import React from "react";
import validation from "./validation"

const Form = ({login}) =>{
    
    const [userData, setUserData] = React.useState({ username: '', password: '' });
    const [errors, setErrors] = React.useState({username: '', password: '' })

    const handleInputChange = (event) => {
        let property = event.target.name;
        let value = event.target.value;
    
        setUserData({...userData, [property]: value });

        setErrors(validation({
            ...userData,
            [property]: value,
        }))

      };

      const handleSubmit = (event)=>{
        event.preventDefault();
        login(userData)
      }

return(
    
        <form onSubmit={handleSubmit}>
                <label htmlFor="">Usuario:</label>
                <input type="text" onChange={handleInputChange} name="username" value={userData.name}/>
               
                {errors.username && <p style={{color:"red"}}>{errors.username}</p>}

                <label htmlFor="">Contraseña:</label>
                <input type="password" onChange={handleInputChange} name="password" value={userData.password} />

                {errors.password && <p style={{color:"red"}}>{errors.password}</p>}

                <button>Loguearse</button>
            </form>
    
)

}

export default Form;