import React, { Component } from 'react';
import logo from '../img/nasa_logo.png';

class NavBar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <img src={logo} alt="Nasa Logo" className="logo_image"/>
                    </li>
                    <li>
                        <p>Astronomy Photo of the Day</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar;