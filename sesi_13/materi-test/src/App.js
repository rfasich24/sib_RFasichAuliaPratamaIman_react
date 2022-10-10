import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Users from './pages/UserList';
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className=''>
      <Container className='mt-5'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="users" element={<Users/>}/>
        </Routes>
        <hr/>
        <p>2022 - R. Fasich RCTN-KS05-013</p>
      </Container>
    </div>
  );
}

export default App;
