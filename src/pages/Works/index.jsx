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
    <div>
        <section className="jumbotron text-center">
            <div className="container">
                <h1><FormattedMessage id="WorksTitle" /></h1>
                <p className="lead text-muted"><FormattedMessage id="WorksDescription" /></p>
            </div>
        </section>
        <div>
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <div class="card-body text-center">
                            <FormattedMessage id="platon.title" />
                            </div>
                            <Link to="/works/platon" className="text-center">voir plus</Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <div class="card-body text-center">
                            <FormattedMessage id="sedal.title" />
                            </div>
                            <Link to="/works/sedal" className="text-center">voir plus</Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <div class="card-body text-center">
                            <FormattedMessage id="solane.title" />
                            </div>
                            <Link to="/works/solane" className="text-center">voir plus</Link>
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
