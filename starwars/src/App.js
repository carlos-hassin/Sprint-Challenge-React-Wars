import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import CharacterCard from "./components/CharacterCard";

// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.

// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.
const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios.get("https://corsanywhere.herokuapp.com/https://lambda-swapi.herokuapp.com/api/people/")
    .then(res => {
      console.log(res.data.results)
      setCharacters(res.data.results)
    })
    .catch(error => {
      console.log("Error data not found", error)
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="characters">
      {characters.map(chars => {
        return (
          <CharacterCard
          key={chars.id}
          name={chars.name}
          birth_year={chars.birth_year}
          films={chars.films}
          gender={chars.gender}
          hair_color={chars.hair_color}
          skin_color={chars.skin_color}
          />
        )
      })}
      </div>
    </div>
  );
}

export default App;
