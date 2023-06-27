import React from 'react';
import { Dashboard,  Profile, Error, Posts, Gallery, Todo } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

 


  return (
    <div>
      <BrowserRouter>
      <Routes>
        
        <Route path='/' element={< Dashboard/>}/>
        <Route path='/users/:id' element={<Profile/>}/>
        <Route path='/users/:id/posts' element={<Posts/>}/>
        <Route path='/users/:id/gallery' element={<Gallery/>}/>
        <Route path='/users/:id/todo' element={<Todo/>}/>
        <Route path='*' element={<Error/>}/>

      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
