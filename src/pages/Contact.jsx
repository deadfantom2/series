import React, { Component } from 'react';
import { Link} from 'react-router-dom'; //API pour les liens dans la navbar
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';

class Contact extends Component {

    constructor(props){
        super(props);
        this.state = {
            a: ''
        }
    }

    register(){
        alert(this.state.a);
        console.log( JSON.stringify("http://www.omdbapi.com/?t=" +this.state.a+"&apikey=1e4c1174"));
    }

    render(){
        return(

            <div>
                <Navbar /> {/* Navbar se  trouve dans ../components/Navbar */}
                <Jumbotron title="Contact" subtitle="A venir Contact"/> {/* Jumbotron se  trouve dans ../components/Jumbotron */}
                <div className="container">
                    <h2>Contact</h2>
                </div>

                <input type="text"  onChange={event => this.setState({a: event.target.value})}/>
                <button className="btn btn-primary" type="button" onClick={() =>this.register()}>Login</button>
                <Link to={"http://www.omdbapi.com/?t=" +this.state.a+"&apikey=1e4c1174"} >http://www.omdbapi.com/?t={this.state.a}&apikey=1e4c1174</Link>

                <Footer /> {/* Footer se  trouve dans ../components/Footer */}

            </div>
        );
    }
}

export default Contact;








