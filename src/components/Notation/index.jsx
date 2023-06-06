import React from 'react';
import starLight from '../../Assets/images/starLight.png';
import starFull from '../../Assets/images/starFull.png';

function Notation (props) {
    const score = props.score;
    const notes = [1, 2, 3, 4, 5];
    return (
        <div className="containerNotation">{notes.map((note) => score >= note ? (
            <img key= {note.toString()} className="star" src= {starLight} alt= "starLight" />) : (
            <img key= {note.toString()} className="star" src= {starFull} alt="starFull" />)  
        )}
    </div>
    )
}
export default Notation;