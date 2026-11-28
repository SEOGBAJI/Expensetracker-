
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpLong, faDownLong, faMoneyBills } from '@fortawesome/free-solid-svg-icons';
import './HomePage.css'
import Transaction from './Transaction';
import History from './History';

const HomePage = () => {
  return (
    <main>
      <header className="homeheader">
        <p style={{
           fontSize: "25px",
           marginLeft: "10px",
           fontWeight: "10px"
        }}>
          WELCOME BACK<br /> name</p>
        <p style={{
           fontSize: "25px",
           marginRight: "10px",
           fontWeight: "10px"
        }}>
          EXPENSETRACKER</p>
      </header>

      <section className="numbersection">
        <h1>TOTAL BALANCE</h1>
        <p style={{fontSize: "35px"}}>0</p>
        <div className="numbers">
          <p className="income">
             <span>
               <FontAwesomeIcon icon={faDownLong} className="icons" />
             </span>
            INCOME<br /><span>0</span>
          </p>
          <div className="divider"></div>
          <p className="expense">
            <span>
               <FontAwesomeIcon icon={faUpLong} className="icons" />
             </span>
            EXPENSE<br /><span>0</span>
          </p>
          <div className="divider"></div>
          <p className="budget">
            <span>
               <FontAwesomeIcon icon={faMoneyBills} className="icons" />
             </span>
            BUDGET<br /><span>0</span>
          </p>
        </div>
      </section>
      <Transaction />
      <History />
    </main>
  )
}

export default HomePage