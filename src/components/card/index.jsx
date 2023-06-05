import '../card/index.scss';
import {Link } from 'react-router-dom';
export default function Card ({id, cover, title}) {
    return (
        <Link to = { `/LogementPage/${id}`} className= "linkCard">
            <img src ={cover} alt = "coverCard" className="coverCard"/>
            <h3 className= "titleCard">{ title }</h3>
        </Link>
    )
}