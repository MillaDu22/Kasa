import '../../components/InfoLogement/InfoLogement.scss';
import Rate from '../../Assets/images/Rate.png';
import Chevron from '../../Assets/images/chevron.png'

function InfoLogement () {
    return (
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
            <div className = "descriptionSelect">
                <span className="descriptionOption1">Description<img src={Chevron} alt="collapse" className="chevronCollapse" /></span>
                <span className=" descriptionOption2">Votre maison loin de chez vous. 
                    Que vous veniez de l'autre bout du monde, ou juste de quelques 
                    stations de RER, vous vous sentez chez vous dans notre appartement.
                </span>
            </div>
            <div className = "equipementSelect">
                <span className="equipementOption1">Equipements<img src={Chevron} alt="collapse" className="chevronCollapse" /></span>
                <span className=" equipementOption2">
                    <nav className="listEquipement">
                        <ul className="ulList">
                            <li className= "liList">Equipements de base</li>
                            <li className= "liList">Micro-onde</li>
                            <li className= "liList">Douche italienne</li>
                            <li className= "liList">Frigo</li>
                            <li className= "liList">WIFI</li>
                        </ul>
                    </nav>
                </span>
            </div>
            </div>
        </section>
    )
}
export default InfoLogement