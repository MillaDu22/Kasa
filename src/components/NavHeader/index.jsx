import { Link } from 'react-router-dom';
import './NavHeader.css';

function NavHeader() {
    return (
    <nav className ="navHead">
        <Link className="linkAccueil" to="/kasa/src/pages/home" exact="true">Accueil</Link>
        <Link className= "linkAPropos" to="/kasa/src/pages/a-propos-page">A propos</Link>
    </nav>
    )
}
export default NavHeader;