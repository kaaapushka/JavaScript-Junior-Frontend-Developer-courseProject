import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <ul className='nav'>
            <li className='nav-item'>
                <Link className='nav-link' to='/'>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/login'>
                    login
                </Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/Users'>
                    Users
                </Link>
            </li>
        </ul>
    );
};

export default NavBar;
