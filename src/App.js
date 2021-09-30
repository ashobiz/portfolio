import React from 'react';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Works from './pages/Works'

function App() {
  return (
    <div className="app">
      <div className="main">

        <Router>

          {/* Colored dots */}
          <div className="dots"><i></i><i></i><i></i></div>
          {/* Navigation */}
          {/* <nav>
            <ul>
              <li><NavLink to="/" exact>Home</NavLink></li>
              <li><NavLink activeClassStyle="active" to="/skills">Skills</NavLink></li>
              <li><NavLink to="/works">Works</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav> */}

            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/skills" exact={true}>
              <Skills />
            </Route>
            <Route path="/works" exact={true}>
              <Works />
            </Route>
            <Route path="/contact" exact={true}>
              <Contact />
            </Route>
          
        </Router>

      </div>
      <footer>Copyright {new Date().getFullYear()} - <a href="http://www.ashokworld.live">Ashok</a></footer>
    </div>
  );
}

export default App;
