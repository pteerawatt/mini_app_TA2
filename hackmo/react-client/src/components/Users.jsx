import React from 'react';
import User from './User.jsx';
const Users = (props) => {
  return (
    <div>
      {props.data.map((user) => {
        return <User user={user} key={user.id}/>
      })}
    </div>
  )
}

export default Users