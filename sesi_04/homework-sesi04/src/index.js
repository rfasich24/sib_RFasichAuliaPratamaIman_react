import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarTop from "./components/navbarTop";
import MetUp from "./components/metup";
import Hactiv8 from "./components/hactiv8";
import About from "./components/about";
import Members from "./components/member";
import Past from "./components/past";
import Footer from "./components/footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <NavbarTop />
        <Hactiv8 />
        <MetUp />
        <About />
        <Members />
        <Past />
        <Footer />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
