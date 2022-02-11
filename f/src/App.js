import './App.css';
import NavBar from "./components/NavBar/Body"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
// import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
// import Projects from './pages/Projects';

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      {/* <img src="https://pyxis.nymag.com/v1/imgs/bef/c87/6359a2a35db664d45ac31794d122d4c8a7-15-nic-cage.rsquare.w330.jpg" alt=""/> */}
      <Switch>
        <Route path='/' exact component={ Home }/>
        {/* <Route path='/about' exact component={ AboutMe }/> */}
        <Route path='/contact' exact component={ Contact }/>
        {/* <Route path='/projects' exact component={ Projects }/> */}
      </Switch>
    </Router>
    </>
  );
}

export default App;
