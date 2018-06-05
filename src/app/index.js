import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Root } from './components/Root';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path={'/'} component={Root}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

render(<App/>, window.document.getElementById('app'));
