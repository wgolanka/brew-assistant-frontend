import React from 'react';
import Header from "./Header";
import Content from "./Content";

const Layout = ({children}) => {
    return (
        <React.Fragment>
            <Header/>

            <Content children={children}/>
        </React.Fragment>
    );
};

export default Layout;