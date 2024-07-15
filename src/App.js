// import logo from './logo.svg';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/home'
import Login from './pages/login'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <Router basename="/">
    <Switch>
      <Route path="/login"><Login /></Route>
      </Switch>
    </Router>
  )
}

export default App