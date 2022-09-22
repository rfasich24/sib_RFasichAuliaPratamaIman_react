import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    let [navBarCss, setnavBarCss] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            if (window.scrollY !== 0) {
                setnavBarCss("drop-shadow-sm");
            }else{
                setnavBarCss("");
            }
        });


    });

    return (
        <div
            className={
                "py-4 px-4 lg:px-20 xl:px-40 bg-black w-full fixed flex justify-between left-0 top-0 " +
                navBarCss
            }
        >
                <img src="./Logo.ico" width={55} alt="Logo"/>
            <ul className="flex font-medium text-lg text-gray-500 items-center">
                <li className="ml-4 cursor-pointer hover:text-white">
                <Link to="/">Home</Link>
                </li>
                <li className="ml-4 cursor-pointer hover:text-white">
                <Link to="/experience">Experience</Link>
                </li>
                <li className="ml-4 cursor-pointer hover:text-white">
                <Link to="/skills">Skills</Link>
                </li>
                <li className="ml-4 cursor-pointer hover:text-white">
                <Link to="/awards">Awards</Link>
                </li>
                <li className="ml-4 cursor-pointer hover:text-white">
                <Link to="/interest">Interest</Link>
                </li>
                <li className="ml-4 cursor-pointer hover:text-white">
                <Link to="/about">About Me</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
