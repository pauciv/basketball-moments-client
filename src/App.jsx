import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Header from './components/Header';
import Upload from './pages/Upload';
import Moment from './pages/Moment';
import PrivateRoutes from './routes/PrivateRoutes';
import { useState } from 'react';

function App() {
  const [categoryFilter, setCategoryFilter] = useState();
  
  return (
    <>
      <Header categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />
      <Container>
        <Routes>
          <Route path="/" element={<Home categoryFilter={categoryFilter} />} />
          <Route path="/moment/:id" element={<Moment />} />
          <Route
            path="/upload"
            element={
              <PrivateRoutes>
                <Upload />
              </PrivateRoutes>
            }
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
