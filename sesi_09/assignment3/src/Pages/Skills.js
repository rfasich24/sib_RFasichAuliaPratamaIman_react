import SkillCard from "../Components/SkillCard";

const Skills = () => {
    return (
        <div className="pt-24 pb-16" id="skills">
            <h2 className="font-bold text-3xl">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-x-12 gap-y-8">
                <SkillCard
                    skill="Front-End Web Development"
                    className="w-16"
                    imgSrc="./React.png"
                    detail="Develop website on Frontend side using ReactJs"
                ></SkillCard>
                <SkillCard
                    skill="UI Design"
                    className="w-10"
                    imgSrc="./figma.svg"
                    detail="Design an Apps Interface using figma"
                ></SkillCard>
                <SkillCard
                    skill="UI Design"
                    className="w-10"
                    imgSrc="./figma.svg"
                    detail="Design an Apps Interface using figma"
                ></SkillCard>
                <SkillCard
                    skill="UI Design"
                    className="w-10"
                    imgSrc="./figma.svg"
                    detail="Design an Apps Interface using figma"
                ></SkillCard>
            </div>
        </div>
    );
};

export default Skills;
