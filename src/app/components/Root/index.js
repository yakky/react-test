import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Header } from '../Header';
import { Home } from '../Home';
import { User } from '../User';

export class Root extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header />
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                      <Switch>
                        <Route path='/user/:id' component={User}/>
                        <Route path='/home' component={Home}/>
                      </Switch>
                    </div>
                </div>
            </div>
        );
    }
}
