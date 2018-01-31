import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import axios from 'axios';

class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        };
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=5ce147dcafdc4e8d47d3dc6dfdb5f2d8`)
        .then(res => {
            console.log("resp",res);
            const films = res.data.results.map(obj => obj);
            this.setState({ films });
        });
    }

    render() {
        return (
            <div>
                <Navbar/> {/* Jumbotron se  trouve dans ../../components/Jumbotron */}
                <Jumbotron title="Films" subtitle=""/> {/* Jumbotron se  trouve dans ../components/Jumbotron */}

                <div className="container">
                    <div className="row">

                        {this.state.films.map(film =>
                            <div className="col-md-4 col-sm-4 col-xs-6" key={film.id}>
                                  <div className="crop hovereffect">
                                     <div >
                                         <h5 align="center">{film.title}</h5>
                                     </div>
                                      <div className="overlay">
                                          <img src={"https://image.tmdb.org/t/p/w300" + film.poster_path} />
                                      </div>
                                  </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
  
export default Films;