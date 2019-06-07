import React  from 'react';
import classes from './Card.css';

const Card = (props) => {
    const { tea } = props;
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{tea.name}</h5>
                <div className="image">
                    <img src={tea.imageLink} alt="Brew"
                         height={200} width={200}/>
                </div>
                <div className="card-text">
                    <p className="card-par">OriginCountry: {tea.originCountry}</p>
                    <p className="card-par">How much caffeine: {tea.caffeineContent}mg</p>
                    <p className="card-par">Description: {tea.description}</p>
                </div>
            </div>
            <div className="card-footer">
                <div className="button-details">
                    <a href="#" className="btn btn-primary">Details</a>
                </div>
            </div>
        </div>
    )
};

export default Card;