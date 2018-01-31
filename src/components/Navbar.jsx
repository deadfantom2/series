import React, { Component } from 'react';
import { Link} from 'react-router-dom'; //API pour les liens dans la navbar
import './Navbar.css';


class Navbar extends Component{
    render(){
        return(

           <nav className="navbar navbar-toggleable-md">

               <div className="container">
                   <Link className="navbar-brand" to="/about">Séries Facebook</Link>
                   <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                       <ul className="navbar-nav mr-auto">
                           <li className="nav-item">
                               <Link className="nav-link" to="/about">About</Link>
                           </li>
                           <li className="nav-item">
                               <Link className="nav-link" to="/contact">Contact</Link>
                           </li>
                           <li className="nav-item">
                               <Link className="nav-link" to="/films">Film</Link>
                           </li>
                           <li className="nav-item">
                               <Link className="nav-link" to="/player">Player</Link>
                           </li>
                       </ul>

                   </div>
               </div>



           </nav>

        );
    }
}

export default Navbar;

