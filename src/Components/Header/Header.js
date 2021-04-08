import React from 'react';
import { Link } from "react-router-dom";
import '../Header/Header.css';

const Header = () => {
    return (
        <div className="nav">
            <ul>
                <li><Link to="/home" className="list__item">Home</Link></li>
                <li><Link to="/confirmation" className="list__item">Confirmation</Link></li>
                <li><Link to="/blog" className="list__item">Blog</Link></li>
                <li><Link to="/contact" className="list__item">Contact</Link></li>
            </ul>
            <button><Link to="/login" className="list__item--btn">Log In</Link></button>
        </div>
    );
};

export default Header;