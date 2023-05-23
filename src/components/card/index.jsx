import PropTypes from 'prop-types'
import '../../Styles/Card.css'

function Card({ title, picture}) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15, background:'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%' }}>
            <img src={picture} alt="freelance" height={340} width={340} />
            <span>{title}Titre de la location</span>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    picture: PropTypes.string,
}

export default Card