import { Link } from 'react-router-dom';
import './NavHeader.css';

function NavHeader() {
    return (
    <nav className ="navHead">
        <Link className="linkAccueil" to="/" exact>Accueil</Link>
        <Link className= "linkAPropos" to="/AproposPage">A propos</Link>
    </nav>
    )
}
export default NavHeader;