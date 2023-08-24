import classes from "./Card.module.css"
function Card(props) {
    return <div className={`${classes.outline} ${props.classNamee}`}>{props.children}</div>
    //return <div className={props.classNamee}>{props.children}</div>
}

export default Card;