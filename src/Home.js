
import React from 'react'
import {Routes, Route} from 'react-router-dom';
import App from './App';
import Description from './pages/Description';
import Trailer from './pages/Trailer';
import Error from './pages/Error';

const Home = () => {
    //création des routes
  return (
    <div>
      <Routes> 
     {/*page contenant toutes les affiches de film et le nom*/}
      <Route path='/' element={<App/>}></Route>
      {/*description du film recherché*/}
      <Route path='/description/:id' element ={<Description/>}/>
      {/*trailer du film*/}
      <Route path='/trailer/:id' element ={<Trailer/>}/>
      <Route path='/*' element ={<Error/>}/>
      </Routes>
    </div>
  )
}

export default Home
