import React, { Component } from 'react';
import logo from '../img/nasa_logo.png';

class NavBar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <a href="/">
                            <img src={logo} alt="Nasa Logo" className="logo_image"/>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <p className="nav_header">Astronomy Photos of the Day</p>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar;