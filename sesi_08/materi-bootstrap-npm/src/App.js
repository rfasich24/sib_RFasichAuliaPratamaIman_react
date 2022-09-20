import './App.css';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header/>
    <div className="container">
      <Content/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
