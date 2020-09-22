import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.setState({ clicked: true });
  }

  render() {
    let user = (
      <li onClick={this.handleClick}>
      {this.props.user.name}
      </li>
    )
    if (this.state.clicked) {
      user = (
        <li>
        {this.props.user.name}
          <form>
            <input></input>
            <button>transfer</button>
          </form>
        </li>
      )
    }
    return user;
  }
}

export default User;