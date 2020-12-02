import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import NavBar from './components/NavBar/index';
import Footer from './components/Footer/index';

function App() {
  return (
    <div style={{backgroundColor: "#ecf8f8"}}>
      <Router>
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/Contact' component={Contact} />
        <Route exact path='/Projects' component={Projects} /> 
        <Footer /> 
        </Router>
    </div>

  );
}

export default App;
