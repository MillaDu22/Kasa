import './BannerLogement.css';
import Left from '../../Assets/images/Left.png';
import Right from '../../Assets/images/Right.png';
import { useState } from 'react';
console.log(Left);



function BannerLogement ({images}) {
    let [current, setCurrent] = useState(0);
    let length = images ?? [].length;
    console.log (length);
    const nextImage = () => {
            setCurrent(current === length -1 ? 0 : current +1);
        };
        const previousImage = () => {
                setCurrent (current === 0 ? length - 1 : current - 1);
            };
            if ( !Array.isArray(images) || images.length <= 0) {
                return null
            }

        return  (
            <div className="slider">
                <div className='containerArrows'>
                    <img src = { Left } alt="précécent" className="left" onClick={ nextImage } />
                    <img src = { Right } alt="suivant" className="right" onClick={ previousImage } />
                </div>
                { images.map ((image, index) => {
                        return ( 
                            <div key = { index } className = { index === current ? " slides active" : "slides" } >
                                { index === current && ( <img className = "imgSlider" src= { image } alt="imgSlider" />) }
                                <div className ="counterslide">
                                    { index === current && length  > 1 && (<span className="count"> { current+1 }/{ length }</span>) }
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
        )
}
export default BannerLogement;
