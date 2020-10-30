import React from 'react';
import { IntlProvider } from 'react-intl';
import Config from './config'
//Le chemin vers votre dossier translation n'est peut être pas le même
import messagesFr from './translation/fr';
import messagesEn from './translation/en';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
import Navbar from './components/Navbar'

const messages = {
    fr: messagesFr,
    en: messagesEn,
}; // On créé un objet qui contient toutes nos traductions, avec un index par langue


const App = () => {
    const defaultLang = localStorage.getItem(Config.STORAGE_KEY) || 'fr';
    const [language, setLanguage] = React.useState(defaultLang);
    //La langue par défaut de notre app (doit correspondre à un des index de la variables messages ci dessus).

    React.useEffect(() => {
        localStorage.setItem(Config.STORAGE_KEY, language);
    }, [language]);



    return (
        <main>
            <IntlProvider locale={language} messages={messages[language]}>
                <Router>
                        <Navbar setLanguage={setLanguage}
                            language={language}
                        />

                        <Switch>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/works">
                                <Works />
                            </Route>
                            <Route exact path="/">
                                <Home />
                            </Route>
                        </Switch>
                </Router>
            </IntlProvider>
        </main>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));