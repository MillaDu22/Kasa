import '../Error/Error.css';
import Header from '../../components/Header/index';
import NavHeader from '../../components/NavHeader/index.jsx';
import ErrorNumber from '../../components/ErrorNumber/index.jsx';
import Oups from '../../components/Oups/index.jsx';
import ErrorReturnHome from '../../components/ErrorReturnHome/index.jsx';
import Footer from '../../components/Footer/index.jsx';

function Error() {
    return (
        <div className= "errorPage">
        <Header />
        <NavHeader />
        <ErrorNumber />
        <Oups />
        <ErrorReturnHome />
        <Footer />
        </div>
    )
}
export default Error
