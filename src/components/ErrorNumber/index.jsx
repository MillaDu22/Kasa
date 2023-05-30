import './ErrorNumber.css';
import ErrorPng from '../../Assets/images/404.png';

function ErrorNumber () {
    return (
        <div className ="errorDiv">
            <img src = {ErrorPng} alt="number" className="errorNumber" />
        </div>
    );
}
export default ErrorNumber