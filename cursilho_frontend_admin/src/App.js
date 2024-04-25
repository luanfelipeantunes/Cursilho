
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from './app/components/Container.js';
import Header from './app/components/Header.js';
import Events from './app/pages/Events.js';
import NewEvent from './app/pages/NewEvent.js';
import EventEdit from './app/pages/EventEdit.js';
import Login from './app/pages/Login.js';
import RequestLogin from './app/utils/Auth/RequestLogin.js';

function App() {


  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path='/admin/events' element={<RequestLogin> <Events /> </RequestLogin>} />

          <Route path='/admin/events/new' element={<RequestLogin> <NewEvent /> </RequestLogin>} />

          <Route path='/admin/events/edit/:id' element={<RequestLogin> <EventEdit /> </RequestLogin>} />

          <Route path='/admin/login' element={<Login />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
