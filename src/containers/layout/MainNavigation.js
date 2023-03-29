import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return ( 
        <header className={classes.header}>
            <div className={classes.logo}>Thili</div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/productItems">Women</Link>
                        </li>
                        <li>
                            <Link to="/productItems">Men</Link>
                        </li>
                        <li>
                            <Link to="/productItems">Kids</Link>
                        </li>
                    </ul>
                </nav>
        </header>
     );
}
 
export default MainNavigation;