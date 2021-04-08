import React from 'react';
import '../Commuters/Commuters.css'
import {Link} from 'react-router-dom';

const Commuters = (props) => {
    const {capacity, img, price, type} = props.info;
    return (
        <div className="card">
            <img src={img} alt={type}/>
            <h3><Link to={`/confirmation/${type}`} className="list__item--btn">{type}</Link></h3>
        </div>
    );
};

export default Commuters;