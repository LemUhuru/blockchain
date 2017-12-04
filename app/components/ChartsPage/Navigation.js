import { React, Component } from 'react'

class Navigation extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main-nav">
        <ul>
          <li>Popular</li>
          <li>Currency Statistics</li>
          <li>Block Details</li>
          <li>Mining Information</li>
          <li>Network Activity</li>
          <li>Wallet Activity</li>
        </ul>
      </div>
    )
  }
}

export default Navigation
