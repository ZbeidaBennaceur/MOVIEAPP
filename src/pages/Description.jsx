import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router'
import { moviesData } from '../moviesData'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
 

const Description = () => {
    //permet de récupérer la partie dynamique de l'url
    const params=useParams()
    //contient le film qui correspond au params
    const [movie,setMovie]=useState({});
    useEffect(()=>{
setMovie(moviesData.find(el=>el.id===+params.id))}
    ,[params.id])
  return (
    <div className='container' style={{backgroundColor:'rgba(211, 211, 211, 0.2)', width:'30%', marginTop:'2%', borderRadius:'20px'}}>
        <h1 style={{textAlign:'center'}}>{movie.title}</h1>
        <div style={{display: 'flex', justifyContent: 'center' }}>
        <img src={movie.posterUrl} style={{width:'300px', margin:'2%'}}/>
        </div>
        <p>{movie.description}</p>

        {/*boutons de navigation vers trailer ou home*/}
        <Link to={'/'}>
        <div style={{display: 'flex', justifyContent: 'center' }}>
      <Button variant="secondary" style={{marginTop:'1%',width:'150px'}}>Back to Home</Button></div>
      </Link>

      <Link to={`/trailer/${movie.id}`}>
        <div style={{display: 'flex', justifyContent: 'center' }}>
      <Button variant="secondary" style={{marginTop:'1%', width:'150px'}}>Trailer</Button></div>
      </Link>
    </div>
  )
}

export default Description
