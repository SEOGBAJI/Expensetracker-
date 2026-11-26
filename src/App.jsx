import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import HomePage from './HomePage'
import { Routes, Route } from 'react-router';

function App() {
  
  return (
    <div className="App"> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </div>  
  )
    
 }


export default App
