import './Collapses.scss';
import Chevron from '../../Assets/images/chevron.png';

function Collapses() {
    return (
        <section>
        <div className="fiabiliteSelect">
        <span className ="fiabiliteOption1">
            <p className ="pFiabiliteOption1">Fiabilté</p>
                <img src= {Chevron} alt ="chevron" className ="chevron" />
            </span>
        <span className ="fiabiliteOption2">
            <p className ="pFiabiliteOption2">Les annonces postées sur Kasa garantissent une 
                                                                            fiabilité totale. Les photos sont conformes aux 
                                                                            logements, et toutes les informations sont 
                                                                            régulièrement vérifiée par nos équipes.</p>
        </span>
        </div>
        <div className="respectSelect">
        <span className ="respectOption1">
            <p className ="pRespectOption1">Respect</p>
            <img src= {Chevron} alt ="chevron" className ="chevron" />
            </span>
        <span className ="respectOption2">
            <p className ="pRespectOption2">La bienveillence fait partie des valeurs fondatrices de Kasa. 
                Tout comportement discrimminatoire ou de perturbation du voisinage 
                entraînera une exclusion de notre plateforme.
        </p>
        </span>
        </div>
        <div className="serviceSelect">
        <span className ="serviceOption1">
            <p className ="pServiceOption1">Service</p>
            <img src= {Chevron} alt ="chevron" className ="chevron" />
            </span>
        <span className ="serviceOption2">
            <p className ="pServiceOption2">Nos équipes se tiennent à votre disposition pour vous fournir 
                une expérience parfaite. Nhésitez pas à nous contacter si vous 
                avez la moindre question.
            </p>
            </span>
        </div>
        <div className="securiteSelect">
        <span className ="securiteOption1">
            <p className ="pSecuriteOption1">Sécurité</p>
            <img src= {Chevron} alt ="chevron" className ="chevron" />
        </span>
        <span className ="securiteOption2">
            <p className ="pSecuriteOption2">La sécurité est la priorité de Kasa. Aussi bien pournos hôtes que pour 
                les voyageurs, chaque logement correspond aux critères de sécurité 
                établis par nos services. En laissant une note aussi bien à l'hôte 
                qu'au locataire, cela permet à nos équipes de vérifier que les 
                standards sont bien respectés. Nous organisons également des ateliers 
                sur la sécurité domestique pour nos hôtes.
            </p>
        </span>
        </div>
        </section>
    )
}
export default Collapses;