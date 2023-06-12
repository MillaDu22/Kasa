
import Header from '../../components/Header/index';
import NavHeader from '../../components/NavHeader/index.jsx';
import BannerLogement from '../../components/BannerLogement/index.jsx';
import InfoLogement from '../../components/InfoLogement/index.jsx';
import Footer from '../../components/Footer/index.jsx';
import './LogementPage.css';
import  datasLogements from '../../datasLogements.json';
import {useParams} from "react-router-dom";

function LogementPage() {
    const id = useParams(); 
const ficheLogement = datasLogements.find ((dataslogement) => dataslogement.id=== id.id);
    return (
        <div className= "logementPage">
        <Header />
        <NavHeader />
        <BannerLogement images = { ficheLogement?.photos } />
        <InfoLogement />
        <Footer />
        </div>
    )
}
export default LogementPage
