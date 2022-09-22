const SkillCard = (props) => {
    return ( <div className="mt-4 w-full flex flex-col justify-start mb-4  ">
        <img src={props.imgSrc} className={props.className} alt="" />
        <h3 className="mt-6 font-bold">{props.skill}</h3>
        <p className="mt-4">{props.detail}</p>
    </div> );
}
 
export default SkillCard;