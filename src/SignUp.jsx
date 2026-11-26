import React from 'react'
import finance from "./Assets/personal-finance-45.png";
import './SignUp.css'
import { Link } from 'react-router';

const SignUp = () => {
  return (
    <main className="signup-page">
      <div className="signup-section">
        <h1 style={{
         color: "#F4845F",
         fontSize: "30px",
         textAlign: "center",
         marginTop: "1rem"
        }}>EXPENSETRACKER</h1>
        <div className="progresscontainer">
         <ul className="progressbar">
          <li className="active">step 1</li>
          <li>step 2</li>
         </ul>
       </div>
       <div className="step1">
         <img 
          src={finance}
          alt="Personal finance" 
          style={{
            width: "400px",
            height: "500px",
            color: "#F4845F"
          }} 
          />
         <form className="signup-form">
          <p style={{
            color: "#F4845F",
            marginBottom: "20px"
           }}>CREATE YOUR ACCOUNT</p> 
           <label>FULLNAME</label>
           <input
             id="fullname"
             type="text"
             placeholder="input your name"
             required
           />
           <label>EMAIL</label>
           <input
             id="email"
             type="email"
             placeholder="input your email"
             required
           />
           <label>PASSWORD</label>
           <input
             id="password"
             type="password"
             placeholder="enter password"
             required
           />
           <label>CONFIRM PASSWORD</label>
           <input
             id="confirmpassword"
             type="password"
             placeholder="confirm password"
             required
           />
           <button style={{
             backgroundColor: "#F4845F",
             color: "white"
           }}>PROCEED</button>
           <p style={{
              marginTop: "1rem",
              color: "white"
              }}>Already have am account?
             <Link to="/login" style={{
              color: "#F4845F",
              textDecoration: "none",
              marginLeft: "5px"}}>
              LOGIN</Link>
           </p>
         </form>
       </div> 
        
       <div className="step2" style={{display: "none"}}>
         <img 
          src={finance} 
          alt="Personal finance" 
          style={{
            width: "400px",
            height: "500px",
            color: "#F4845F"
          }} 
          />
       <form className="signup-form">
          <p style={{
            color: "#F4845F",
            marginBottom: "20px"
           }}>CREATE YOUR ACCOUNT</p> 
           <label>DATE OF BIRTH</label>
           <input
             id="dob"
             type="date"
             required
           />
           <label>EMPLOYMENT STATUS</label>
           <select className="employment" required>
              <option value="option 1">Employed</option>
              <option value="option 2">Unemployed</option>
              <option value="option 3">Student</option>
           </select>
           <label>GENDER</label>
           <select className="gender" required>
             <option value="option 1">male</option>
             <option value="option 2">female</option>
             <option value="option 3">rather not say</option>
           </select>
           <button style={{
             backgroundColor: "#F4845F",
             color: "white",
             marginTop: "1rem"
           }}>ENTER</button>
           <p style={{
              marginTop: "1rem",
              color: "white"
              }}>Already have am account?
             <Link to="/login" style={{
              color: "#F4845F",
              textDecoration: "none",
              marginLeft: "5px"}}>
              LOGIN</Link>
           </p>
         </form>
        </div> 
      </div>
    </main>
  )
}

export default SignUp