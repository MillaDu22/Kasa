import './BannerAPropos.css';
import ImgBannerApropos from '../../Assets/images/imgBannerAPropos.png'

function BannerAPropos() {
    return (
        <div className='bannerAPropos'>
            <img src={ImgBannerApropos} alt="moutain" className="imgBannerAPropos" />
        </div>
    );
}

export default BannerAPropos
