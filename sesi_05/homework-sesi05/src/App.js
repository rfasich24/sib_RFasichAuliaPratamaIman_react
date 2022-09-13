import About from "./components/about";
import Members from "./components/member";
import Footer from "./components/footer";
import NavbarTop from "./components/navbarTop"
import Hactiv8 from "./components/hactiv8"
import Past from "./components/past"
import MetUp from "./components/metup";

function App() {
    return (
        <>
            <NavbarTop />
            <Hactiv8 />
            <MetUp />
            <About />
            <Members />
            <Past />
            <Footer />
        </>
    );
}

export default App;
