import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Container from './app/components/Container.js';
import Header from './app/components/Header.js';
import Events from './app/pages/Events.js';
import NewEvent from './app/pages/NewEvent.js';
import EventEdit from './app/pages/EventEdit.js';
import Login from './app/pages/Login.js';

function App() {
  return (
    <Router>
      <Header/>
      <Container>
        <Routes>
          <Route path='/admin/events' element={<Events/>}/>
          <Route path='/admin/events/new' element={<NewEvent/>}/>
          <Route path='/admin/events/edit/:id' element={<EventEdit/>}/>
          <Route path='/admin/login' element={<Login/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
