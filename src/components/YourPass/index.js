const YourPass = props => {
  const {each, showPass} = props
  const {id, webName, userName, password} = each
  return (
    <div>
      <h1>Your Password </h1>
      <li>
        <p>{webName}</p>
        <p>{userName}</p>
        {showPass ? (
          <p>{password}</p>
        ) : (
          <img src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png" />
        )}
      </li>
      <input type="checkbox" />
      <button>Show Password</button>
    </div>
  )
}
export default YourPass
