import React, {useState} from 'react'
import {Button, Modal, Form} from 'react-bootstrap'

const AddFilm = ({ rajoutFilm })  => {
  //gérer l'affichage
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

//Stockage des informations du film ajouté
const [title, setTitle]=useState('')
const [description, setDescription]=useState('')
const [rate, setRate]=useState('')
const [posterUrl, setPosterUrl]=useState('')

//fonction pour ajouter un nouveau film et remise a vide des champs
const handleAdd=()=>{
    const id=Math.random();
    const newFilm={ title, description, rate, posterUrl};
    rajoutFilm(newFilm);
    handleClose();
    setTitle("");
    setDescription("");
    setRate("");
    setPosterUrl("");
}
  return (
    <div>
        
       <Button variant="primary" style={{margin:'2em'}}onClick={handleShow}>
        Add movie
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your movie</Modal.Title>
        </Modal.Header>
        <Form style={{margin:'2em'}}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Movie title" 
        value={title} onChange={(e)=>setTitle(e.target.value)}/>
       </Form.Group>
       <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Movie's description"
        value={description} onChange={(e)=>setDescription(e.target.value)}/>
        
       </Form.Group>
       <Form.Group className="mb-3">
        <Form.Label>Rate</Form.Label>
        <Form.Control type="number" 
  placeholder="From 1 to 5" 
  min="1" 
  max="5" 
  step="1" 
        value={rate} onChange={(e)=>setRate(e.target.value)}/>
        
       </Form.Group> 
       <Form.Group className="mb-3">
        <Form.Label>Poster</Form.Label>
        <Form.Control type="text" placeholder="Poster's movie"
        value={posterUrl} onChange={(e)=>setPosterUrl(e.target.value)} />
        
       </Form.Group>        


   
    </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddFilm
