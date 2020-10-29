import React from "react";
import StudyCase from 'components/StudyCase'
import {
    Switch,
    Route,
    Link,
} from "react-router-dom";
import { FormattedMessage } from 'react-intl';
import './index.scss'; 

const Works = () =>
    <div className="container">
        <h1><FormattedMessage id="WorksTitle" /></h1>
        <p><FormattedMessage id="WorksDescription" /></p>
        <div>
        <div>
                <div className="row">
                    <div className="col-md-4">
                    <div className="card">
                        <Link to="/works/platon" className="text-center"><FormattedMessage id="platon.title" /></Link>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card">
                        <Link to="/works/sedal" className="text-center"><FormattedMessage id="sedal.title" /></Link>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card">
                        <Link to="/works/solane" className="text-center"><FormattedMessage id="solane.title" /></Link>
                    </div>
                    </div>
                </div>
            </div>
            <Switch>
                <Route path={`/works/:studycaseSlug`}>
                    <StudyCase />
                </Route>
            </Switch>
        </div>

        

    </div>
export default Works
