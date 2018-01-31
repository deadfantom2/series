import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';

class About extends Component {
    render(){
        return(

            <div>
                <Navbar /> {/* Navbar se  trouve dans ../components/Navbar */}
                <Jumbotron title="About" subtitle="A venir about"/> {/* Jumbotron se  trouve dans ../components/Jumbotron */}
                <div className="container">
                    <h2>About</h2>
                </div>

                <Footer /> {/* Footer se  trouve dans ../components/Footer */}
            </div>
        );
    }
}

export default About;




