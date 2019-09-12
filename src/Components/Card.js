import React from 'react';



const Card = (props) => {
    return (
        <div>
            {/* Naming conventions between this page and cardlist matter!!! */}
            <h1>{props.title}</h1>
            <h2>{props.date}</h2>
            <img src={props.img} alt='space' />
            <p>{props.explanation}</p>
        </div>
    )
}
export default Card;