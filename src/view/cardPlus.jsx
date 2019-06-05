import React  from 'react';

const CardPlus = (props) => {
    const { tea } = props;

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Click me to add new brew!</h5>
                <p className="card-text">Plus image should be here</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
};

export default CardPlus;