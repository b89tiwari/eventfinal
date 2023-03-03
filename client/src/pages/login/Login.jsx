import { Link } from "react-router-dom"
import "./login.css"
export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email/UserName</label>
        <input type="text" className ="loginInput" placeholder="Enter Your Email."/>
        <label>Password</label>
        <input type="password" className ="loginInput" placeholder="Enter Your Password."/>
        <button className="loginButton">Login</button>
        <Link className="link loginRegisterButton" to='/register'>Register</Link>

      </form>
    </div>
  )
}
