import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Cards from './components/cards/Cards.jsx';
import Nav from "./components/nav/Nav.jsx";
import Detail from './components/detail/Detail.jsx';
import Form from './components/form/Form';

function App () {
  const location = useLocation()
  const [characters, setCharacters] = useState([])
  function onSearch(character){
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name){
        setCharacters((oldChars) => [...oldChars, data]);
      }else{
        window.alert('No hay personaje con ese ID');
      }
    });
  }
  const onClose = (id) => {
    setCharacters(characters.filter(chard => chard.id !== id));
  }
  return (
    <div className='App'> 
      <div>
        {location.pathname !== '/' && <Nav onsearch={onSearch}/>}
      </div>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route
         path='/Home'
         element= {<Cards characters={characters} onClose={onClose}/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path='/detail/:detailId' element={<Detail/>}/>      
      </Routes>

    </div>
  )
}

export default App
