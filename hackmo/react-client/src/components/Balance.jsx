import React from 'react';
import Users from './Users.jsx';

const Balance = (props) => (
  <div>
    <h4>Welcome, {props.name}!</h4>
    <h4>
      Your balance is ${props.balance}
    </h4>
    <h4>
      Transfer Money to:
      <Users data={props.data} />
    </h4>
  </div>
);

export default Balance;