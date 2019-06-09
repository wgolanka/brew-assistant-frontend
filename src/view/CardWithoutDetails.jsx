import React  from 'react';
import classes from './Card.css';

const CardNoDetails = (props) => {
    const { tea } = props;
    console.log("Card no details");
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title"> Tea: {tea.name}</h5>
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
                <p>Author: {tea.author.name} {tea.author.surname}</p>
            </div>
        </div>
    )
};

export default CardNoDetails;