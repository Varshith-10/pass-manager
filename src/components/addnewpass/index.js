import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import YourPass from '../YourPass'
import './index.css'

class Addnewpass extends Component {
  state = {
    list: [],
    webName: '',
    userName: '',
    password: '',
    showPass: false,
  }
  submitClicked = event => {
    event.preventDefault()
    const {webName, userName, password} = this.state
    const newList = {
      id: uuidv4(),
      webName,
      userName,
      password,
    }
    this.setState(prevState => ({
      list: [newList],
      webName: '',
      userName: '',
      password: '',
    }))
  }
  onChangeWeb = event => {
    this.setState({webName: event.target.value})
  }
  onChangeUser = event => {
    this.setState({userName: event.target.value})
  }
  onChangePass = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {webName, userName, password, newList, showPass} = this.state
    return (
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="image"
          />
          <div>
            <form onSubmit={this.submitClicked}>
              <h1>Add New Password </h1>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  className="formImage"
                />
                <input
                  value={webName}
                  placeholder="Enter Website"
                  type="text"
                  onChange={this.onChangeWeb}
                />
              </div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  className="formImage"
                />
                <input
                  value={userName}
                  placeholder="username"
                  type="text"
                  onChange={this.onChangeUser}
                />
              </div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  className="formImage"
                />
                <input
                  value={password}
                  placeholder="password"
                  type="Password"
                  onChange={this.onChangePass}
                />
              </div>
              <button type="submit">Add</button>
            </form>
          </div>
        </div>
        <ul>
          {newList.map(each => (
            <YourPass key={each.id} each={each} showPass={showPass} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Addnewpass
