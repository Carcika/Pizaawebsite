import React from 'react';
import Navbar from './components/navbar';
import './App.css'
import react from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './components/footer';
import Home from './components/home';
import Menu from './components/menu';

function App() {
  return (
    <react.Fragment>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/menu' exact component={Menu} />
        </Switch>
      </Router>
    </react.Fragment>
  );
}

export default App;
