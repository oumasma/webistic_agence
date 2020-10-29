import React from 'react';
import './index.scss';
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';
import britainFlag from 'assets/images/britainFlag.png';
import frenchFlag from 'assets/images/frenchFlag.png';

const Navbar = ({ language, setLanguage }) => {
    const allLanguages = [
        { langCode: 'fr', langFlag: frenchFlag },
        { langCode: 'en', langFlag: britainFlag },
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Webistic</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav mr-auto">
                    <Link to="/" className="nav-item nav-link active"><FormattedMessage id="home" /></Link>
                    <Link to="/about" className="nav-item nav-link "><FormattedMessage id="about" /></Link>
                    <Link to="/works" className="nav-item nav-link "><FormattedMessage id="works" /></Link>
                </ul>
                <ul className="navbar-nav">
                    {allLanguages.map(({ langCode, langFlag }) => (
                        (langCode === language) ? null : (
                            <li className="nav-item" key={langCode}>
                                <img
                                    className="nav-link"
                                    src={langFlag}
                                    onClick={() => setLanguage(langCode)}
                                    alt={langCode}
                                />
                            </li>
                        )
                    ))}
                </ul>
            </div>
        </nav>
    );

};

export default Navbar