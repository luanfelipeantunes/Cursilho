import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './app/components/Header';
import Container from './app/components/Container';
import Home from './app/pages/Home';
import Events from './app/pages/Events';
import Footer from './app/components/Footer';
import MyCalendar from './app/pages/Calendar/MyCalendar';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/events' element={<Events />} />
          <Route path='/calendar' element={<MyCalendar />} />

        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
