// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isClicked: false}

  isSubscribe = () => {
    this.setState(prevValue => ({isClicked: !prevValue.isClicked}))
  }

  getbuttonText = () => {
    const {isClicked} = this.state

    return isClicked ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonTxt = this.getbuttonText()
    return (
      <div className="main-container">
        <h1 className="title">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.isSubscribe}>
          {buttonTxt}
        </button>
      </div>
    )
  }
}

export default Welcome
