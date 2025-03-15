import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router'
import { moviesData } from '../moviesData'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

const Trailer = () => {
     //permet de récupérer la partie dynamique de l'url
     const params=useParams()
     //contient le film qui correspond au params
     const [movie,setMovie]=useState({});
     useEffect(()=>{
 setMovie(moviesData.find(el=>el.id===+params.id))}
     ,[params.id])
  return (
    <div>
       <div className='container' style={{backgroundColor:'rgba(211, 211, 211, 0.2)', maxWidth:'100', marginTop:'2%', borderRadius:'20px'}}>
        <h1 style={{textAlign:'center'}}>{movie.title}</h1>
        <div style={{display: 'flex', justifyContent: 'center' }}>
        <iframe src={movie.trailer} style={{margin:'2%'}}/>
        </div>
    </div>
     {/*boutons de navigation vers description ou home*/}
     <Link to={'/'}>
        <div style={{display: 'flex', justifyContent: 'center' }}>
      <Button variant="secondary" style={{marginTop:'1%',width:'150px'}}>Back to Home</Button></div>
      </Link>

      <Link to={`/description/${movie.id}`}>
        <div style={{display: 'flex', justifyContent: 'center' }}>
      <Button variant="secondary" style={{marginTop:'1%', width:'150px'}}>Description</Button></div>
      </Link>
    </div>
  )
}

export default Trailer
