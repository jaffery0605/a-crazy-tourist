import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import BlogsNVlogs from './components/pages/BlogsNVlogs';
import Services from './components/pages/Services';
import FooterSection from './components/FooterSection'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About}/>
        <Route path='/blogsnvlogs' component={BlogsNVlogs}/>
        <Route path='/services' component={Services}/>
      </Switch>
      <FooterSection/>
    </Router>
  );
}

export default App;
