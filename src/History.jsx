import React from 'react'

const History = () => {
  return (
    <main className="history">
      <div className="historyheading">
        <h1 style={{color: "#f48454"}}>HISTORY</h1>
        <select className="history-options" required>
           <option value="option 1">ALL</option>
           <option value="option 2">Income</option>
           <option value="option 3">Expenses</option>
        </select>
      </div>
      <div className="vertical"></div>
    </main>
  )
}

export default History