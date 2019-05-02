import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Button from './Button';
import './styles.scss';

class App extends Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <h2>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Contar</Button>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
