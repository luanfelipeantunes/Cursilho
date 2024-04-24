import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Container from './app/components/Container.js';
import Header from './app/components/Header.js';
import Events from './app/pages/Events.js';
import NewEvent from './app/pages/NewEvent.js';
import EventEdit from './app/pages/EventEdit.js';
import Login from './app/pages/Login.js';

function App() {

  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          {isAuthorized ?
            <>
              <Route path='/admin/events' element={<Events />} />
              <Route path='/admin/events/new' element={<NewEvent />} />
              <Route path='/admin/events/edit/:id' element={<EventEdit />} />
            </>
            :
            <>
              <Route path='/' element={<Navigate to={'/admin/login'} replace/>} />
              <Route path='/admin/login' element={<Login setIsAuthorized={() => setIsAuthorized(true)} />} />
            </>
          }

        </Routes>
      </Container>
    </Router>
  );
}

export default App;
