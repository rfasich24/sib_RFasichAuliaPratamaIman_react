import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div className="mt-7 flex flex-col lg:flex-row lg:py-20 justify-between" >
            <div className="mt-10 lg:w-3/5 text-center lg:text-left ">
                <p className="mt-10 text-5xl mb-6">Hi, my name is <br/><strong>R. Fasich Aulia Pratama Iman</strong></p>
                <p className="text-2xl leading-none ">I'm an Informatics student at the University of Jember. I'm a student who has an interest in web development, especially front-end web development. I also have a hobby in design, especially UI UX design</p>
                <div className="flex mt-6 justify-center lg:justify-start space-x-2">
                    <button className="px-4 py-3 border-black rounded-lg border text-black bg-transparent">
                    <Link to="/about">About Me</Link></button>
                    <button className="px-4 py-3 border-black rounded-lg border text-white bg-black">
                    <a href="https://drive.google.com/file/d/1LvO0ttliQnSQzFQCdiql1X0KoJ3Ijdwx/view?usp=sharing">My CV</a></button>
                </div>
            </div>
            <img className="mt-8 lg:mt-0 max-w-lg mx-auto" src="./photo.png" alt="" />
        </div>
    );
}

export default Home;