import { Link } from 'react-router-dom';
import '../../components/ErrorReturnHome/ErrorReturnHome.css';

function ErrorReturnHome () {
    return (
        <div className ="errorReturnHome">
            <Link className="linkReturnHome" to="/" exact="true">Retourner sur la page d'accueil</Link>
        </div>
    );
}
export default ErrorReturnHome