import './BannerLogement.css';
import Left from '../../Assets/images/Left.png'
import Right from '../../Assets/images/Right.png'
import fondTest from '../../Assets/images/Background-test-slider.png'

function BannerLogement () {
    return (
    <div className="slider">
        <div className='containerArrows'>
        <img src ={ Left } alt="LeftSlider" className="left" />
        <img src ={ Right } alt="RightSlider" className="right" />
        </div>
        <img src ={ fondTest } alt="imgslider" className="imgSlider" />
        <div className ="counterslide">
            <span className="count">1/4</span>
        </div>
    </div>
    )
}
export default BannerLogement;