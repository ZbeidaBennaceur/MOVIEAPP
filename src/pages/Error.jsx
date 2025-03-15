import React from 'react' 
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <div style={{display:'flex', flexDirection: "column",alignItems:'center' ,justifyContent:'center'}}>
      <h3 style={{marginTop:'1%'}}> Oops... Il semble qu'il y a une erreur </h3>
      <Link to={'/'}>
      <Button variant="secondary" style={{marginTop:'1%'}}>Back to Home</Button>
      </Link>
    </div>
  )
}

export default Error
