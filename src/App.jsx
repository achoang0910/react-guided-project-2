import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Character from "./Character.jsx";
import CharacterInfo from "./CharacterInfo.jsx";

const url = "http://localhost:3000/characters";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  async function fetchCharacters() {
    const req = await fetch(url);
    const res = await req.json();
    setCharacters(res);
  }
  return (
    <div className={"app"}>
      <h2>
        <Link to="/">React Hooks App </Link>
      </h2>
      <Routes>
        <Route
          path="/"
          element={<CharacterList characters={characters} />}
        ></Route>
        <Route path="/character">
          {characters.map((character) => (
            <Route
              key={character.id}
              path="/character/:id"
              element={<CharacterInfo character={character} />}
            ></Route>
          ))}
        </Route>
      </Routes>
    </div>
  );
}

const CharacterList = ({ characters }) => {
  return (
    <span>
      {characters.map((character) => (
        <Character key={character.id} name={character.name} id={character.id} />
      ))}
    </span>
  );
};

export default App;
