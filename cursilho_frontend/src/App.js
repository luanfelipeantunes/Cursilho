import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './app/components/Header';
import Container from './app/components/Container';
import Home from './app/pages/Home';
import Events from './app/pages/Events';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/events' element={<Events />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
