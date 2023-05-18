export default function validate(userdata) {
    let errors = {}
if (!/^[^\s@]+@[^\s@]+.[^\s@]/.test(userdata.username)){
    errors.username = "El Nombre de usuario es invalido"
}
if(!userdata.username){
    errors.username = "Este campo no puede estar vacio"
}
if(userdata.username.length > 35){
    errors.username ="El Nombre de usuario no puede superar los 35 caracteres"
}
if(!userdata.password.match(/\d/)){
errors.password = "La contraseña debe contener al menos un numero"
}
if (userdata.password.length < 6 && userdata.password.length >10){
    errors.password = "La contraseña debe contener entre 6 y 10 caracteres"
}
return errors
}