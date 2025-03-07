
 import { useState } from 'react';
 import './App.css';
 import ListFilm from './components/listFilm/ListFilm';
 import { moviesData } from './moviesData';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import AddFilm from './components/addFilm/AddFilm';
 import FiltrerTitre from './components/filtrerTitre/FiltrerTitre';
 import FiltrerByRate from './components/filtrerRate/FiltrerRate.jsx';

function App() {
 
 const [films,setFilms]=useState(moviesData);
 const [rechercheTitre,setRechercheTitre]=useState("");
 const [rechercheRate, setRechercheRate]=useState(1);
 const rajoutFilm=(newFilm)=>{
  setFilms([...films, newFilm]);
 }
 
  return (
    <div className="App">
      <h1 className="titre">Movie App</h1>
       {/* recherche par titre */}
      <FiltrerTitre rechercheTitre={rechercheTitre} setRechercheTitre={setRechercheTitre}/>
      {/* recherche par rate */}

      <FiltrerByRate
      rechercheRate={rechercheRate} 
      setRechercheRate={setRechercheRate}
      isRating={true}/>
      {/*ajout d'un film*/}
      <AddFilm rajoutFilm={rajoutFilm}/>
      <ListFilm films={films} rechercheTitre={rechercheTitre} rechercheRate={rechercheRate}/>
    </div>
  );
}

export default App;
