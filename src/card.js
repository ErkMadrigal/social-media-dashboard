import React from 'react';

const Card = ({userName, followers, icon, todayfollowers, name}) => {
    const cardClass = `card ${name}`
    return( 
        <article className={cardClass}>
            <p className="card-title">
            <img src={ icon } alt="" />
            { userName }
            </p>
            <p className="card-followers">
            <span className="card-followers-number">{ followers }</span>
            <span className="card-followers-title">{name}</span>
            </p>
            <p className="card-today">
            <img src="images/icon-up.svg" alt="" />
            { todayfollowers } Today
            </p>
        </article>
    );
}

export default Card;