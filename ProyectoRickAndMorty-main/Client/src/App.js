import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import { useState,useEffect } from 'react'
import { Routes,Route,useLocation, useNavigate } from 'react-router-dom'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'


function App () {
  const navigate = useNavigate()
  const [characters,setCharacters] = useState([])
  const [access,setAccess] = useState(false)

  const username = 'sebastian@yahoo.com';
  const username1= 'marcelo@yahoo.com';
  const username2= 'ivan@yahoo.com';
  const password = '123456';

  const login = (userData)=>{
    if (userData.password === password && userData.username === username ||userData.username === username1 ||userData.username === username2) {
      setAccess(true);
      navigate('/home');
   }
  }

  useEffect(() => {
   !access && navigate('/')
}, [access]);

  const onSearch = (character)=>{
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters([...characters, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }
  

   const onClose = (id)=>{
    const filtrados = characters.filter((personaje)=>personaje.id !== id)
    setCharacters(filtrados)
   }

   const location = useLocation();

  return (
    <div className='App' style={{ padding: '25px' }}>

      {location.pathname === '/' ? null : <Nav onSearch={onSearch}/>}

      <Routes>
      <Route path="/home" element={<Cards
        characters={characters}
        onClose={onClose}
      />} />
      
      <Route path="/" element={<Form login={login} />}/>

      <Route path="/about" element={<About />} />

      <Route path="/detail/:detailId" element={<Detail />} />

      <Route path="/favorites" element={<Favorites />} />
      
      </Routes>
    </div>
  )
}

export default App
