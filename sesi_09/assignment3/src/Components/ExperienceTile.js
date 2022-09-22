const ExperienceTile = (props) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-16">
            <div className="">
                <h3 className="font-bold text-xl">{props.title}</h3>
                <p className="text-gray-500 mt-2">{props.subtitle}</p>
                <p className="mt-4">{props.desc}</p>
            </div>
            <div
                className="rounded-2xl mt-0 lg:mt-0"
                style={{
                    backgroundImage: `url(${props.src})`,
                    height: 300,
                    backgroundSize: "cover",
                }}
            ></div>
        </div>
    );
};

export default ExperienceTile;
