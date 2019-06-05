import React, {Component} from 'react';
import Layout from "./containers/Layout/Layout";
import Home from './containers/Home';

class App extends Component {
    render() {
        return (
            <Layout>
                <Home />
            </Layout>
        );
    }
}


export default App;