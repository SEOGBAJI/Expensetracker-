

export const Transaction = () => {
  return (
    <main className="transaction">
      <h1 style={{
         color: "#f4845f",
         textAlign: "center"
     }}>TRANSACTIONS</h1>
      <section className="t-forms">
        <form className="income-form">
          <p className="transaction-text">
            ADD INCOME</p>
          <label htmlFor="amount" className="t-label"
            style={{
              color: "#f4845f",
              display: "block"
            }}>
            Amount</label>
          <input
           id="amount"
           type="number" 
           placeholder="amount"
           required
          />
          <label htmlFor="source" className="t-label" 
           style={{
             color: "#f4845f",
             display: "block"
           }}>Source</label>
          <input
            id="source"
            type="text"
            placeholder="source"
            required
          />
          <button className="t-btn">ADD</button>
        </form>
        
        <form className="expense-form">
          <p className="transaction-text">
            ADD EXPENSE</p>
          <label htmlFor="amount" className="t-label" 
            style={{
              color: "#f4845f",
              display: "block"
            }}>
            Amount</label>
          <input
           id="amount"
           type="number" 
           placeholder="amount"
           required
          />
          <label htmlFor="use" className="t-label"
            style={{
               color: "#f4845f",
               display: "block"
            }}>Use</label>
          <input
            id="use"
            type="text"
            placeholder="use"
            required
          />
          <button className="t-btn">ADD</button>
        </form>
      </section>
    </main>
  )
}

export default Transaction