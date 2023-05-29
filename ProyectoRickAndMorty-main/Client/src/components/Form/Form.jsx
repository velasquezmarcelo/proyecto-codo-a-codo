import React from "react";
import validation from "./validation"
import { Body, Forms } from "./Form.styled";
const Form = ({login}) =>{
    
    const [userData, setUserData] = React.useState({ username: '', password: '' , fullname: ''});
    const [errors, setErrors] = React.useState({username: '', password: '', fullname: '' })

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
        <>
        <Body>
        <h2>FORMULARIO DE REGISTRO</h2>
        <form onSubmit={handleSubmit}>
          <Forms>
                <label>Completa el formulario con tus datos</label>
                <br></br>
                
                <label htmlFor="">Nombre Completo:</label>
                <input type="text" onChange={handleInputChange} name="fullname" value={userData.name}/>

                {errors.fullname && <p style={{color:"red"}}>{errors.fullname}</p>}


                <label htmlFor="">Usuario:</label>
                <input type="text" onChange={handleInputChange} name="username" value={userData.name}/>
               
                {errors.username && <p style={{color:"red"}}>{errors.username}</p>}

                <label htmlFor="">Contraseña:</label>
                <input type="password" onChange={handleInputChange} name="password" value={userData.password} />

                {errors.password && <p style={{color:"red"}}>{errors.password}</p>}

                <button>Loguearse</button>
          </Forms>
        </form>
        </Body>
        </>
    
)

}

export default Form;