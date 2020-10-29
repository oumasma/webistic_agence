import React from "react";
import { FormattedMessage } from 'react-intl';


const Home = () =>
    <section className="jumbotron text-center">
        <div className="container">
            <h1><FormattedMessage id="HomeTitle" /></h1>
            <p className="lead text-muted"><FormattedMessage id="HomeDescription" /></p>
        </div></section>


export default Home