import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import data from './dummy_data.js';
import Balance from './components/Balance.jsx';
import Search from './components/Search.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      name: '',
      balance: 0
    }
    this.handleNameInput = this.handleNameInput.bind(this)
    this.handleNameSubmit = this.handleNameSubmit.bind(this)
  }

  handleNameInput (e) {
    this.setState({ name: e.target.value})
  }

  handleNameSubmit (e) {
    e.preventDefault()
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === this.state.name) {
        this.setState({ login: true});
      }
    }
    
  }

  render () {
    let mainDisplay;

    if (!this.state.login) {
      mainDisplay = (<Search handleNameSubmit={this.handleNameSubmit} handleNameInput={this.handleNameInput}/>);
    } else {
      mainDisplay = (<Balance />);
    }

    return (
      <div>
        <h1>HackMo</h1>
        <div>
          {mainDisplay}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
