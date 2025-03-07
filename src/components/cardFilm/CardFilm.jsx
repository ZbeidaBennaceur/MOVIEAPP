import React from 'react'
import {Card, Button} from 'react-bootstrap';
import './cardFilm.css'
import Rating from '../filtrerRate/FiltrerRate';

        
const CardFilm = ({movie}) => {
  //carte contenat les champs de chaque film
  return (
    <div className='Carte'>
      {""}
      <Card style={{ width: '18rem', height:'50rem'}}>
      <Card.Img className='image' variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title className='titre'>{movie.title}</Card.Title>

        <Rating isRating={false} rate={movie.rate}/>
        
        <Card.Text className='description'>
          {movie.description}
        </Card.Text>
        
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardFilm

