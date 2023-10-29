import './App.css';
import React from 'react';
import NavBar from "./components/NavBar/Body"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
// import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectValue from './pages/ProjectValue';
import Resume from './pages/Resume'
import ProgramsList from './components/ProgramsList/ProgramsList';


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
        <Route path='/resume' exact component={Resume}/>
        <Route path='/projects' exact component={ Projects }/>
        <Route path='/programs' exact component={ ProgramsList }/>
        <Route path='/project-value' exact component={ ProjectValue }/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
