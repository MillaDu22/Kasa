import { Navigate} from 'react-router-dom';
import '../../components/InfoLogement/InfoLogement.scss';
import {useParams} from "react-router-dom";
import datasLogements from '../../datasLogements.json';
import Heberger from '../Heberger/index.jsx';
import Notation from '../../components/Notation/index.jsx';
import Tag from '../../components/Tags/index.jsx';
import Collapse from '../../components/Collapse/index.jsx';

const InfoLogement = () => {
    const id = useParams(); 
    const ficheLogement = datasLogements.find ((dataslogement) => dataslogement.id=== id.id);
    const TagsLogement = ficheLogement?.Tags.map ((Tags, i) => {
        return <Tag key = {i} title = {Tags} />
    })
    const EquipementsLogement = ficheLogement?.equipements.map((equipement, i) => {
        return  (
            <nav className="listEquipement">
                <ul key = {i}>
                    <li>{equipement}</li>
                </ul>
            </nav>
        )
        });
        return (
            <>
            {ficheLogement ? (
                <div className= 'infoLogement'>
                    <section className="sectionInfo">
                        <div className="rowBoxes1">
                            <div className="leftBox">
                                <h2 className ="title">{ ficheLogement?.title }</h2>
                                <h3 className = "location">{ ficheLogement?.location }</h3>
                                <div className=" containerMotsCles">{TagsLogement}</div> 
                            </div>
                            <div className="rightBox">
                                <div className ="heberger">
                                    <Heberger name = { ficheLogement?.héberger.nom } image= {ficheLogement?.héberger.image} />
                                </div>
                                <div className="containerNotation">
                                    <Notation score = {ficheLogement.note} />
                                </div>
                            </div>
                        </div>
                        <div className="rowBoxes2">
                            <Collapse title = "Description" content={ficheLogement?.description} />
                            <Collapse title = "Equipements" content={EquipementsLogement} />
                        </div>
                    </section>
                </div>
                ): ( <Navigate replace to ="/Error" /> )
            }
        </>
    );
};
export default InfoLogement;

