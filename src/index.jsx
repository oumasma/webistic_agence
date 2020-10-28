import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
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
  const [language, setLanguage] = useState('fr');
  //La langue par défaut de notre app (doit correspondre à un des index de la variables messages ci dessus).

  return (
    <main>
      <IntlProvider locale={language} messages={messages[language]}>
        <Router>
          <div>
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
          </div>
        </Router>
      </IntlProvider>
    </main>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));