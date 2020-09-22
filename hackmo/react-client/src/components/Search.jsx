import React from 'react'
const Search = (props) => {
  return (
    <form onSubmit={(e) => props.handleNameSubmit(e)}>
        <input onChange={(e) => props.handleNameInput(e)}></input>
        <button>Get Balance</button>
    </form>
  )
}

export default Search;