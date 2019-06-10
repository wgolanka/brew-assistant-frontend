import React  from 'react';
import classes from './Card.css';
import BrewImage from "./bImage";

const Card = (props) => {
    const { tea } = props;
    console.log("Card with details");
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{tea.name}</h5>
                <BrewImage imgUrl={tea.imageLink}/>
                <div className="card-text">
                    <p className="card-par">Origin country: {tea.originCountry}</p>
                    <p className="card-par">How much caffeine: {tea.caffeineContent}mg</p>
                    <p className="card-par">Description: {tea.description}</p>
                </div>
            </div>
            <div className="card-footer">
                <div className="button-details">
                    <a href="#" onClick={ () => props.setShowTeaDetailsId(tea.id)} className="btn btn-primary">Details</a>
                </div>
            </div>
        </div>
    )
};

export default Card;