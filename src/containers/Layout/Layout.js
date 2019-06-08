import React from 'react';
import Content from "./Content";
import { ViewHeader } from "../../view/ViewHeader";
import { ViewHero } from "../../view/ViewHero";

const Layout = ({children}) => {
    return (
        <React.Fragment>
            <ViewHeader/>
            <ViewHero />

            <Content children={children}/>
        </React.Fragment>
    );
};

export default Layout;
