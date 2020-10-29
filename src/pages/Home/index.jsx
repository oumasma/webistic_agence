import React from "react";
import { FormattedMessage } from 'react-intl';


const Home = () => 
<div className="container">
    <h1><FormattedMessage id="HomeTitle" /></h1>
    <p><FormattedMessage id="HomeDescription" /></p>
</div>

export default Home