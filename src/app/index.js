import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      title: "Title",
      homeMounted: true,
    }
  }

  onGreet() {
    alert("Hello!");
  }

  onChangeTitle(newTitle) {
    this.setState({
      title: newTitle,
    })
  }

  onChangeHomeMounted() {
    this.setState({
      homeMounted: !this.state.homeMounted
    })
  }

  render () {
    let homecmp = "";
    if (this.state.homeMounted) {
      homecmp = <Home
                    name={'Iacopo'}
                    initialAge={42}
                    greet={this.onGreet}
                    newtitle={this.onChangeTitle.bind(this)}
                    initialTitle={this.state.title}/>

    }
    let items = [
      {
        key: 'home',
        title: 'Home',
        url: '/',
      },
      {
        key: 'other',
        title: 'Other',
        url: '/other/',
      },
    ];
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 col-offset-1">
            <Header items={items} title={this.state.title}/>
          </div>
        </div>
        <div className="row">
          <div className="col-10 col-offset-1">
            {homecmp}
          </div>
        </div>
        <div className="row">
          <div className="col-10 col-offset-1">
            <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)Mount Home</button>
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));
