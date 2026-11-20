import React from 'react'
import finance from "./Assets/personal-finance-45.png";
import './SignUp.css'

const SignUp = () => {
  return (
    <main className="signup-page">
      <div className="signup-section">
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
             type="text"
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
             id="fullname"
             type="text"
             placeholder="confirm password"
             required
           />
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
             id="fullname"
             type="date"
             placeholder="date of birth"
             required
             />
           <label>EMPLOYMENT STATUS</label>
           <select className="employment" required>
              <option value="">Select an option</option>
              <option value="option 1">Employed</option>
              <option value="option 2">Unemployed</option>
              <option value="option 3">Student</option>
           </select>
           <label>GENDER</label>
           <select className="gender" required>
             <option value="">choose your gender</option>
             <option value="option 1">male</option>
             <option value="option 2">female</option>
             <option value="option 3">rather not say</option>
           </select>
         </form>
        </div> 
      </div>
    </main>
  )
}

export default SignUp