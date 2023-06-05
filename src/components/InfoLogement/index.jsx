
import '../../components/InfoLogement/InfoLogement.scss';
import BannerLogement from '../BannerLogement/index.jsx';
//import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import datasLogements from '../../datasLogements.json';
//import starLight from '../../Assets/images/starLight.png';
//import startFull from '../../Assets/images/starFull.png';
import Rate from '../../Assets/images/Rate.png';
import Chevron from '../../Assets/images/chevron.png'

function InfoLogement () {
    const id = useParams();
    const InfoLogement = datasLogements.find (dataslogement => dataslogement.id=== id.id)
return (
    <>
    {
    <div className= 'infoLogement'>
    <BannerLogement photos = {datasLogements?.photos} />
        <section className="sectionInfo">
            <div className="rowBoxes1">
                <div className="leftBox">
                    <h2 className ="title">Appartement cozy</h2>
                    <h3 className = "location">Paris, île de France</h3>
                    <div className=" containerMotsCles">
                        <span className="motCle">Batignolle</span>
                        <span className="motCle">Montmartre</span>
                    </div>
                </div>
                <div className="rightBox">
                    <div className ="heberger">
                        <span className="nameHeberger">Nathalie JEAN</span>
                        <span className="photoHeberger">
                            <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg" alt="profil" className="photoProfil" />
                        </span>
                    </div>
                    <div className="containerNotation">
                        <img src= {Rate} alt="notation" className="Rating" />
                    </div>
                </div>
            </div>
                <div className="rowBoxes2">
                    <div className="wrapInfo">
                        <input id="collapse5" className="toggleInfo" type="checkbox"/>
                        <label htmlFor = "collapse5" className="labelToggleInfo">
                            <p className="labelTitleInfo">
                                Description
                                <img src = {Chevron} alt="chevronCollapse" className="chevronInfo" />
                            </p>
                        </label>
                        <div className="textInfo">
                            <div className="textInnerInfo">
                                <p className="pTextInfo">
                                    Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, 
                                    ou juste de quelques stations de RER, vous vous sentez chez vous dans 
                                    notre appartement.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="wrapInfo">
                        <input id="collapse6" className="toggleInfo" type="checkbox" />
                        <label htmlFor = "collapse6" className="labelToggleInfo">
                            <p className="labelTitleInfo">
                                Equipements
                                <img src = {Chevron} alt="chevronCollapse" className="chevronInfo" />
                            </p>
                        </label>
                        <div className="textInfo">
                            <div className="textInnerInfo">
                                <div className="pTextInfo">
                                    <nav className="listEquipement">
                                        <ul className="ulList">
                                            <li className= "liList">Equipements de base</li>
                                            <li className= "liList">Micro-onde</li>
                                            <li className= "liList">Douche italienne</li>
                                            <li className= "liList">Frigo</li>
                                            <li className= "liList">WIFI</li>
                                        </ul>
                                    </nav>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
}
</>
) 
}
export default InfoLogement;
