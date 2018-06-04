import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
  constructor (props) {
    super();
    this.state = {
      age: props.initialAge,
      name: props.name,
      status: 0,
      title: props.initialTitle,
    };
    setTimeout(() => {
      this.setState({
        status: 1,
      });
    }, 3000);
    console.log('Construct');
  }

  componentWillMount () {
    console.log('componentWillMount');
  }

  componentDidMount () {
    console.log('componentDidMount');
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate (previousProps, previousState) {
    console.log('componentDidUpdate ', previousProps, previousState);
  }

  componentWillUnmount () {
    console.log('componentWillUnMount');
  }

  onMakeOlder () {
    this.setState({
      age: this.state.age + 1,
    });
  }

  onChangeName () {
    this.props.newtitle(this.state.title);
  }

  onHandleInputChange (event) {
    this.setState({
      title: event.target.value,
    });
  }

  render () {
    return (
      <div>
        <p>New component</p>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        <p>Status: {this.state.status}</p>
        <hr/>
        <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
        <hr/>
        <button onClick={this.props.greet} className="btn btn-primary">Hello!</button>
        <hr/>
        <input type="text" value={this.state.title} onChange={(event) => this.onHandleInputChange(
          event)}/>
        <button onClick={this.onChangeName.bind(
          this)} className="btn btn-primary">Update title!</button>

      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  initialTitle: PropTypes.string,
  initialAge: PropTypes.number,
  greet: PropTypes.func,
};
