import React from "react";
import dice from '../images/icon-dice.svg'; 
import divider from '../images/pattern-divider-desktop.svg';
import mobiledivider from '../images/pattern-divider-mobile.svg'; 
import './Advice.css'; 

function Advice({number, quote}){

    return(
        <div className="AdviceCard">
            <h1 className="AdviceNumber">Advice #{number}</h1>
            <p className="Advice">"{quote}"</p>

            <picture >
                <source media='(max-width: 575px)' srcSet={mobiledivider}></source>
                <div className="divider"><img className='Line' src={divider} alt='divider' /></div>
            </picture>

        <button className="diceiconbutton" onClick={() => {document.location.reload()} }>
            <img className="DiceIcon" src={dice} alt="dice-icon"></img>
        </button>

        </div>
    ) 
}

export default Advice; 