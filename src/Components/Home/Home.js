import React, { useEffect, useState } from 'react';
import details from '../../data/data.json'
import Commuters from '../Commuters/Commuters';
import '../Home/Home.css';

const Home = () => {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        setInfo(details);
    }, [])
    console.log(info);
    return (
        <div className="card__container">
            {
                info.map(info => <Commuters info={info} key={info.id}/>)
            }
        </div>
    );
};

export default Home;