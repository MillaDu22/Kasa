
import Header from '../../components/Header/index';
import NavHeader from '../../components/NavHeader/index.jsx';
import BannerAPropos from '../../components/BannerAPropos/index.jsx';
import Fiabilité from '../../components/Fiabilité/index.jsx';
import Respect from '../../components/Respect/index.jsx';
import Service from '../../components/Service/index.jsx';
import Sécurité from '../../components/Sécurité/index.jsx';
import Footer from '../../components/Footer/index.jsx';
import '../AProposPage/AProposPage.css';

function AProposPage() {
    return (
        <div className= "AProposPage">
        <Header />
        <NavHeader />
        <BannerAPropos />
        <Fiabilité />
        <Respect />
        <Service />
        <Sécurité />
        <Footer />
        </div>
    )
}
export default AProposPage








