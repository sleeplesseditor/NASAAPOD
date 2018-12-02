import React from 'react';
import Moment from 'react-moment';
import { SimpleShareButtons } from "react-simple-share";

const AstronomyCard = (props) => {
    const { title, url, hdurl, explanation, date, copyright } = props.data;

    return (
        <div className="astronomy-card">
            <h2 className="astronomy-title">{title}</h2>
            <a href={hdurl} className="astronomy-image-wrapper">
                <img src={url} alt={title} />
            </a>
            <p>{explanation}</p>
            <span>
                &copy; {copyright}, &nbsp;
                <Moment format="DD/MM/YYYY">
                    {date}
                </Moment> 
            </span>
            <SimpleShareButtons
                url={url}
                whitelist={
                    ["Facebook", "Twitter", "Tumblr", "Pinterest", "Reddit"]
                }
                size="40px"
            />

        </div>
    )
}

export default AstronomyCard;

