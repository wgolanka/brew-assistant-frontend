import React, {Component} from 'react';
import Layout from "./containers/Layout/Layout";
import Home from './containers/Home';
import {actionFetchTeas} from "./reduxUtils/actions/actions";
import {connect} from 'react-redux';

class App extends Component {

    componentDidMount() {
        this.props.fetchTeas();
    }

    render() {
        return (
            <Layout>
                <Home />
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