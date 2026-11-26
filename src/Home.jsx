import finance from "./Assets/personal-finance-45.png";
import { Link } from 'react-router';
import './Home.css'
  function Home() {

  return (
    <main>
     <div className="home">
        <header className="header">
        <p style={{
          color: "#F4845F",
          fontSize: "20px" 
          }}>
          EXPENSETRACKER</p>
        <div className="buttons">
          <Link to="/login">
             <button>LOGIN</button>
          </Link>
          <Link to="/signup">
            <button>SIGNUP</button>
          </Link>
        </div>
      </header>
      <div className="main-content">
        <p style={{fontSize: "60px"}}>KEEP TRACK OF YOUR SPENDING.<br />
          KNOW WHERE AND WHEN EVERY<br /> PENNY GOES
        </p>
        <img 
          src={finance} 
          alt="Personal finance" 
          style={{
            width: "400px",
            height: "500px",
            color: "#F4845F"
          }} 
          />
       </div>
     </div>

      <section className="section">
      <p style={{
        color: "white",
        fontSize: "30px",
        textAlign: "center",
        margin: "1rem 0"
      }}>
        WHAT TO EXPECT FROM <span style={{color: "#f4845f"}}>EXPENSETRACKER</span></p>
      <div className="section-content">
        <p className="s-text">Easy to use expense tracker. User friendly interface</p>
        <p className="s-text">Smart Money, Smart choices</p>
        <p className="s-text">Manage your finances effortlessly. Say no to disorganized finances.</p>
        <p className="s-text">Set monthly budget and track spending</p>
        <p className="s-text">Bar chart with detailed financial analysis</p>
      </div>
      <p style={{
        color: "white",
        fontSize: "30px",
        textAlign: "center",
        margin: "1.5rem 0"
      }}>Start making smart financial choices by joining us today. Create an account or login to an existing account at the top of right corner of the webpage.</p>
    </section>
    </main> 

  )
    
 }


export default Home
