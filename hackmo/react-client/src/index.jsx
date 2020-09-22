import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import data from './dummy_data.js';
import Balance from './components/Balance.jsx';
import Search from './components/Search.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      name: '',
      id: '',
      balance: 0,
      data: []
    }
    this.handleNameInput = this.handleNameInput.bind(this)
    this.handleNameSubmit = this.handleNameSubmit.bind(this)
  }

  componentDidMount () {
    axios.get('./api/users')
    .then((response) => {
      this.setState({ data: response.data });
    })
  }

  handleNameInput (e) {
    this.setState({ name: e.target.value})
  }

  handleNameSubmit (e) {
    e.preventDefault()
    for (let i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].name === this.state.name) {
        this.setState({
          login: true,
          id: this.state.data[i].id,
          balance: this.state.data[i].balance
        });
      }
    }
  }

  render () {
    let mainDisplay;

    if (!this.state.login) {
      mainDisplay = (<Search handleNameSubmit={this.handleNameSubmit} handleNameInput={this.handleNameInput}/>);
    } else {
      mainDisplay = (<Balance name={this.state.name} balance={this.state.balance}/>);
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
