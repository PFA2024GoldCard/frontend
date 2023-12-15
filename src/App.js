// App.js

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './Pages/SignIn';

function App() {
  return (
    
        <Router>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
         
          <Routes>
            <Route path="/SignIn" element={<SignIn />} />
          </Routes>
        </Router>
    
  );
}

export default App;
