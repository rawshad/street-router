import React from 'react';
import SearchedCommuters from '../SearchedCommuters/SearchedCommuters';
import details from '../../data/data.json'
import { useParams } from 'react-router';
import '../Confirmation/Confirmation.css'

const Confirmation = () => {
    const { type } = useParams();
    const selectedData = details.find(information => information.type === type);
    const { id, img, price, capacity } = selectedData;
    console.log('confirmation', selectedData);
    return (
    <div className="confirmation">
        <SearchedCommuters selectedData={selectedData} key={id.selectedData} />
        <div className="locator">
            <img src={selectedData.img} alt=""/>
        </div>
    </div>
    );
};

export default Confirmation;