
import '../../Styles/Card.css'

function Card({title, cover }) {
    return (
            <div className="cardGallery">
                <img src={cover} alt="Logement" className="coverCard"/>
                <span class="titleCard">{title}</span>
            </div>
    )
}
export default Card



