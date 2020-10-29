import React from "react";
import { FormattedMessage } from 'react-intl';

const About = () =>
    <section className="jumbotron text-center">
        <div className="container">

            <h1><FormattedMessage id="AboutTitle" /></h1>
            <p className="lead text-muted"><FormattedMessage id="AboutDescription" /></p>

        </div></section>

export default About
