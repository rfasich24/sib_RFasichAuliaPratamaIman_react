import NavbarTop from "./components/nav/navbarTop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import CreateMeetUp from "./components/page/CreateMeetup";
import Dashboard from "./components/page/Dashboard";
import Blog from "./components/page/Blog";

function App() {
    return (
        <>
            <Router>
                <NavbarTop />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/home" element={<Dashboard />} />
                    <Route path="/create-meetup" element={<Blog />} />
                    <Route path="/explore" element={<Blog />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
