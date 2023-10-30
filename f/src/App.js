import './App.css';
import React from 'react';
import NavBar from "./components/primary/NavBar/Body"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
// import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import ProjectValue from './pages/ProjectValue';
import Blog from './pages/Blog';
import Programs from './pages/Programs';


function App() {
  return (
    <>
    <Router>
      <NavBar/>
      {/* <img src="https://pyxis.nymag.com/v1/imgs/bef/c87/6359a2a35db664d45ac31794d122d4c8a7-15-nic-cage.rsquare.w330.jpg" alt=""/> */}
      <Switch>
        <Route path='/' exact component={ Home }/>
        <Route path='/Blog' exact component={ Blog }/>
        <Route path='/contact' exact component={ Contact }/>
        <Route path='/programs' exact component={ Programs }/>
        <Route path='/project-value' exact component={ ProjectValue }/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
