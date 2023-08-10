import './App.css';
import Card from './components/card/Card.jsx';
import Cards from './components/cards/Cards.jsx';
import SearchBar from './components/searchbar/SearchBar.jsx';
import characters, { Rick } from "./data.js";

function App () {
  return (
    <div className='App' style={{ padding: "25px" }}> 
      <div>
        <SearchBar onSearch={(charactersID) => window.alert("carac")}></SearchBar>
      </div>
      <hr />  
      <div style={{ 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      >
       <Card
        id={Rick.id}
        name={Rick.name}
        species={Rick.species}
        gender={Rick.gender}
        image={Rick.image}
        onClose={() => window.alert('simulamos se cierra la card')}
        /> 
      </div>
      <hr />
      <div>
        <Cards characters={characters} />
      </div>
    </div>
    );
   }  


  export default App;
