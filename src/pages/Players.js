import React, { Component } from 'react';
import { Player } from 'video-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


class Players extends Component {

    constructor(props) {
        super(props);
        //lien pout avoir photo superman
        this.state = {
            lien: 'http://image.tmdb.org/t/p/w342'
        }
        this.changeCurrentTime = this.changeCurrentTime.bind(this);
    }

    // Permet de -/+ secondes sur le player(secondes)
    changeCurrentTime(seconds) {
        return () => {
            const { player } = this.refs.player.getState();
            const currentTime = player.currentTime;
            this.refs.player.seek(currentTime + seconds);
        };
    }

    render () {
        return (
            <div>
                <Navbar /> {/* Navbar se  trouve dans ../components/Navbar */}

                <div className="container">
                    <h5 align="center">BATMAN V SUPERMAN</h5><br/>
                    <Player playsInline ref="player" poster={this.state.lien+"/cGOPbv9wA5gEejkUN892JrveARt.jpg"} src="http://videos.hd-trailers.net/BatmanvSuperman_TLR-1_5.1-480p-HDTN.mp4"/>
                    <button onClick={this.changeCurrentTime(-60)} type="button" className="col-sm-6">-60 sec</button>
                    <button onClick={this.changeCurrentTime(+60)} type="button" className="col-sm-6">+60 sec</button>
                </div>

                <Footer /> {/* Footer se  trouve dans ../components/Footer */}
            </div>

        );
    }
}

export default Players;







