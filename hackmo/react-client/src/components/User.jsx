import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    }
  }

  render() {
    return (
    <li>
      {this.props.user.name}
    </li>
    )
  }
}

export default User;