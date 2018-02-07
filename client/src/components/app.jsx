import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './header';
import Chirps from './chirps';
import Single from './single';
import Edit from './edit';

class Navigation extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Header />
                    
                    <Switch>
                        <Route exact path="/" component={Chirps} />
                        <Route exact path ="/:id" component ={Single}  />
                        <Route exact path="/:id/edit" component ={Edit}  />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;