import React from 'react';
import studycases from 'data/studycases'
import { useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl';

const StudyCase = () => {
    const { studycaseSlug } = useParams();

    const currentCase = studycases.find((studycase) => studycase.slug === studycaseSlug);
    if (!currentCase) {
        return  <FormattedMessage id="error.not.found"/> ;
    }

    return (
        <div>
            <div>
                <h4>
                    <FormattedMessage id={`${currentCase.slug}.title`} />
                </h4>
                <p>
                    <FormattedMessage id={`${currentCase.slug}.description`} />
                </p>
            </div>
        </div>
    )

}

export default StudyCase