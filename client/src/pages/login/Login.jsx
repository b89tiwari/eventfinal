import { useContext, useRef } from "react";
import { Link } from "react-router-dom"
import {Context}  from "../../context/Context";
import "./login.css"
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);
  console.log(isFetching);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const resp = await axiosClient.post("/auth/login", {
        username: userRef.current.value,
        password: userRef.current.value,
      });
      //console.log("dd");
      //console.log(resp);
      dispatch({ type: "LOGIN_SUCCESS", payload: resp.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  }
  //console.log(user);
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>UserName</label>
        <input type="text" className="loginInput" placeholder="Enter Your Username." ref={userRef} />
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter Your Password." ref={passwordRef} />
        <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
        <Link className="link loginRegisterButton" to='/register'>Register</Link>

      </form>
    </div>
  )
}
