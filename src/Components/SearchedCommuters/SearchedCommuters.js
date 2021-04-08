import React from 'react';
import '../SearchedCommuters/SearchedCommuters.css';

const SearchedCommuters = (props) => {
    const {id, type, capacity, price, img} = props.selectedData;
    return (
        <div>
            <div className="location">
                <ul>
                    <li>Mirpur 1</li>
                    <li>Dhanmondi</li>
                </ul>
            </div>
            <div className="selected__card">
                <img src={img} alt=""/>
                <p>{type}</p> 
                <span>icon</span>
                <p>{capacity}</p>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default SearchedCommuters;