import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import './Home.css';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    //onclick button avec la redirect to about
    register(){
        if(this.state.username === 'frfr'){
            this.props.history.push('/about');
        }
        console.log('this.state', this.state);
    }

    render(){
        return(

            <div>

                <Jumbotron title="" subtitle=""/> {/* Jumbotron se  trouve dans ../components/Jumbotron */}
                    <div className="container">
                        <h2>Login</h2>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-offset-5 col-md-3">
                                <div className="form-login">

                                    <label>Username (frfr)</label><input type="text" className="form-control input-sm chat-input" placeholder="username" onChange={event => this.setState({username: event.target.value})}/><br/>
                                    <label>Password</label><input type="text" className="form-control input-sm chat-input" placeholder="password" onChange={event => this.setState({password: event.target.value})}/><br/>
                                    <button className="btn btn-primary" type="button" onClick={() =>this.register()}>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>

                <Footer /> {/* Footer se  trouve dans ../components/Footer */}
            </div>
        );
    }
}

export default Home;




