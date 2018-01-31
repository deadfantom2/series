import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom'; //API pour les liens dans la navbar
import Jumbotron from '../../components/Jumbotron';
import Footer from '../../components/Footer';



import { getFilms } from './actions';



class Film extends Component {

    render(){
        return(

            <div>

                <Jumbotron title="Liste" subtitle="Films"/> {/* Jumbotron se  trouve dans ../../components/Jumbotron */}
                    <div className="container">
                        <h2>Liste des films</h2>
                    </div>


                <div className="container">
                    <div className="row">

                        {this.props.films.map((c, i) =>
                            <div className="col-md-4 col-sm-4 col-xs-6" >
                                <div><h2>{c.title}</h2></div>
                            </div>
                        )}
                    </div>
                </div>


                <Footer /> {/* Footer se  trouve dans ../components/Footer */}
            </div>


        );

    }

}

function mapStateToProps(state){
    return{
        films: state.films
    }
};

const mapDispatchToProps = dispatch => ({
    getFilmsFilter(id) {
        return () => {
            dispatch(getFilms(id));
        };
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Film);


// export default Film;

