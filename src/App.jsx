import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Header from './components/Header';
import Upload from './pages/Upload';
import Moment from './pages/Moment';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/moment/:id" element={<Moment />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
