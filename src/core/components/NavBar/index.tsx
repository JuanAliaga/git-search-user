import React from 'react';
import './styles.scss';
import {Link} from 'react-router-dom';

const NavBar = () =>{
    return (
        <nav className="row main-nav">
            <div>
                <Link to="/">
                <h1 className="main-nav-title">Bootcamp DevSuperior</h1>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;