const AboutMe = () => {
    return (
        <div className="pt-24 pb-16" id="contact">
            <div className=" grid grid-cols-1 gap-x-14 lg:grid-cols-2">
                <div className="text-lg">
                    <h2 className="font-bold text-3xl mb-8">My Social Media</h2>
                    <a
                        className="font-bold"
                        href="https://www.linkedin.com/in/rfasich24"
                    >
                        Linkedin
                    </a>{" "}
                    <br/>
                    <a
                        className="font-bold"
                        href="https://www.instagram.com/r.fasich24/"
                    >
                        Instagram
                    </a>{" "}
                    <br/>
                    <a
                        className="font-bold"
                        href="pratama.fasih24@gmail.com"
                    >
                        Email
                    </a>{" "}
                    </div>
            </div>
        </div>
    );
};

export default AboutMe;
