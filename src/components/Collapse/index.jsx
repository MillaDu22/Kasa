import React, {useState} from "react";
import chevron from "../../Assets/images/chevron.png";


const Collapse =({title, content}) => {
    const [isOpen , setIsOpen] = useState(false);/*état du toggle par défaut*/
    const display = () => {
        setIsOpen(!isOpen);
    };
    return(
        <div className="wrapInfo">
            <input type="checkbox" id="collapse" className="toggleInfo" />
            <label htmlFor="collapse" className="labelToggleInfo">
                <p className=" labelTitleInfo" onClick ={display}>{title}
                    {isOpen ? (<img src={chevron} className="chevron-up" alt="up" />) :
                    (<img src={chevron} className="chevron-down"alt="down"/>)}
                </p>
            </label>
            <div className ="textInfo">
                <div className="textInnerInfo">
                    {isOpen && <div className="pTextInfo">{content}
                </div>
                }
            </div>
        </div>
        </div>
    )
}
export default Collapse;
