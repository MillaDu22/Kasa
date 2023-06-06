import React from 'react';
function Heberger (props) {
    return (
    <>
    <div className ="heberger">
        <span className="nameHeberger">{props.name}</span>
        <span className="photoHeberger">
            <img src= {props.image} alt="profil" className="photoProfil" />
        </span>
    </div>
    </>
    )
}
export default Heberger;