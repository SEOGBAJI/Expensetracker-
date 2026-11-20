import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import { Routes, Route } from 'react-router';

function App() {
  
  return (
    <div className="App"> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>  
  )
    
 }


export default App
