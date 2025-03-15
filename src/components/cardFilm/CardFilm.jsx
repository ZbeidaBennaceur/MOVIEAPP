import React from 'react'
import {Card, Button} from 'react-bootstrap';
import './cardFilm.css'
import Rating from '../filtrerRate/FiltrerRate';
import {Link} from 'react-router-dom';

        
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
        <Link to={`/description/${movie.id}`}>
        <Button variant="primary" style={{margin:'1%'}}>Description</Button>
        </Link>
        <Link to={`/trailer/${movie.id}`}>
        <Button variant="primary" style={{margin:'1%'}}>Trailer</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardFilm

