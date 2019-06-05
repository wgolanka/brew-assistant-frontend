import React, { PureComponent } from 'react';
import classes from "./Header.css"

class Header extends PureComponent {

    render() {

        return (
            <div className="header">
                <h1>Welcome to your BrewAssistant!</h1>
            </div>
        );
    }
}

export default Header