import './Banner.css';
import ImgBanner from '../../Assets/images/cestpaslaplayadelacostadelsol.png'

function Banner() {
    return (
        <div className="banner">
            <img src= {ImgBanner} alt="costa" className="imgBanner" />
            <h2 className="titleBanner">Chez vous, partout et ailleurs</h2>
        </div>
    )
}

export default Banner
