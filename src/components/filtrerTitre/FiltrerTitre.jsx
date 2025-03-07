import React from 'react'
import {Form} from 'react-bootstrap'

const FiltrerTitre = ({rechercheTitre, setRechercheTitre}) => {
  return (
    <div>
      <Form.Control style={{margin:'auto', marginTop:'2rem', width:'80%', }} type="text" placeholder="Search by title"
      value={rechercheTitre}
      onChange={(e)=>setRechercheTitre(e.target.value)}
      />
    
    </div>
  )
}

export default FiltrerTitre
