import React, { Component } from 'react';
import "./Header.css";
import logo from './Metropolia_Ammattikorkeakoulu_logo.svg.png';

class Header extends Component {
    render() {
        return(
            <div className="flex-container" >
                <div>
                    <img src={logo} className="kuva" />
                </div>
                <div>
                    <p>Kirjasto Kysely</p>
                </div>
                <div>
                    <img src={logo} className="kuva" />
                </div>
            </div>
        )
    }
}

export default Header;