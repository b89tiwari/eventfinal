import { useState } from "react"
import { Link } from "react-router-dom"
import "./register.css"
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const resp = await axiosClient.post("/auth/register", {
        username,
        password,
        email
      });

      resp.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  }
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleRegister}>
        <label>Username</label>
        <input type="text"
          className="loginInput"
          placeholder="Enter Your Username."
          onChange={e => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input type="text"
          className="loginInput"
          placeholder="Enter Your Email."
          onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password"
          className="loginInput"
          placeholder="Enter Your Password."
          onChange={(e) => setPassword(e.target.value)} />
        <button className="registerButton" type="submit">Register</button>
        <Link className="link registerLoginButton" to="/login">Login</Link>

      </form>
      {error && <span className="errormsg"><h4>Something went wrong !!</h4></span>}
    </div>
  )
}
