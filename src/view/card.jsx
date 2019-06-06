import React  from 'react';
import classes from './Card.css';

const Card = (props) => {
    const { tea } = props;

    return (
        <div className="card">
            <div className="row">
                <div className="card-body">
                    <h5 className="card-title">{tea.name}</h5>
                    <div className="column">
                        <div className="image">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/2017_Kagoshima_sencha.jpg" alt="Japan Sencha"
                                 height={200} width={200}/>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card-text">
                            <p className="card-par">With supporting text aaaa aaaaaa aa du pa </p>
                        </div>
                    </div>
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