import React, {Component} from 'react';
import Layout from "./containers/Layout/Layout";
import Home from './containers/Home';
import {actionFetchTeas} from "./reduxUtils/actions/actions";
import {connect} from 'react-redux';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import UserTeas from "./view/Router";

class App extends Component {

    componentDidMount() {
        this.props.fetchTeas();
    }

    render() {
        return (
            <Layout>
                <Router>
                    <Home exact path="/" />
                    <Route exact path="userTeas" component={UserTeas}/>
                </Router>
            </Layout>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchTeas: () => dispatch(actionFetchTeas())
  }
};


export default connect(null, mapDispatchToProps)(App);