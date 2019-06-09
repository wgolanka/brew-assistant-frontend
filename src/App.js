import React, {Component} from 'react';
import Layout from "./containers/Layout/Layout";
import Home from './containers/Home';
import {actionFetchTeas} from "./reduxUtils/actions/actions";
import {connect} from 'react-redux';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import UserTeas from "./view/Router";
import { BrowserRouter } from "react-router-dom";

class App extends Component {

    componentDidMount() {
        this.props.fetchTeas();
    }

    render() {
        return (
            <Layout>
                <Switch>
                    <Home exact path="/" />
                    <Route exact path="/userTeas/:userId" component={UserTeas}/>
                </Switch>
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