import React from 'react';
import studycases from 'data/studycases';
import { useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import './index.scss';

const StudyCase = () => {
    const { studycaseSlug } = useParams();

    const currentCase = studycases.find((studycase) => studycase.slug === studycaseSlug);
    if (!currentCase) {
        return  <FormattedMessage id="error.not.found"/> ;
    }

    return (
        <div className="row">
            <div className="col-md-4 offset-md-4">
            <div className="card mb-4 shadow-sm" id="back">
                <div  class="card-body text-center" id="body">
                <h4>
                    <FormattedMessage id={`${currentCase.slug}.title`} />
                </h4>
                </div>
                <p className="card-footer">
                    <FormattedMessage id={`${currentCase.slug}.description`} />
                </p>
            </div>
            </div>
        </div>
    )

}

export default StudyCase