import React from "react";
import StudyCase from 'components/StudyCase'
import {
    Switch,
    Route,
} from "react-router-dom";
import { FormattedMessage } from 'react-intl';

const Works = () =>
    <div className="container">
        <h1><FormattedMessage id="WorksTitle" /></h1>
        <p><FormattedMessage id="WorksDescription" /></p>
        <div>
            
            <Switch>
                <Route path={`/works/:studycaseSlug`}>
                    <StudyCase />
                </Route>
            </Switch>
        </div>
    </div>
export default Works
