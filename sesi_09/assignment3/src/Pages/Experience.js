import ExperienceTile from "../Components/ExperienceTile";

const Experience = () => {
    return (
        <div className="pt-20 pb-16" id="projects">
            <h2 className="text-3xl font-bold mb-6">My Experience</h2>
            <div className="flex flex-col gap-16">
                <ExperienceTile
                    title="PPMB Fasilkom 2022 Committee"
                    subtitle="Coordinator of Publication, Decoration, and Documentation"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Morbi tincidunt augue interdum velit euismod."
                    src="https://images.unsplash.com/photo-1660194296643-5e375035961e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                ></ExperienceTile>
                <ExperienceTile
                    title="UIUX Training Committee"
                    subtitle="Coordinator of Publication, Decoration, and Documentation"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Morbi tincidunt augue interdum velit euismod."
                    src="https://images.unsplash.com/photo-1660194296643-5e375035961e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                ></ExperienceTile>
                <ExperienceTile
                    title="Sociable – GEMASTIK XIV Software Development"
                    subtitle="Contribute as System Designer"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Morbi tincidunt augue interdum velit euismod."
                    src="https://images.unsplash.com/photo-1660194296643-5e375035961e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                ></ExperienceTile>
            </div>
        </div>
    );
};

export default Experience;
