import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Chat View</h1>

        <ul id="messages"></ul>
        <form action="">
          <input id="m" autoComplete="off" /><button>Send</button>
        </form>

      </div>
    )
  }
})
