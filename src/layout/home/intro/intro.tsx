import React, { FunctionComponent } from 'react';
import { InfoCard } from './info-card/info-card';

import './intro.styl';

const text = 'Some interesting stuff you can hover';

export const Intro: FunctionComponent = () => {
    return (
        <div className="intro">
            <div className="card-grid">
                {text.split(' ').map(word =>
                    <InfoCard key={word} content={word} />
                )}
            </div>
        </div>
    );
};