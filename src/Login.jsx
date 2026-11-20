import React from 'react'
import finance from "./Assets/personal-finance-45.png";
import './Login.css'
import { Link } from 'react-router';
const Login = () => {
 
  
  return (
    <div className="page">
     <section className="login-section">
      <h1 style={{
       color: "#F4845F",
       fontSize: "30px",
       textAlign: "center"
      }}>EXPENSETRACKER</h1>
      <div className="login-form">
        <img 
          src={finance} 
          alt="Personal finance" 
          style={{
            width: "400px",
            height: "500px",
            color: "#F4845F"
          }} 
          />
        <form className="login-input">
          <p style={{
           textAlign: "center",
           color: "#F4845F",
           fontSize: "15px",
           marginTop: "1rem",
           marginBottom: "2rem"
          }}>LOGIN YOUR ACCOUNT</p>
          <label>EMAIL</label> 
          <input
            id="email"
            type="text"
            placeholder="Input your email"
            required
          />
          <label style={{
            marginTop: "1rem"
          }}>PASSWORD</label>
          <input
            id="password"
            type="password"
            placeholder="Input your password"
            required
           />
          <p style={{marginTop: "1rem"}}>
            Don't have an account?
            <Link to="/signup" style={{
              color: "#F4845F",
              textDecoration: "none",
              marginLeft: "5px"}}>
              SIGNUP</Link></p>
        </form>
      </div>
     </section>
    </div>
  )
}

export default Login
