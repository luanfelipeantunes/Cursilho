import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Container from './app/components/Container.js';
import SideBar from './app/components/SideBar.js';
import Header from './app/components/Header.js';

function App() {
  return (
    <Router>
      <Header/>
      <Container>
        
      </Container>
    </Router>
  );
}

export default App;
