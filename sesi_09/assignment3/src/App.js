import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Skills from "./Pages/Skills";
import AboutMe from "./Pages/AboutMe";
import Experience from "./Pages/Experience";
import Interest from "./Pages/Interest";
import Awards from "./Pages/Awards";


function App() {
  return (
    <>
    <div className="px-4 pt-16 lg:px-20 xl:px-40" id="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/interest" element={<Interest/>}/>
        <Route path="/awards" element={<Awards/>}/>
      </Routes>
    </div>
    </>
    
  );
}

export default App;
