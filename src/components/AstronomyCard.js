import React from 'react';

const AstronomyCard = (props) => {
    const { title, url, hdurl, explanation, date, copyright } = props.data;

    return (
        <div className="astronomy-card">
            <h3 className="astronomy-title">{title}</h3>
            <a href={hdurl} className="astronomy-image-wrapper">
                <img src={url} alt={title} />
            </a>
            <p>{explanation}</p>
            <span>{date}, {copyright}</span>
        </div>
    )
}

export default AstronomyCard;