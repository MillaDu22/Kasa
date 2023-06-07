import React, {useState} from "react";
import './Collapses.scss';
import chevron from "../../Assets/images/chevron.png";
import '../Collapse/Collapse.scss';


function Collapses () {
    const [isOpen , setIsOpen] = useState(false);/*état du toggle par défaut*/
    const display = () => {
        setIsOpen(!isOpen);
    };
    return (
        <section className="sectionCollapses">
            <div className="wrap">
                <input id="collapse1" className="toggle" type="checkbox"/>
                <label htmlFor = "collapse1" className="labelToggle">
                    <p className="labelTitle" onClick={display}>
                        Fiabilité
                        {isOpen ? (<img src={chevron} className="chevron-up" alt="up" />) :
                        (<img src={chevron} className="chevron-down"alt="down"/>)}
                    </p>
                </label>
                <div className="collapseText">
                    <div className="textInner1">
                    {isOpen && 
                        <p className="pText">
                        Les annonces postées sur Kasa garantissent une 
                        fiabilité totale. Les photos sont conformes aux 
                        logements, et toutes les informations sont 
                        régulièrement vérifiée par nos équipes.
                        </p>}
                    </div>
                </div>
            </div>
            <div className="wrap">
                <input id="collapse2" className="toggle" type="checkbox" />
                <label htmlFor = "collapse2" className="labelToggle">
                    <p className="labelTitle" onClick={display}>
                        Respect
                        {isOpen ? (<img src={chevron} className="chevron-up" alt="up" />) :
                        (<img src={chevron} className="chevron-down"alt="down"/>)}
                    </p>
                </label>
                <div className="collapseText">
                    <div className="textInner2">
                    {isOpen && 
                        <p className="pText">
                            La bienveillence fait partie des valeurs fondatrices de Kasa. 
                            Tout comportement discrimminatoire ou de perturbation du voisinage 
                            entraînera une exclusion de notre plateforme.
                        </p>}
                    </div>
                </div>
            </div>
            <div className="wrap">
                <input id="collapse3" className="toggle" type="checkbox" />
                <label htmlFor = "collapse3" className="labelToggle">
                    <p className="labelTitle" onClick={display}>
                        Service
                        {isOpen ? (<img src={chevron} className="chevron-up" alt="up" />) :
                        (<img src={chevron} className="chevron-down"alt="down"/>)}
                    </p>
                </label>
                <div className="collapseText">
                    <div className="textInner3">
                    {isOpen && 
                        <p className="pText">
                            Nos équipes se tiennent à votre disposition pour vous fournir 
                            une expérience parfaite. Nhésitez pas à nous contacter si vous 
                            avez la moindre question.
                        </p>}
                    </div>
                </div>
            </div>
            <div className="wrap">
                <input id="collapse4" className="toggle" type="checkbox" />
                <label htmlFor = "collapse4" className="labelToggle">
                    <p className="labelTitle" onClick={display}>
                        Sécurité
                        {isOpen ? (<img src={chevron} className="chevron-up" alt="up" />) :
                        (<img src={chevron} className="chevron-down"alt="down"/>)}
                    </p>
                </label>
                <div className="collapseText">
                    <div className="textInner4">
                    {isOpen && 
                        <p className="pText">
                            La sécurité est la priorité de Kasa. Aussi bien pournos hôtes que pour 
                            les voyageurs, chaque logement correspond aux critères de sécurité 
                            établis par nos services. En laissant une note aussi bien à l'hôte 
                            qu'au locataire, cela permet à nos équipes de vérifier que les 
                            standards sont bien respectés. Nous organisons également des ateliers 
                            sur la sécurité domestique pour nos hôtes.
                        </p>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collapses;