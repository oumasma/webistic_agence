
import error from './error.json';
import home from './home.json';
import about from './about.json';
import works from './works.json';
import studycases from './studycases.json';
import navbar from './navbar.json';


const fr = {
    ...error,
    ...home,
    ...about, 
    ...works,
    ...studycases,
    ...navbar  //On concatène tous nos objets JSON en un seul
};

export default fr;