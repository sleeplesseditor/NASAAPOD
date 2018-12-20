import React, { Component } from 'react';
import logo from '../img/iViewLogo.png';

class Footer extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <img src={logo} alt="iViewLogo" className="footer_image"/>
                    </li>
                    <li>
                        <p className="footer_text">An iView Project</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Footer;