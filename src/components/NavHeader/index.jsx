import { Link } from 'react-router-dom';
import '../../Styles/NavHeader.css';

function NavHeader() {
    return (
    <nav className ="navHead">
        <Link className="linkAccueil" to="/">Accueil</Link>
        <Link className= "linkAPropos" to="/AproposPage">A propos</Link>
    </nav>
    )
}
export default NavHeader;