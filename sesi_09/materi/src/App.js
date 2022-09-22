import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import AboutHactiv from "./pages/about/AboutHactiv";
import AboutMe from "./pages/about/AboutMe";
import MemberLink from "./pages/members/MemberLink";
import Member from "./pages/members/Member";
import Items from "./pages/data/Items";
import Item from "./pages/data/item";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/login/Login";

function App() {
    return (
        <div className="container">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}>
                    <Route path="about-program" element={<AboutHactiv />} />
                    <Route path="my-profile" element={<AboutMe />} />
                </Route>
                <Route path="/members" element={<MemberLink />}>
                    <Route path=":memberName" element={<Member />} />
                </Route>
                <Route 
                  path="/items"
                  element={
                    <ProtectedRoute>
                      <Items/>
                    </ProtectedRoute>
                  }>
                  <Route path=":itemId" element={<Item/>}/>
                </Route>
                <Route path="/login" element={<Login/>}/>
                {/* <Route path="/items" element={<Items />}> */}
                    {/* <Route path=":itemId" element={<Item />} />
                </Route> */}
            </Routes>
        </div>
    );
}

export default App;
