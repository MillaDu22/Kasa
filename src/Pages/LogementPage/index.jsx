
import Header from '../../components/Header/index';
import NavHeader from '../../components/NavHeader/index.jsx';
import BannerLogement from '../../components/BannerLogement/index.jsx';
import InfoLogement from '../../components/InfoLogement/index.jsx';
import Footer from '../../components/Footer/index.jsx';
import '../LogementPage/LogementPage.css';

function LogementPage() {
    return (
        <div className= "logementPage">
        <Header />
        <NavHeader />
        <BannerLogement />
        <InfoLogement />
        <Footer />
        </div>
    )
}
export default LogementPage
