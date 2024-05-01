
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from './app/components/Container.js';
import Header from './app/components/Header.js';
import Events from './app/pages/Events.js';
import NewEvent from './app/pages/NewEvent.js';
import EventEdit from './app/pages/EventEdit.js';
import Login from './app/pages/Login.js';
import RequestLogin from './app/utils/Auth/RequestLogin.js';
import { AuthProvider } from './app/utils/Auth/AuthContext.js';

function App() {


  return (
    <Router>
      <AuthProvider>
        <RequestLogin>
          <Header />
        </RequestLogin>
        <Container>
          <Routes>
            <Route path='/admin/events' element={<RequestLogin> <Events /> </RequestLogin>} />
            <Route path='/admin/events/new' element={<RequestLogin> <NewEvent /> </RequestLogin>} />
            <Route path='/admin/events/edit/:id' element={<RequestLogin> <EventEdit /> </RequestLogin>} />
            <Route path='/' element={<Login />} />
          </Routes>
        </Container>
      </AuthProvider>
    </Router>
  );
}

export default App;
