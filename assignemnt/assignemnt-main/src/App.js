import React from 'react';
import { Dashboard,  Profile, Error } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

 


  return (
    <div>
      <BrowserRouter>
      <Routes>
        
        <Route path='/' element={
        
          < Dashboard/>

          }/>
          <Route path='/users/:id' element={<Profile/>}/>
        <Route path='*' element={<Error/>}/>

      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
