import React from "react";
import { FormattedMessage } from 'react-intl';

const About = () => 
    <div className="container">

    <h1><FormattedMessage id="AboutTitle" /></h1>
    <p><FormattedMessage id="AboutDescription" /></p>

    </div>
export default About
