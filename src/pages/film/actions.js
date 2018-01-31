import { API_TMDb_DISCOVER_URL } from '../../ApiFilm';

export const SET_FILMS = 'SET_FILMS';

// Date actuelle
var today = new Date();

// Pour les filtres
var filter_URL = {
    0 : `${API_TMDb_DISCOVER_URL}&primary_release_date.lte=${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}&sort_by=release_date.desc&region=fr`,
    1: `${API_TMDb_DISCOVER_URL}&sort_by=popularity.desc&region=fr`,
    2: `${API_TMDb_DISCOVER_URL}&primary_release_date.gte=${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}&sort_by=release_date.asc&region=fr`,
    3: `${API_TMDb_DISCOVER_URL}&primary_release_year=1995&sort_by=popularity.desc&region=fr`
};

// Selon le filtre afficher les films
export function getFilms(id_filter) {
    return dispatch =>
    fetch(`${filter_URL[id_filter]}`)
        .then(res => res.json())
        .then(res => res.results)
        .then(films => dispatch(setFilms(films)));
}


// Refresh page films
export function setFilms(films) {
    return {
        type: SET_FILMS,
        films
    }
}
