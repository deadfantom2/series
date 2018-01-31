import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'; //API pour les routes
import './App.css';


import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Film from './pages/film/Film';
import Players from './pages/Players';

class App extends Component {
  render() {
    return (

        <Router>
          <div>
            <Route exact path="/" component={Home} /> {/* exact route principal pour le path basic */}
            <Route path="/about" component={About} /> {/* le path /about */}
            <Route path="/contact" component={Contact} /> {/* le path /about */}
            <Route path="/film" component={Film} /> {/* le path /about */}
            <Route path="/player" component={Players} /> {/* le path /about */}
          </div>
        </Router>


    );
  }
}

export default App;
