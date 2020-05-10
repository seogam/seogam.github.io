import React from 'react';
import { About } from './components/about';
import { Menu } from './components/menu';
import { Contact } from './components/contact';
import { Topics } from './components/topics';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/topics">Topics</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/topics">
                <Topics />
              </Route>
              <Route path="/">
                <h1>Home</h1>
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
