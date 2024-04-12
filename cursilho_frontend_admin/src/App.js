import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Container from './app/components/Container.js';
import SideBar from './app/components/SideBar.js';
import Header from './app/components/Header.js';
import Events from './app/pages/Events.js';
import NewEvent from './app/pages/NewEvent.js';

function App() {
  return (
    <Router>
      <Header/>
      <Container>
        <Routes>
          <Route path='/admin/events' element={<Events/>}/>
          <Route path='/admin/events/new' element={<NewEvent/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
