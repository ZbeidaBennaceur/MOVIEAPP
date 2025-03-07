
 import React from 'react';
 import CardFilm from '../cardFilm/CardFilm';
 import './listFilm.css';



const ListFilm = ({films, rechercheTitre, rechercheRate}) => {
    //Recherche par titre et affichage des films 
  return (
    <div className="ListF">
   {films
   .filter((film)=>film.title.toUpperCase().includes(rechercheTitre.toUpperCase())
  && film.rate>= rechercheRate)
   

   .map((film) => (<CardFilm movie={film} key={film.id} />))}
    </div>
  )
}

export default ListFilm
