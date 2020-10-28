import error from './error.json';
import home from './home.json';
import about from './about.json';
import works from './works.json';
import platon from './platon.json';
import solane from './solane.json';
import sedal from './sedal.json';
import navbar from './navbar.json';

const en = {
    ...error, 
    ...home,
    ...about, 
    ...works,
    ...platon,
    ...solane,
    ...sedal,
    ...navbar 
     //On concatène tous nos objets JSON en un seul
};

export default en;