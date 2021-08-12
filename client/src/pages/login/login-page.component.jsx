import { useContext, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Context } from '../../context/context';
import './login-page.styles.css';

export default function LoginPage() {
  const userRef = useRef();
  const pwdRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch({ type:"LOGIN_START" });
      try{
        const res = await axios.post("/auth/login", {
          username: userRef.current.value,
          password: pwdRef.current.value,
        });

        dispatch({ type:"LOGIN_SUCCESS", payload: res.data });
      } catch(err) {
        dispatch({ type:"LOGIN_FAILURE" });
      }
    };

    //console.log(user);

    return (
        <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>User Name</label>
          <input 
            className="loginInput" 
            type="text" 
            placeholder="Enter your user name..." 
            ref={userRef}
          />
          <label>Password</label>
          <input 
            className="loginInput" 
            type="password" 
            placeholder="Enter your password..." 
            ref={pwdRef} 
          />
          <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
        </form>
          <button className="loginRegisterButton"><Link className="link" to="/register">Register</Link></button>
      </div>
    )
}
