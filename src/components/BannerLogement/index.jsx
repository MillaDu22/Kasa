import './BannerLogement.css';
import Left from '../../Assets/images/Left.png'
import Right from '../../Assets/images/Right.png'
import ImageTest from '../../Assets/images/Background-test-slider.png';
//import datasLogements from '../../datasLogements.json';
//import { useState } from 'react';

/*function BannerLogement ({photos}) {
    let [imageDisplay,imageChange] = useState(0);
    let imageNumber =photos?? [].length;
    console.log(imageNumber)
    const nextImage = () => {
        if (imageDisplay === imageNumber -1) {
            imageChange(imageNumber=0);
        }
        else {
            imageChange(imageDisplay +1);
        }
    }
        const previousImage = () => {
            if (imageDisplay === 0) {
                imageChange(imageNumber -1) 
            }
            else {
                imageChange(imageDisplay -1)
            }
            return (imageChange);
        }
        return  (
            <div className="slider">
                <div className='containerArrows'>
                {
                    imageNumber > 1 && <img src = { Left } alt="précécent" className="Left" onClick={nextImage}/>
                }
                {
                    imageNumber > 1 && <img src = { Right } alt="suivant" className="right" onClick={previousImage}/>
                }
                </div>
                {
                    datasLogements.photos??[].map ((photos, index) => {
                        return (
                            <img key = {index} className= {index === imageDisplay ? 'imgSlider active': 'imgSlider'}src= {photos} alt="imgSlider" />
                        )
                    })
                }
                <div className ="counterslide">
                    <span className="count">1/4</span>
                </div>
            </div>
    )
}
export default BannerLogement;*/
function BannerLogement () {
        return (
        <div className="slider">
        <div className='containerArrows'>
        <img src = { Left } alt="précécent" className="left" />
        <img src = { Right } alt="suivant" className="right" />
        </div>
        <img src ={ImageTest} alt="imgslider" className="imgSlider" />
        <div className ="counterslide">
            <span className="count">1/4</span>
        </div>
    </div>
    )
}
export default BannerLogement;
